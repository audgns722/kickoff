const mongoose = require("mongoose");
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const path = require("path");
const app = express();
const port = "5050";
const config = require("./config/key.js");

// 모든 origin에서의 요청을 허용합니다. 실제 운영 환경에서는 특정 origin으로 제한하는 것이 좋습니다.
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express router
app.use("/api/board", require("./router/board.js"));
app.use("/api/user", require("./router/user.js"));
app.use("/api/reple", require("./router/reple.js"));

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

// news
app.post('/api/news', async (req, res) => {
    try {
        const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
            params: {
                query: '&#xd574;&#xc678;&#xcd95;&#xad6c;',
                display: "10",
                start: "1",
                sort: "sim"
            },
            headers: {
                'X-Naver-Client-Id': config.NaverClientId,
                'X-Naver-Client-Secret': config.NaverClientSecret
            }
        });
        res.json(response.data.items);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

// app.post('/api/news', async (req, res) => {
//     try {
//         const apiKey = config.apiKey;
//         const countries = ['gb', 'de', 'fr', 'it', 'es'];
//         const requests = countries.map(country =>
//             axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${apiKey}`)
//         );

//         const responses = await Promise.all(requests);
//         const newsData = responses.map(response => response.data);

//         res.status(200).json({ news: newsData });
//     } catch (error) {
//         console.error('Error fetching news:', error);
//         res.status(500).json({ success: false });
//     }
// });

// 시즌 경기결과 최신순
app.post('/api/matches', async (req, res) => {
    const leagueNum = req.body.leagueNum;
    // const currentYear = new Date().getFullYear();
    const currentYear = 2023;

    try {
        const response = await axios.get(`http://api.football-data.org/v4/competitions/${leagueNum}/matches`, {
            headers: {
                'X-Auth-Token': config.XAuthToken,
            },
            params: {
                status: 'FINISHED',
                season: currentYear.toString(),
            },
        });

        const reversedMatches = response.data.matches.reverse();
        res.json({ matches: reversedMatches });
    } catch (error) {
        console.error('Error fetching matches:', error);
        res.status(500).json({ success: false });
    }
});

// 시즌 예정된 경기
app.post('/api/scheduled', async (req, res) => {
    const leagueNum = req.body.leagueNum;
    // const currentYear = new Date().getFullYear();
    const currentYear = 2023;

    try {
        const response = await axios.get(`http://api.football-data.org/v4/competitions/${leagueNum}/matches`, {
            headers: {
                'X-Auth-Token': config.XAuthToken,
            },
            params: {
                status: 'SCHEDULED',
                season: currentYear.toString(),
            },
        });

        const scheduledMatches = response.data.matches;
        res.json({ scheduled: scheduledMatches });
    } catch (error) {
        console.error('Error fetching scheduled matches:', error);
        res.status(500).json({ success: false });
    }
});

// league
app.post('/api/league', async (req, res) => {
    const leagueNum = req.body.leagueNum;

    try {
        const response = await axios.get(`http://api.football-data.org/v4/competitions/${leagueNum}/teams`, {
            headers: {
                'X-Auth-Token': config.XAuthToken,
            }
        });
        res.status(200).json({ success: true, league: response.data });
    } catch (error) {
        console.error('Error fetching EPL data:', error);
        res.status(500).json({ success: false });
    }
});

// rank
app.post('/api/rank', async (req, res) => {
    const leagueNum = req.body.leagueNum;

    try {
        const response = await axios.get(`http://api.football-data.org/v4/competitions/${leagueNum}/standings`, {
            headers: {
                'X-Auth-Token': config.XAuthToken,
            }
        });
        res.status(200).json({ success: true, rank: response.data });
    } catch (error) {
        console.error('Error fetching EPL data:', error);
        res.status(500).json({ success: false });
    }
})

// video
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
