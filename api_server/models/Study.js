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
      // The lesson will store the Quill Delta object.
      // docId: '',
      //     docTitle: '',
      //     docType: '',
      //     calendar: '',
      //     lesson: {
      //       ops: []
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  { timestamps: true }
);


const Study = mongoose.model('study', studySchema);
module.exports = Study;
