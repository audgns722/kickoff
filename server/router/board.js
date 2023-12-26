const express = require("express");
const router = express.Router();

// 스키마 만들기
const { Board } = require("../model/Board.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");

// 이미지 업로드
// const setUpload = require("../util/upload.js");

// 글 쓰기
router.post("/write", (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.boardNum = counter.boardNum; // 번호 추가

            User.findOne({ uid: req.body.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo._id; // 작가 추가

                    const BoardWrite = new Board(temp);
                    BoardWrite
                        .save()
                        .then(() => {
                            Counter.updateOne({ name: "counter" }, { $inc: { boardNum: 1 } }).then(() => {
                                res.status(200).json({ success: true });
                            })
                        })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

// 글목록
router.post("/list", (req, res) => {
    Board
        .find()
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, boardList: result })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// // 글 상세페이지
// router.post("/detail", (req, res) => {
//     Post
//         .findOne({ postNum: req.body.postNum })
//         .populate("author")
//         .exec()
//         .then((result) => {
//             res.status(200).json({ success: true, post: result });
//         })
//         .catch((err) => {
//             console.log(err)
//             res.status(400).json({ success: false });
//         })
// })

// // 글 수정하기
// router.post("/modify", (req, res) => {
//     let temp = {
//         title: req.body.title,
//         content: req.body.content
//     }
//     Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
//         .exec()
//         .then(() => {
//             res.status(200).json({ success: true });
//         })
//         .catch((err) => {
//             console.log(err)
//             res.status(400).json({ success: false });
//         })
// })

// // 글 삭제하기
// router.post("/delete", (req, res) => {
//     Post
//         .deleteOne({ postNum: Number(req.body.postNum) })
//         .exec()
//         .then(() => {
//             res.status(200).json({ success: true })
//         })
//         .catch((err) => {
//             console.log(err)
//             res.status(400).json({ success: false })
//         })
// })

// // 이미지 업로드
// router.post("/image/upload", setUpload("react-blog2023/post"), (req, res, next) => {
//     // console.log(res.req);
//     res.status(200).json({ success: true, filePath: res.req.file.location })
// })


module.exports = router;