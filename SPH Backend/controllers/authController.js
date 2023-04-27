const User = require('../models/User')
const PasswordResetToken = require('../models/PasswordResetToken')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const sendEmail = require('../services/emailService')

// @desc Login
// @route POST /auth
// @access Public
const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundUser = await User.findOne({ email }).exec()

    if (!foundUser || !foundUser.active) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const match = await bcrypt.compare(password, foundUser.password)

    if (!match) return res.status(401).json({ message: 'Unauthorized' })

    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "user_id": foundUser.user_id,
                "email": foundUser.email,
                "roles": foundUser.roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
    )

    const refreshToken = jwt.sign(
        { "email": foundUser.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '7d' }
    )

    // Create secure cookie with refresh token 
    res.cookie('jwt', refreshToken, {
        httpOnly: true, //accessible only by web server 
        secure: true, //https
        sameSite: 'None', //cross-site cookie 
        maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
    })

    // Send accessToken containing user_id and roles 
    res.json({ accessToken })
}

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = (req, res) => {
    const cookies = req.cookies

    if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

    const refreshToken = cookies.jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })

            const foundUser = await User.findOne({ email: decoded.email }).exec()

            if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })

            const accessToken = jwt.sign(
                {
                    "UserInfo": {

                        "user_id": foundUser.user_id,
                        "email": foundUser.email,
                        "roles": foundUser.roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' }
            )

            res.json({ accessToken })
        }
    )
}

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' })
}

const forgotPass = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex")
    const resetPasswordExpires = Date.now() + 900000 // milliseconds (15 mins from now)

    // Save the reset token and expiration date in the PasswordResetToken collection
    const passwordResetToken = new PasswordResetToken({
        userId: user._id,
        token: resetToken,
        expires: resetPasswordExpires,
    })
    await passwordResetToken.save()

    // Send the reset password email
    try {
        const resetURL = `${process.env.APP_URL}/resetPass/${resetToken}`

        await sendEmail({
            to: user.email,
            subject: 'Reset Password Request - Holy Angel University SAUP Portal',
            html: `<p>Your reset password request will expire in 15 mins.
                    <br/>Reset your password by clicking the following link:</p><a href=${resetURL}>Reset Password</a><br/>`,
        })
        res.status(200).json({ message: "Password reset email sent"})
    } catch (err) {
        console.log(err)
        await PasswordResetToken.deleteOne({ userId: user._id })
        res.status(500).json({ message: "Email could not be sent"})
    }
}

const resetPass = async (req, res) => {
    const passwordResetToken = await PasswordResetToken.findOne({
        token: req.body.token,
        expires: { $gt: Date.now() },
    })

    if (!passwordResetToken) {
        return res.status(500).json({ message: "Reset token is invalid or has expired" })
    }

    const user = await User.findById(passwordResetToken.userId)

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt)

    // Update the user's password
    user.password = hashedPassword
    await user.save()

    // Remove the password reset token from the PasswordResetToken collection
    await PasswordResetToken.deleteOne({ userId: user._id })

    res.status(200).json({ message: "Password successfully reset" })
}

module.exports = {
    login,
    refresh,
    logout,
    forgotPass,
    resetPass,
}