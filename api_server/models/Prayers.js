// Model for Prayers
const mongoose = require('mongoose');
const prayersSchema = new mongoose.Schema(
    {
        name: String,
        subject: String,
        prayer: String,
        createdBy: String, // User ID or username of the creator
        createdAt: { type: Date, default: Date.now },
        answered: {
            type: Boolean,
            default: false
        }
    }
);
const Prayers = mongoose.model('Prayers', prayersSchema);
module.exports = Prayers;
