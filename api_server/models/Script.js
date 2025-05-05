const mongoose = require('mongoose');

const scriptureSchema = new mongoose.Schema(
    {
        quote: String,
        scripture: String
    }
)

const Script = mongoose.model('scripture', scriptureSchema)

module.exports = Script;
