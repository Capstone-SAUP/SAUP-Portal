const AnexA = require('../models/AnexA')
const User = require('../models/User')

// @desc Get all anexa 
// @route GET /anexa
// @access Private
const getAllAnexA = async (req, res) => {
    // Get all anexa from MongoDB
    const anexA = await AnexA.find().lean()

    // // If no anexa 
    // if (!anexa?.length) {
    //     return res.status(400).json({ message: 'No anexa found' })
    // }

    // Add user_id to each anexa before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    // const outreachWithUser = await Promise.all(anexa.map(async (anexa) => {
    //     const user = await User.findById(anexa.user).lean().exec()
    //     return { ...anexa, user_id: user.user_id }
    // }))

    // res.json(outreachWithUser)
}

// @desc Create new anexa
// @route POST /anexa
// @access Private
const createNewAnexA = async (req, res) => {
    const { 
        name_org, 
        date_est, 
        person1,
        person2,
        person3,
        person4,
        position1,
        position2,
        position3,
        position4,
        contact1,
        contact2,
        contact3,
        contact4,
        no_members,
        org_skills,
        title,
        purpose,
        reason,
        target_date,
        target_area,
        target_benef,
        no_benef,
        contact_lower,
        target_date_lower,
        objectives,
        activities,
        timeframe,
        benef,
        budget,
        prog_ind, } = req.body

    // Confirm data
    // if (!user || !title || !text ) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }

    // Check for duplicate title
    // const duplicate = await AnexA.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: 'Duplicate anexa title' })
    // }

    // Create and store the new user 
    const anexA = await AnexA.create({ 
        name_org, 
        date_est, 
        person1,
        person2,
        person3,
        person4,
        position1,
        position2,
        position3,
        position4,
        contact1,
        contact2,
        contact3,
        contact4,
        no_members,
        org_skills,
        title,
        purpose,
        reason,
        target_date,
        target_area,
        target_benef,
        no_benef,
        contact_lower,
        target_date_lower,
        objectives,
        activities,
        timeframe,
        benef,
        budget,
        prog_ind,
    })

    if (anexA) { // Created 
        return res.status(201).json({ message: 'New anexa created' })
    } else {
        return res.status(400).json({ message: 'Invalid anexa data received' })
    }

}

// @desc Update a anexa
// @route PATCH /anexa
// @access Private
const updateAnexA = async (req, res) => {
    const { id, user, title, text, status } = req.body

    // Confirm data
    if (!id || !user || !title || !text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm anexa exists to update
    const anexa = await AnexA.findById(id).exec()

    if (!anexa) {
        return res.status(400).json({ message: 'AnexA not found' })
    }

    // Check for duplicate title
    const duplicate = await AnexA.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original anexa 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate anexa title' })
    }

    anexa.user = user
    anexa.title = title
    anexa.text = text
    anexa.status = status

    const updatedAnexA = await anexa.save()

    res.json(`'${updatedAnexA.title}' updated`)
}

// @desc Delete a anexa
// @route DELETE /anexa
// @access Private
const deleteAnexA = async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'AnexA ID required' })
    }

    // Confirm anexa exists to delete 
    const anexa = await AnexA.findById(id).exec()

    if (!anexa) {
        return res.status(400).json({ message: 'AnexA not found' })
    }

    const result = await anexa.deleteOne()

    const reply = `AnexA '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
}

module.exports = {
    getAllAnexA,
    createNewAnexA,
    updateAnexA,
    deleteAnexA
}