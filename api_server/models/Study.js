const mongoose = require('mongoose');

const studySchema = new mongoose.Schema(
    {
        catagory: String,
        title: String,
        content: {
            type: mongoose.Schema.Types.Mixed,
            default: {}
        }

    }
);

const Study = mongoose.model('study', studySchema);
module.exports = Study;
