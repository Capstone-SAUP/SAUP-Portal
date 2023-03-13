const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const anexaAschema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    name_org: {
      type: String,
    },
    date_est: {
      type: String,
    },
    designated_per1: {
      type: String,
    },
    designated_per2: {
      type: String,
    },
    designated_per3: {
      type: String,
    },
    designated_per4: {
      type: String,
    },
    position_per1: {
      type: String,
    },
    position_per2: {
      type: String,
    },
    position_per3: {
      type: String,
    },
    position_per4: {
      type: String,
    },
    contact_per1: {
      type: String,
    },
    contact_per2: {
      type: String,
    },
    contact_per3: {
      type: String,
    },
    contact_per4: {
      type: String,
    },
    no_members: {
      type: String,
    },
    org_skills: {
      type: String,
    },
    title_activity: {
      type: String,
    },
    purpose_activity: {
      type: String,
    },
    reason_community: {
      type: String,
    },
    target_date: {
      type: String,
    },
    no_beneficiaries: {
      type: String,
    },
    target_areas: {
      type: String,
    },
    target_beneficiary: {
      type: String,
    },
    class_outreachdole: {
      type: String,
    },
    class_semi_dev: {
      type: String,
    },
    class_dev: {
      type: String,
    },
    target_obj: {
      type: String,
    },
    activities: {
      type: String,
    },
    time_frame: {
      type: String,
    },
    beneficiaries: {
      type: String,
    },
    budget: {
      type: String,
    },
    prog_indicator: {
      type: String,
    },  

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

module.exports = mongoose.model('AnexA', anexaAschema)