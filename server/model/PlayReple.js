const mongoose = require("mongoose");

const playRepleSchema = new mongoose.Schema(
    {
        reple: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        matchId: Number,
    },
    { collection: "playreples", timestamps: true }
);

const PlayReple = mongoose.model("PlayReple", playRepleSchema);

module.exports = { PlayReple };