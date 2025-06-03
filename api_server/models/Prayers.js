// Model for Prayers
const mongoose = require('mongoose');
const prayersSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        date: { type: Date, default: Date.now },
        createdBy: String, // User ID or username of the creator
        answered: {
            type: Boolean,
            default: false
        }
    }
);
const Prayers = mongoose.model('Prayers', prayersSchema);
module.exports = Prayers;
