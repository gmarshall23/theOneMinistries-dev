const mongoose = require('mongoose');

const studySchema = new mongoose.Schema(
    {
        catagory: String,
        title: String,
        topics: Array,
        studyStart: Date,
        content: String,
        asset: {
            docId: String,
            link: String,
            calander: Number
         }

    }
)


const Study = mongoose.model('study', studySchema)

module.exports = Study;
