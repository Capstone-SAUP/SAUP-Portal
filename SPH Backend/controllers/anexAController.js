const AnexA = require('../models/AnexA')
const User = require('../models/User')

// @desc Get all anexa 
// @route GET /anexa
// @access Private
const getAllAnexA = async (req, res) => {
    // Get all anexa from MongoDB
    const anexA = await AnexA.find().lean()

    // If no anexa 
    if (!anexA?.length) {
        return res.status(400).json({ message: 'No AnexA found' })
    }

    // Add user_id to each anexa before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    const outreachWithUser = await Promise.all(anexA.map(async (anexA) => {
        const user = await User.findById(anexA.user).lean().exec()
        console.log(user.user_id);
        return { ...anexA, user: user.user_id, fullname: user.firstname + " " + user.lastname, user_role: user.roles[0]}
    }))

    res.json(outreachWithUser)
}

// @desc Create new anexa
// @route POST /anexa
// @access Private
const createNewAnexA = async (req, res) => {
    const { 
        user,
        name_org, 
        date_est, 
        designated_per1,
        designated_per2,
        designated_per3,
        designated_per4,
        position_per1,
        position_per2,
        position_per3,
        position_per4,
        contact_per1,
        contact_per2,
        contact_per3,
        contact_per4,
        no_members,
        org_skills,
        project_title,
        purpose_activity,
        reason_community,
        no_beneficiaries,
        venue,
        target_beneficiary,
        target_date,
        class_outreachdole,
        class_semi_dev,
        class_dev,
        target_obj,
        activities,
        time_frame,
        beneficiaries,
        budget,
        prog_indicator,
        status,
        department,
        } = req.body

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
    const anexaA = await AnexA.create({
        user,
        name_org, 
        date_est, 
        designated_per1,
        designated_per2,
        designated_per3,
        designated_per4,
        position_per1,
        position_per2,
        position_per3,
        position_per4,
        contact_per1,
        contact_per2,
        contact_per3,
        contact_per4,
        no_members,
        org_skills,
        project_title,
        purpose_activity,
        reason_community,
        no_beneficiaries,
        venue,
        target_beneficiary,
        target_date,
        class_outreachdole,
        class_semi_dev,
        class_dev,
        target_obj,
        activities,
        time_frame,
        beneficiaries,
        budget,
        prog_indicator,
        status,
        department,
    })

    if (anexaA) { // Created 
        return res.status(201).json({ message: 'New anexa created' })
    } else {
        return res.status(400).json({ message: 'Invalid anexa data received' })
    }

}

// @desc Update a anexa
// @route PATCH /anexa
// @access Private
const updateAnexA = async (req, res) => {
    const { id, status } = req.body

    // // Confirm data
    // if (!id || !user || !title || !text) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }

    // Confirm anexa exists to update
    const anexaA = await AnexA.findById(id).exec()

    if (!anexaA) {
        return res.status(400).json({ message: 'AnexA not found' })
    }

    // // Check for duplicate title
    // const duplicate = await AnexA.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // // Allow renaming of the original anexa 
    // if (duplicate && duplicate?._id.toString() !== id) {
    //     return res.status(409).json({ message: 'Duplicate anexa title' })
    // }

    anexaA.status = status

    const updatedAnexA = await anexaA.save()

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
    const anexaA = await AnexA.findById(id).exec()

    if (!anexaA) {
        return res.status(400).json({ message: 'AnexA not found' })
    }

    const result = await anexaA.deleteOne()

    const reply = `AnexA '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
}

module.exports = {
    getAllAnexA,
    createNewAnexA,
    updateAnexA,
    deleteAnexA
}