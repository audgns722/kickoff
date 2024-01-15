const express = require("express");
const router = express.Router();
const multer = require('multer')

// 스키마 만들기
const { Board } = require("../model/Board.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const { Reple } = require("../model/Reple.js");

// 이미지 업로드
// const setUpload = require("../util/upload.js");

// 글 쓰기
router.post("/write", (req, res) => {
    let temp = {
        cate: req.body.cate,
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

// 메인 홈화면 게시글 리스트
router.post("/mainlist", (req, res) => {
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

// Board게시판 목록
router.post("/list", (req, res) => {
    let sort = {};

    if (req.body.sort === "최신순") {
        sort.createdAt = -1;
    } else if (req.body.sort === "댓글순") {
        sort.repleNum = -1;
    } else if (req.body.sort === "조회순") {
        sort.views = -1;
    }

    let query = {
        $or: [
            { title: { $regex: req.body.searchTerm } },
            { content: { $regex: req.body.searchTerm } },
        ]
    };

    if (req.body.cate) {
        query.cate = req.body.cate;
    }

    Board
        .find(query)
        .populate("author")
        .sort(sort)
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, boardList: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});

// 글 상세페이지
router.post("/detail", (req, res) => {
    const boardNum = req.body.boardNum;

    Board.findOneAndUpdate(
        { boardNum: boardNum },
        { $inc: { views: 1 } }, // $inc 연산자를 사용하여 views를 1 증가시킵니다.
        { new: true } // 업데이트 후의 문서를 반환합니다.
    )
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, board: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});
// 글 수정하기
router.post("/modify", (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content
    }
    Board.updateOne({ boardNum: Number(req.body.boardNum) }, { $set: temp })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 글 삭제하기
router.post("/delete", (req, res) => {
    const boardNum = Number(req.body.boardNum);

    Board.findOne({ boardNum: boardNum })
        .then(board => {
            if (!board) {
                throw new Error('게시글을 찾을 수 없습니다.');
            }
            const boardId = board._id;
            return Board.deleteOne({ _id: boardId }).then(() => boardId);
        })
        .then(boardId => {
            return Reple.deleteMany({ boardId: boardId });
        })
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ success: false });
        });
});

// 로컬 이미지 업로드

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'image/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage }).single("file");

router.post("/image/upload", (req, res) => {
    // console.log(req.body, req.formData)
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ success: false })
        } else {
            res.status(200).json({ success: true, filePath: res.req.file.path })
        }
    })
})

// // 이미지 업로드
// router.post("/image/upload", setUpload("react-blog2023/post"), (req, res, next) => {
//     // console.log(res.req);
//     res.status(200).json({ success: true, filePath: res.req.file.location })
// })

// 마이페이지 글불러오기
router.post('/mypagelist', async (req, res) => {
    try {
        const { uid } = req.body;
        const user = await User.findOne({ uid: uid });
        const boards = await Board.find({ author: user._id });

        res.json({ success: true, boardList: boards });
    } catch (err) {
        res.status(500).send({ success: false, message: '서버 오류 발생' });
    }
});

module.exports = router;