const express = require("express");
const router = express.Router();

// 스키마 만들기
const { Board } = require("../model/Board.js");
const { User } = require("../model/User.js");
const { Reple } = require("../model/Reple.js");
const { PlayReple } = require("../model/PlayReple.js");

router.post("/submit", async (req, res) => {
    console.log(req.body);
    let temp = {
        reple: req.body.reple,
        boardNum: req.body.boardNum,
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

// 마이페이지 댓글불러오기
router.post('/mypagereple', async (req, res) => {
    try {
        const uid = req.body.uid; // 세션에서 가져온 uid

        // User 컬렉션에서 uid와 일치하는 사용자 찾기
        const user = await User.findOne({ uid: uid });
        if (!user) {
            return res.status(404).send({ success: false, message: '사용자를 찾을 수 없습니다.' });
        }

        // PlayReple과 Reple 컬렉션에서 해당 사용자의 댓글 찾기
        const playReples = await PlayReple.find({ author: user._id }).populate('author');
        const reples = await Reple.find({ author: user._id }).populate('author');

        // 결과 병합
        const comments = playReples.concat(reples);

        res.json({ success: true, comments });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: '서버 오류 발생' });
    }
});
module.exports = router;
