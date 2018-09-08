const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const emojiSchema = new Schema(
    {
        name: String,
        url: String
    }
)

const Emoji = mongoose.model("Emoji", emojiSchema);

module.exports = Emoji;