const Outreach = require('../models/Outreach')
const User = require('../models/User')

// @desc Get all outreach 
// @route GET /outreach
// @access Private
const getAllOutreach = async (req, res) => {
    // Get all outreach from MongoDB
    const outreach = await Outreach.find().lean()

    // // If no outreach 
    // if (!outreach?.length) {
    //     return res.status(400).json({ message: 'No outreach found' })
    // }

    // Add user_id to each outreach before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    const outreachWithUser = await Promise.all(outreach.map(async (outreach) => {
        const user = await User.findById(outreach.user).lean().exec()
        return { ...outreach, user_id: user.user_id }
    }))

    res.json(outreachWithUser)
}

// @desc Create new outreach
// @route POST /outreach
// @access Private
const createNewOutreach = async (req, res) => {
    const { user, title, text } = req.body

    // Confirm data
    if (!user || !title || !text ) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Outreach.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate outreach title' })
    }

    // Create and store the new user 
    const outreach = await Outreach.create({ user, title, text })

    if (outreach) { // Created 
        return res.status(201).json({ message: 'New outreach created' })
    } else {
        return res.status(400).json({ message: 'Invalid outreach data received' })
    }

}

// @desc Update a outreach
// @route PATCH /outreach
// @access Private
const updateOutreach = async (req, res) => {
    const { id, user, title, text, status } = req.body

    // Confirm data
    if (!id || !user || !title || !text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm outreach exists to update
    const outreach = await Outreach.findById(id).exec()

    if (!outreach) {
        return res.status(400).json({ message: 'Outreach not found' })
    }

    // Check for duplicate title
    const duplicate = await Outreach.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original outreach 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate outreach title' })
    }

    outreach.user = user
    outreach.title = title
    outreach.text = text
    outreach.status = status

    const updatedOutreach = await outreach.save()

    res.json(`'${updatedOutreach.title}' updated`)
}

// @desc Delete a outreach
// @route DELETE /outreach
// @access Private
const deleteOutreach = async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Outreach ID required' })
    }

    // Confirm outreach exists to delete 
    const outreach = await Outreach.findById(id).exec()

    if (!outreach) {
        return res.status(400).json({ message: 'Outreach not found' })
    }

    const result = await outreach.deleteOne()

    const reply = `Outreach '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
}

module.exports = {
    getAllOutreach,
    createNewOutreach,
    updateOutreach,
    deleteOutreach
}