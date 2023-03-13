const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const anexaCschema = new mongoose.Schema(
  {
    // user: {//
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    sponsor_dept: {
      type: String,
    },
    project_title: {
      type: String,
    },
    beneficiaries: {
      type: String,
    },
    accomp_obj: {
      type: String,
    },
    venue: {
      type: String,
    },
    date_implement: {
      type: String,
    },
    brief_narrative: {
      type: String,
    },
    topics: {
      type: String,
    },
    speakers: {
      type: String,
    },
    prep_per1: {
      type: String,
    },
    prep_per2: {
      type: String,
    },
    prep_per3: {
      type: String,
    },
    prep_per4: {
      type: String,
    },
    prep_pos1: {
      type: String,
    },
    prep_pos2: {
      type: String,
    },
    prep_pos3: {
      type: String,
    },
    prep_type1: {
      type: String,
    },
    prep_type2: {
      type: String,
    },
    prep_pos4: {
      type: String,
    },
    prep_type3: {
      type: String,
    },
    prep_type4: {
      type: String,
    },
    prep_start1: {
      type: String,
    },
    prep_start2: {
      type: String,
    },
    prep_star3: {
      type: String,
    },
    prep_star4: {
      type: String,
    },
    prep_end1: {
      type: String,
    },
    prep_end2: {
      type: String,
    },
    prep_end3: {
      type: String,
    },
    prep_end4: {
      type: String,
    },
    implement_per1: {
      type: String,
    },
    implement_per2: {
      type: String,
    },
    implement_per3: {
      type: String,
    },
    implement_per4: {
      type: String,
    },
    implement_pos1: {
      type: String,
    },
    implement_pos2: {
      type: String,
    },
    implement_pos3: {
      type: String,
    },
    implement_type1: {
      type: String,
    },
    implement_type2: {
      type: String,
    },
    implement_pos4: {
      type: String,
    },
    implement_type3: {
      type: String,
    },
    implement_type4: {
      type: String,
    },
    implement_start1: {
      type: String,
    },
    implement_start2: {
      type: String,
    },
    implement_star3: {
      type: String,
    },
    implement_star4: {
      type: String,
    },
    implement_end1: {
      type: String,
    },
    implement_end2: {
      type: String,
    },
    implement_end3: {
      type: String,
    },
    implement_end4: {
      type: String,
    },
    post_per1: {
      type: String,
    },
    post_per2: {
      type: String,
    },
    post_per3: {
      type: String,
    },
    post_per4: {
      type: String,
    },
    post_pos1: {
      type: String,
    },
    post_pos2: {
      type: String,
    },
    post_pos3: {
      type: String,
    },
    post_type1: {
      type: String,
    },
    post_type2: {
      type: String,
    },
    post_pos4: {
      type: String,
    },
    post_type3: {
      type: String,
    },
    post_type4: {
      type: String,
    },
    post_start1: {
      type: String,
    },
    post_start2: {
      type: String,
    },
    post_star3: {
      type: String,
    },
    post_star4: {
      type: String,
    },
    post_end1: {
      type: String,
    },
    post_end2: {
      type: String,
    },
    post_end3: {
      type: String,
    },
    post_end4: {
      type: String,
    },
    learnings1: {
      type: String,
    },
    learnings2: {
      type: String,
    },
    learnings3: {
      type: String,
    },
    learnings4: {
      type: String,
    },
    strengths1: {
      type: String,
    },
    strengths2: {
      type: String,
    },
    strengths3: {
      type: String,
    },
    strengths4: {
      type: String,
    },
    strengths5: {
      type: String,
    },
    weakness1: {
      type: String,
    },
    weakness2: {
      type: String,
    },
    weakness3: {
      type: String,
    },
    weakness4: {
      type: String,
    },
    weakness5: {
      type: String,
    },
    improvement1: {
      type: String,
    },
    improvement2: {
      type: String,
    },
    improvement3: {
      type: String,
    },
    improvement4: {
      type: String,
    },
    improvement5: {
      type: String,
    },
    act_partici1: {
      type: String,
    },
    act_partici2: {
      type: String,
    },
    act_partici3: {
      type: String,
    },
    particulars1: {
      type: String,
    },
    particulars2: {
      type: String,
    },
    particulars3: {
      type: String,
    },
    amount1: {
      type: String,
    },
    amount2: {
      type: String,
    },
    amount3: {
      type: String,
    },
    amount_total: {
      type: String,
    },
    image1: {
      type: Buffer,
    },
    caption1: {
      type: String,
    },
    caption2: {
      type: String,
    },
    image2: {
      type: Buffer,
    }



    // status: {
    //   type: String,
    //   default: "Pending",
    // },
    // "name_org": "Bayanihan Organization",
    // "date_est": "11/22/2022",
    // "person1": "Juan Dela Cruz",
    // "person2": "John Doe",
    // "person3": "Maria Clara",
    // "person4": "",
    // "position1": "",
    // "position2": "Participant",
    // "position3": "Participant",
    // "position4": "",
    // "contact1": "09123872648",
    // "contact2": "09273648271",
    // "contact3": "09283759381",
    // "contact4": "",
    // "no_members": "3",
    // "org_skills": "Cleanup",
    // "title": "Oplan Linis Kapaligiran",
    // "purpose": "To clean the environment",
    // "reason": "Efficiency",
    // "target_date": "2/28/2023",
    // "target_area": "Around Angeles City",
    // "target_benef": "Local Government Unit",
    // "no_benef": "200",
    // "contact4 copy": "09263728788",
    // "target_date copy": "2/23/2023",
    // "objectives": "Testing",
    // "activities": "Cleanup",
    // "timeframe": "2/28/2023 - 3/11/2023",
    // "benef": "Angels City",
    // "budget": "10000",
    // "prog_ind": "The enviromnent is clean"
  }
  // ,
  // {
  //   timestamps: true,
  // }
);

// anexaschema.plugin(AutoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq: 500
// })

module.exports = mongoose.model("AnexC", anexaCschema);
