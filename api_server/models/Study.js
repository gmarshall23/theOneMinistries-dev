const mongoose = require('mongoose');

const studySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      // This will store the Quill Delta object.
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  { timestamps: true }
);


const Study = mongoose.model('study', studySchema);
module.exports = Study;
