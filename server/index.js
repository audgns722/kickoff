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

const leagues = [
    { id: "2021", name: "English Premier League 프리미어 손흥민 Nottingham 노팅엄 Newcastle 뉴캐슬 Luton 루턴 Liverpool 리버풀 mancity 맨시티 manutd 맨유 burnley 번리 Bournemouth 본머스 brighton 브라이튼 brentford 브렌트포드 Sheffield 셰필드 Arsenal 아스날 astonvilla 아스톤빌라 Everton 에버튼 Wolverhampton 울버햄튼 westham 웨스트햄 Chelsea 첼시 tottenham 토트넘 palace 팰리스 fulham 풀럼" },
    { id: "2014", name: "La Liga 라리가 Alaves 알라베스 Almeria 알메리아 athleticbilbao 아틀레틱 빌바오 atleticomadrid 아틀레티코 마드리드 barcelona 바르셀로나 Cadiz카디스 CeltaVigo 셀타 비고 Getepe 헤타페 Zerona 지로나 Granada 그라나다 LasPalmas 라스팔마스 mallorca 마요르카 Osasuna 오사수나 YoVallecano 라요 바예카노 LetBetis 레알 베티스 Real Madrid 레알 마드리드 RealSociedad 레알 소시에다드 Seville 세비야 Valencia 발렌시아 Villarreal 비야레알" },
    { id: "2019", name: "Serie A 세리에 atalanta 아탈란타 Bologna 볼로냐 Cremonese 크레모네세 Empoli 엠폴리 Fiorentina 피오렌티나 Ellas Verona 엘라스 베로나 Internazionale 인테르나치오날레 Juventus 유벤투스 Lazio 라치오 lecce 레체 milan 밀란 monza 몬차 Neapolitan 나폴리 Rome 로마 Salernitana 살레르니타나 Sampdoria 삼프도리아 Sassuolo 사수올로 Spezia 스페치아 Torino 토리노 Udinese 우디네세" },
    { id: "2015", name: "Ligue 1 리그앙 이강인 Ajaccio 아작시오 Angers 앙제 Auxerre 오세르 Brestua 브레스투아 clermont 클레르몽 Lance 랑스 reel 릴 Lorient 로리앙 Lyon 리옹 marseille 마르세유 Monaco 모나코 Montpellier 몽펠리에 Nantes 낭트 niece 니스 Paris Saint-Germain 파리 생제르맹 Stade Reims 스타드 랭스 wren 렌 Strasbourg 스트라스부르 toulouse 툴루즈 Troyes 트루아" },
    { id: "2002", name: "Bundesliga 분데스리가 김민재 이재성 Augsburg 아우크스부르크 Union Berlin 우니온 베를린 Werder Bremen 베르더 브레멘 dortmund 도르트문트 frankfurt 프랑크푸르트 Freiburg 프라이부르크 Hoffenheim 호펜하임 Cologne 쾰른 Leipzig 라이프치히 Leverkusen 레버쿠젠 Mainz 마인츠 Mönchengladbach 묀헨글라트바흐 bayern munich 바이에른 뮌헨 VfB Stuttgart VfB 슈투트가르트 Wolfsburg 볼프스부르크 VfL Bochum VfL 보훔 heidenheim 하이덴하임 Darmstadt 다름슈타" }
];

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

// 검색 및 매핑 로직
function searchAndMapData(searchQuery) {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const matchingLeagues = leagues.filter(league =>
        league.name.toLowerCase().includes(lowerCaseSearchQuery)
    );
    return matchingLeagues;
}

// 검색 API 엔드포인트
app.get('/api/search', (req, res) => {
    const searchQuery = req.query.query;
    try {
        const searchResults = searchAndMapData(searchQuery);
        res.json({ results: searchResults });
    } catch (error) {
        console.error('Error searching and mapping data:', error);
        res.status(500).json({ success: false });
    }
});


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
