const mongoose = require('mongoose');

const encourageSchema = new mongoose.Schema(
    {
        text: String,
        scripture: String,
        quote: String,
        prayer: String
    }
)

const Encourage = mongoose.model('encourage', encourageSchema)

module.exports = Encourage;
