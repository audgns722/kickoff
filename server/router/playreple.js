const express = require("express");
const router = express.Router();

// 스키마 만들기
const { User } = require("../model/User.js");
const { PlayReple } = require("../model/PlayReple.js");

router.post("/submit", async (req, res) => {
    console.log(req.body);
    let temp = {
        reple: req.body.reple,
        leagueId: req.body.leagueId,
        matchId: req.body.matchId,
    }

    try {
        const userInfo = await User.findOne({ uid: req.body.uid }).exec();
        temp.author = userInfo._id;
        const NewReple = new PlayReple(temp);
        await NewReple.save();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
});

router.post("/get", (req, res) => {
    PlayReple.find({ matchId: req.body.matchId })
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
        matchId: req.body.matchId,
        reple: req.body.reple,
        uid: req.body.uid,
    }
    PlayReple.findOneAndUpdate({ _id: req.body.repleId }, { $set: temp })
        .exec()
        .then(() => {
            return res.status(200).json({ success: true })
        })
        .catch((err) => {
            return res.status(400).json({ success: false })
        })
})

router.post("/delete", (req, res) => {
    PlayReple.deleteOne({ _id: req.body.repleId })
        .exec()
        .then(() => { return res.status(200).json({ success: true }) })
        .catch((err) => {
            return res.status(400).json({ success: false })
        })
})
module.exports = router;
