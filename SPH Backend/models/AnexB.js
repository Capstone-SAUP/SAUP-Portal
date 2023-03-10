const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const anexaBschema = new mongoose.Schema(
  {
    // user: {
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
    target_beneficiaries: {
      type: String,
    },
    venue: {
      type: String,
    },
    obj1: {
      type: String,
    },
    ojb2: {
      type: String,
    },
    obj3: {
      type: String,
    },
    act1: {
      type: String,
    },
    act2: {
      type: String,
    },
    act3: {
      type: String,
    },
    respon_per1: {
      type: String,
    },
    respon_per2: {
      type: String,
    },
    respon_per3: {
      type: String,
    },
    budget_req1: {
      type: String,
    },
    budget_req2: {
      type: String,
    },
    budget_req3: {
      type: String,
    },
    time_frame1: {
      type: String,
    },
    time_frame2: {
      type: String,
    },
    time_frame3: {
      type: String,
    },
    output1: {
      type: String,
    },
    output2: {
      type: String,
    },
    output3: {
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

module.exports = mongoose.model('AnexB', anexaBschema)