const AnexB = require('../models/AnexB')
const User = require('../models/User')

// @desc Get all anexa 
// @route GET /anexa
// @access Private
const getAllAnexB = async (req, res) => {
    // Get all anexa from MongoDB
    const anexB = await AnexB.find().lean()

    // If no anexa 
    if (!anexB?.length) {
        return res.status(400).json({ message: 'No AnexB found' })
    }

    // Add user_id to each anexa before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    const outreachWithUser = await Promise.all(
      anexB.map(async (anexB) => { const user = await User.findById(anexB.user).lean().exec();
        console.log(user.user_id);
        return {
          ...anexB,
          user: user.user_id,
          fullname: user.firstname + " " + user.lastname,
          user_role: user.roles[0],
        };
      })
    );

    res.json(outreachWithUser)
}

// @desc Create new anexa
// @route POST /anexa
// @access Private
const createNewAnexB = async (req, res) => {
    const { 
        user,
        sponsor_dept, 
        project_title, 
        target_beneficiary,
        venue,
        obj1,
        ojb2,
        obj3,
        act1,
        act2,
        act3,
        respon_per1,
        respon_per2,
        respon_per3,
        budget_req1,
        budget_req2,
        budget_req3,
        time_frame1,
        time_frame2,
        time_frame3,
        output1,
        output2,
        output3,
        proj_rep,
        designation1,
        cscb_rep,
        dept_rep,
        dean,
        designation2,
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
    const anexB = await AnexB.create({ 
        user,
        sponsor_dept, 
        project_title, 
        target_beneficiary,
        venue,
        obj1,
        ojb2,
        obj3,
        act1,
        act2,
        act3,
        respon_per1,
        respon_per2,
        respon_per3,
        budget_req1,
        budget_req2,
        budget_req3,
        time_frame1,
        time_frame2,
        time_frame3,
        output1,
        output2,
        output3,
        proj_rep,
        designation1,
        cscb_rep,
        dept_rep,
        dean,
        designation2,
        status,
        department,
    })

    if (anexB) { // Created 
        return res.status(201).json({ message: 'New anexa created' })
    } else {
        return res.status(400).json({ message: 'Invalid anexa data received' })
    }

}

// @desc Update a anexa
// @route PATCH /anexa
// @access Private
const updateAnexB = async (req, res) => {
const { id, status } = req.body

// Confirm data
// if (!id || !user || !title || !text) {
//     return res.status(400).json({ message: 'All fields are required' })
// }

// Confirm anexa exists to update
const anexB = await AnexB.findById(id).exec()

if (!anexB) {
    return res.status(400).json({ message: 'AnexB not found' })
}

// // Check for duplicate title
// const duplicate = await AnexB.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

// // Allow renaming of the original anexa 
// if (duplicate && duplicate?._id.toString() !== id) {
//     return res.status(409).json({ message: 'Duplicate anexa title' })
// }

// anexB.user = user
// anexB.title = title
// anexB.text = text
anexB.status = status

const updatedAnexB = await anexB.save()

res.json(`'${updatedAnexB.title}' updated`)
}

// @desc Delete a anexa
// @route DELETE /anexa
// @access Private
const deleteAnexB = async (req, res) => {
const { id } = req.body

// Confirm data
if (!id) {
    return res.status(400).json({ message: 'AnexB ID required' })
}

// Confirm anexa exists to delete 
const anexB = await AnexB.findById(id).exec()

if (!anexB) {
    return res.status(400).json({ message: 'AnexA not found' })
}

const result = await anexB.deleteOne()

const reply = `AnexB '${result.title}' with ID ${result._id} deleted`

res.json(reply)
}

module.exports = {
    getAllAnexB,
    createNewAnexB,
    updateAnexB,
    deleteAnexB
}
//