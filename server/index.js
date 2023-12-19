const express = require('express');
const axios = require('axios');
const cors = require('cors');

const path = require("path");
const app = express();
const port = "5050";

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 모든 origin에서의 요청을 허용합니다. 실제 운영 환경에서는 특정 origin으로 제한하는 것이 좋습니다.
app.use(cors());

app.listen(port, () => {
    console.log("listening --> " + port);
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.post('/api/matches', async (req, res) => {
    try {
        const response = await axios.get('http://api.football-data.org/v4/competitions/2021/matches', {
            headers: {
                'X-Auth-Token': 'fce32b525af242e5a1f6fd09929084cf',
            },
            params: {
                status: 'FINISHED',
                season: '2023',
            },
        });
        // 받아온 데이터 역순정렬
        const reversedMatches = response.data.matches.reverse();

        res.json({ matches: reversedMatches });
    } catch (error) {
        console.error('Error fetching matches:', error);
        res.status(501).json({ success: false });
    }
});

app.post('/api/video', async (req, res) => {
    const token = 'MTM0MDY1XzE3MDE5MzcyNzZfYTgxNDkzZTEzZTRhYTNjMDA1YjdhZDQ1YjJkOGZkMjhlOTQwYTNiNQ=='
    try {
        const response = await axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=${token}`, {
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching matches:', error);
        res.status(500).json({ success: false });
    }
});