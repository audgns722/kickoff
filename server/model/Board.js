const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        boardNum: Number,
        image: String,
        cate: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        repleNum: {
            type: Number,
            default: 0,
        }
    },
    { collection: "boards", timestamps: true }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = { Board };