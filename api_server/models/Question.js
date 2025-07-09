const mongoose = require('mongoose');
const { create } = require('./Script');
const questionSchema = new mongoose.Schema(
    {
        question: String,
        createdBy: String, // User ID or username of the creator
        answer: { type: String, default: '' },
        scripture: { type: String, default: '' },
        answered: { type: Boolean, default: false }, // Indicates if the question has been answered
        tags: { type: [String], default: [] },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }
);

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
// tags for categorization, and timestamps for creation and last update.
// The `createdAt` and `updatedAt` fields are automatically set to the current date and time when a document is created or updated.
// The `tags` field is an array of strings, allowing for multiple tags to be associated with each question.
// The `createdBy` field is a string that can store the username or ID of the user who created the question.
