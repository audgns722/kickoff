const express = require("express");
const router = express.Router();
const multer = require('multer')

const { User } = require("../model/User.js");
const { Counter } = require("../model/Counter.js");

// firebase 일반 회원가입
router.post("/join", (req, res) => {
    let temp = req.body;

    Counter.findOne({ name: "counter" })
        .then((result) => {
            temp.userNum = result.userNum;

            const userData = new User(temp);
            userData.save().then(() => {
                Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(() => {
                    res.status(200).json({ success: true })
                })
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
});

// 이메일 중복검사
router.post("/emailcheck", (req, res) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then((result) => {
            let check = true;
            if (result) {
                check = false;
            }
            res.status(200).json({ success: true, check })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})

// router.post("/namecheck", (req, res) => {
//     User.findOne({ displayName: req.body.displayName })
//         .exec()
//         .then((result) => {
//             let check = true;
//             if (result) {
//                 check = false;
//             }
//             res.status(200).json({ success: true, check })
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(400).json({ success: false });
//         })
// })

// firebase 구글 회원가입
router.post('/google-signup', async (req, res) => {
    try {
        const { email, displayName, uid, photoURL } = req.body;

        // 중복 여부 검사
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false });
        }

        // Counter 컬렉션에서 다음 userNum 가져오기
        const counter = await Counter.findOne({ name: 'counter' });
        const nextUserNum = counter.userNum;

        // MongoDB에 저장
        const newUser = new User({
            userNum: nextUserNum,
            email,
            displayName,
            uid,
            photoURL,
        });

        await newUser.save();

        // Counter 업데이트 (userNum 증가)
        await Counter.updateOne({ name: 'counter' }, { $inc: { userNum: 1 } });

        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});

// 회원탈퇴
router.post('/delete', async (req, res) => {
    try {
        const uid = req.body.uid;

        // MongoDB에서 uid와 일치하는 사용자 데이터 삭제
        await User.deleteOne({ uid: uid });

        res.json({ success: true, message: '사용자 삭제 완료' });
    } catch (error) {
        console.error("사용자 삭제 중 오류 발생", error);
        res.status(500).send({ success: false, message: '서버 오류' });
    }
});

// 프로필 로컬 이미지 업로드
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'image/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage: storage }).single("file");

router.post("/profile/img", (req, res) => {
    // console.log(req.body, req.formData)
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ success: false })
        } else {
            res.status(200).json({ success: true, filePath: res.req.file.path })
        }
    })
})

router.post("/profile/update", (req, res) => {
    let temp = {
        photoURL: req.body.photoURL,
    }

    User.updateOne({ uid: req.body.uid }, { $set: temp })
        .exec()
        .then(() => {
            res.status(200).json({ success: true })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

module.exports = router;