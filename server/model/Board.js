const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        boardNum: Number,
        image: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    { collection: "boards" }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = { Board };