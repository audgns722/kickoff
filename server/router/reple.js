const express = require("express");
const router = express.Router();

// 스키마 만들기
const { Board } = require("../model/Board.js");
const { User } = require("../model/User.js");
const { Reple } = require("../model/Reple.js");

router.post("/submit", async (req, res) => {
    console.log(req.body);
    let temp = {
        reple: req.body.reple,
        boardId: req.body.boardId,
    }

    try {
        const userInfo = await User.findOne({ uid: req.body.uid }).exec();
        temp.author = userInfo._id;
        const NewReple = new Reple(temp);
        await NewReple.save();

        await Board.findOneAndUpdate(
            { _id: req.body.boardId },
            { $inc: { repleNum: 1 } }
        ).exec();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }


});

router.post("/getReple", (req, res) => {
    Reple.find({ boardId: req.body.boardId })
        .populate("author")
        .exec()
        .then((repleInfo) => {
            return res.status(200).json({ success: true, repleList: repleInfo })
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({ success: false })
        })
})

router.post("/edit", (req, res) => {
    let temp = {
        boardId: req.body.boardId,
        reple: req.body.reple,
        uid: req.body.uid,
    }
    Reple.findOneAndUpdate({ _id: req.body.repleId }, { $set: temp })
        .exec()
        .then(() => {
            return res.status(200).json({ success: true })
        })
        .catch((err) => {
            return res.status(400).json({ success: false })
        })
})

router.post("/delete", (req, res) => {
    Reple.deleteOne({ _id: req.body.repleId })
        .exec()
        .then(() => {
            Board.findOneAndUpdate({
                _id: req.body.boardId
            }, { $inc: { repleNum: -1 } }
            )
                .exec()
                .then(() => {
                    return res.status(200).json({ success: true })
                })

        })
        .catch((err) => {
            return res.status(400).json({ success: false })
        })
})
module.exports = router;
