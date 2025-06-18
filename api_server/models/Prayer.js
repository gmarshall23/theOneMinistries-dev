// Model for Prayer
const mongoose = require('mongoose');
const prayerSchema = new mongoose.Schema(
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
const Prayer = mongoose.model('Prayers', prayerSchema);
module.exports = Prayer;
