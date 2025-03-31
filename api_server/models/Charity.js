const mongoose = require('mongoose');

const charitySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        donations: [{
            userID: String,
            amount: Number
        }],
        goal: {
            type: Number,
            required: false
        },
    }
)

const Charity = mongoose.model('charity', charitySchema)

module.exports = Charity;
