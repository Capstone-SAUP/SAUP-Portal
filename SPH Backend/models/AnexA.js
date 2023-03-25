const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const anexAschema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
    project_title: {
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
    venue: {
      type: String,
    },
    target_beneficiary: {
      type: String,
    },
    target_date: {
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

// anexAschema.plugin(AutoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq: 500
// })

module.exports = mongoose.model('AnexA', anexAschema)