const mongoose = require("mongoose");
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const path = require("path");
const app = express();
const port = "5050";
const config = require("./config/key.js");

app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express router
app.use("/api/board", require("./router/board.js"));
app.use("/api/user", require("./router/user.js"));

app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

// 모든 origin에서의 요청을 허용합니다. 실제 운영 환경에서는 특정 origin으로 제한하는 것이 좋습니다.
app.use(cors());

// 2023시즌 경기결과 최신순
app.post('/api/matches', async (req, res) => {
    const leagueNum = req.body.leagueNum; // 클라이언트로부터 받은 리그 번호

    try {
        const response = await axios.get(`http://api.football-data.org/v4/competitions/${leagueNum}/matches`, {
            headers: {
                'X-Auth-Token': config.XAuthToken,
            },
            params: {
                status: 'FINISHED',
                season: '2023',
            },
        });

        const reversedMatches = response.data.matches.reverse();
        res.json({ matches: reversedMatches });
    } catch (error) {
        console.error('Error fetching matches:', error);
        res.status(501).json({ success: false });
    }
});

//
app.post('/api/video', async (req, res) => {
    const token = config.token;
    try {
        const response = await axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=${token}`, {
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching matches:', error);
        res.status(500).json({ success: false });
    }
});