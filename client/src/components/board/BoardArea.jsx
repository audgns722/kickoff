import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BoardDetail from './BoardDetail';


const BoardArea = () => {
    const [boardInfo, setBoardInfo] = useState({});
    const [flag, setFlag] = useState(false);

    let params = useParams();

    // 글 불러오기
    useEffect(() => {
        let body = {
            boardNum: params.boardNum
        }

        axios.post('/api/board/detail', body)
            .then((response) => {
                console.log(response);
                setBoardInfo(response.data.board);
                setFlag(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params.boardNum]);

    return (
        <div>
            {flag ? (
                <>
                    <BoardDetail boardInfo={boardInfo} />
                </>
            ) : (
                <div>
                    로딩중
                </div>
            )}
        </div>
    )
}

export default BoardArea