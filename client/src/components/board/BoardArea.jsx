import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BoardDetail from './BoardDetail';

const BoardArea = () => {
    const [boardInfo, setBoardInfo] = useState({});
    const [flag, setFlag] = useState(false);
    const [viewed, setViewed] = useState(false); // 새로고침 여부를 관리

    let params = useParams();

    // 글 불러오기
    useEffect(() => {
        let body = {
            boardNum: params.boardNum
        }

        // 이미 조회한 경우에는 요청을 보내지 않음
        if (!viewed) {
            axios.post('/api/board/detail', body)
                .then((response) => {
                    console.log(response);
                    setBoardInfo(response.data.board);
                    setFlag(true);
                    setViewed(true); // 조회 완료 시 viewed를 true로 설정
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [params.boardNum, viewed]);

    return (
        <div>
            {flag ? (
                <>
                    <BoardDetail boardInfo={boardInfo} />
                </>
            ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><span className="loader"></span></div>
            )}
        </div>
    );
};

export default BoardArea;
