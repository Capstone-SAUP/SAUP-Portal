const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const anexBschema = new mongoose.Schema(
  {
    user: {//
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    sponsor_dept: {
      type: String,
    },
    project_title: {
      type: String,
    },
    target_beneficiary: {
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
    proj_rep: {
      type: String,
    },
    designation1: {
      type: String,
    },
    cscb_rep: {
      type: String,
    },
    dept_rep: {
      type: String,
    },
    dean: {
      type: String,
    },
    designation2: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    department: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// anexBschema.plugin(AutoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq: 500
// })

module.exports = mongoose.model('AnexB', anexBschema)