import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RepleContent from './RepleContent';
import { Link } from 'react-router-dom';

const RepleList = (props) => {
    const [repleList, setRepleList] = useState([]);

    useEffect(() => {
        let body = {
            boardId: props.boardId,
        }
        axios.post("/api/reple/getReple", body).then((response) => {
            if (response.data.success) {
                // console.log(response.data.repleList);
                setRepleList([...response.data.repleList])
            }
        })
    }, [repleList])

    return (
        <div>
            {repleList.map((reple, idx) => {
                return (
                    <RepleContent reple={reple} key={idx} />
                )
            })}
            <div className="commentWrap__listBtn">
                <Link to="/boardlist" className="commentWrap__listBtn">
                    목록
                </Link>
            </div>
        </div>
    )
}

export default RepleList