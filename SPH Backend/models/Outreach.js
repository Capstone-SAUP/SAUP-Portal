const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const outreachchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

outreachchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
})

module.exports = mongoose.model('Outreach', outreachchema)