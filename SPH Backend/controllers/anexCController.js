const AnexC = require("../models/AnexC");
const User = require("../models/User");

// @desc Get all anexa
// @route GET /anexa
// @access Private
const getAllAnexC = async (req, res) => {
    // Get all anexa from MongoDB
    const anexC = await AnexC.find().lean();


    // If no anexC
    if (!anexC?.length) {
      return res.status(400).json({ message: "No AnexC found" });
    }

    // Add user_id to each anexC before sending the response
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE
    // You could also do this with a for...of loop
    const outreachWithUser = await Promise.all(
      anexC.map(async (anexC) => {
        const user = await User.findById(anexC.user).lean().exec();
        console.log(user.user_id);
        return {
          ...anexC,
          user: user.user_id,
          // fullname: user.firstname + " " + user.lastname,
          // user_role: user.roles[0],
        };
      })
    );

    res.json(outreachWithUser);
};

// @desc Create new anexa
// @route POST /anexa
// @access Private
const createNewAnexC = async (req, res) => {
    const {
        user,
        fullname,
        sponsor_dept,
        project_title,
        target_beneficiary,
        accomp_obj,
        venue,
        date_implement,
        brief_narrative,
        topics,
        speakers,
        prep_per1,
        prep_per2,
        prep_per3,
        prep_per4,
        prep_pos1,
        prep_pos2,
        prep_pos3,
        prep_type1,
        prep_type2,
        prep_pos4,
        prep_type3,
        prep_type4,
        prep_start1,
        prep_start2,
        prep_star3,
        prep_star4,
        prep_end1,
        prep_end2,
        prep_end3,
        prep_end4,
        implement_per1,
        implement_per2,
        implement_per3,
        implement_per4,
        implement_pos1,
        implement_pos2,
        implement_pos3,
        implement_type1,
        implement_type2,
        implement_pos4,
        implement_type3,
        implement_type4,
        implement_start1,
        implement_start2,
        implement_star3,
        implement_star4,
        implement_end1,
        implement_end2,
        implement_end3,
        implement_end4,
        post_per1,
        post_per2,
        post_per3,
        post_per4,
        post_pos1,
        post_pos2,
        post_pos3,
        post_type1,
        post_type2,
        post_pos4,
        post_type3,
        post_type4,
        post_start1,
        post_start2,
        post_star3,
        post_star4,
        post_end1,
        post_end2,
        post_end3,
        post_end4,
        learnings1,
        learnings2,
        learnings3,
        learnings4,
        learnings5,
        strengths1,
        strengths2,
        strengths3,
        strengths4,
        strengths5,
        weakness1,
        weakness2,
        weakness3,
        weakness4,
        weakness5,
        improvement1,
        improvement2,
        improvement3,
        improvement4,
        improvement5,
        act_partici1,
        act_partici2,
        act_partici3,
        particulars1,
        particulars2,
        particulars3,
        amount1,
        amount2,
        amount3,
        amount_total,
        proj_rep,
        designation1,
        adviser_name,
        stud_org,
        cscb_rep,
        dept_rep,
        dean,
        designation2,
        image1,
        caption1,
        caption2,
        image2,
    } = req.body;

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
    const anexaC = await AnexC.create({
      user,
      fullname,
      sponsor_dept,
      project_title,
      target_beneficiary,
      accomp_obj,
      venue,
      date_implement,
      brief_narrative,
      topics,
      speakers,
      prep_per1,
      prep_per2,
      prep_per3,
      prep_per4,
      prep_pos1,
      prep_pos2,
      prep_pos3,
      prep_type1,
      prep_type2,
      prep_pos4,
      prep_type3,
      prep_type4,
      prep_start1,
      prep_start2,
      prep_star3,
      prep_star4,
      prep_end1,
      prep_end2,
      prep_end3,
      prep_end4,
      implement_per1,
      implement_per2,
      implement_per3,
      implement_per4,
      implement_pos1,
      implement_pos2,
      implement_pos3,
      implement_type1,
      implement_type2,
      implement_pos4,
      implement_type3,
      implement_type4,
      implement_start1,
      implement_start2,
      implement_star3,
      implement_star4,
      implement_end1,
      implement_end2,
      implement_end3,
      implement_end4,
      post_per1,
      post_per2,
      post_per3,
      post_per4,
      post_pos1,
      post_pos2,
      post_pos3,
      post_type1,
      post_type2,
      post_pos4,
      post_type3,
      post_type4,
      post_start1,
      post_start2,
      post_star3,
      post_star4,
      post_end1,
      post_end2,
      post_end3,
      post_end4,
      learnings1,
      learnings2,
      learnings3,
      learnings4,
      learnings5,
      strengths1,
      strengths2,
      strengths3,
      strengths4,
      strengths5,
      weakness1,
      weakness2,
      weakness3,
      weakness4,
      weakness5,
      improvement1,
      improvement2,
      improvement3,
      improvement4,
      improvement5,
      act_partici1,
      act_partici2,
      act_partici3,
      particulars1,
      particulars2,
      particulars3,
      amount1,
      amount2,
      amount3,
      amount_total,
      proj_rep,
      designation1,
      adviser_name,
      stud_org,
      cscb_rep,
      dept_rep,
      dean,
      designation2,
      image1,
      caption1,
      caption2,
      image2,
    });

    if (anexaC) {
        // Created
        return res.status(201).json({ message: "New anexa created" });
    } else {
        return res.status(400).json({ message: "Invalid anexa data received" });
    }
};

// @desc Update a anexa
// @route PATCH /anexa
// @access Private
const updateAnexC = async (req, res) => {
    const { id, user, title, text, status } = req.body;

    // Confirm data
    if (!id || !user || !title || !text) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Confirm anexa exists to update
    const anexaC = await AnexC.findById(id).exec();

    if (!anexaC) {
        return res.status(400).json({ message: "AnexC not found" });
    }

    // Check for duplicate title
    const duplicate = await AnexC.findOne({ title })
        .collation({ locale: "en", strength: 2 })
        .lean()
        .exec();

    // Allow renaming of the original anexa
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: "Duplicate anexa title" });
    }

    anexaC.user = user;
    anexaC.title = title;
    anexaC.text = text;
    anexaC.status = status;

    const updatedAnexC = await anexaC.save();

    res.json(`'${updatedAnexC.title}' updated`);
};

// @desc Delete a anexa
// @route DELETE /anexa
// @access Private
const deleteAnexC = async (req, res) => {
    const { id } = req.body;

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: "AnexC ID required" });
    }

    // Confirm anexa exists to delete
    const anexaC = await AnexC.findById(id).exec();

    if (!anexaC) {
        return res.status(400).json({ message: "AnexC not found" });
    }

    const result = await anexaC.deleteOne();

    const reply = `AnexC '${result.title}' with ID ${result._id} deleted`;

    res.json(reply);
};

module.exports = {
    getAllAnexC,
    createNewAnexC,
    updateAnexC,
    deleteAnexC,
};
//
