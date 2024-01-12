import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PlayRepleContent from './PlayRepleContent';

const PlayRepleList = (props) => {
    const [repleList, setRepleList] = useState([]);

    useEffect(() => {
        let body = {
            matchId: props.matchId,
        }
        axios.post("/api/playreple/get", body).then((response) => {
            if (response.data.success) {
                // console.log(response.data.repleList);
                setRepleList([...response.data.repleList])
            }
        })
    }, [repleList])

    return (
        <div className="comment__list">
            {!repleList || repleList.length === 0 ? (
                <div className="comments">
                    <div className="avatar"></div>
                    <div className="text">
                        <div className="name">KICKOFF</div>
                        <div className="cont">응원톡에 참여해주세요.</div>
                    </div>
                    <div className="time"><p>2024년 1월 12일</p></div>
                </div>
            ) : (
                repleList.map((reple, index) => (
                    <PlayRepleContent reple={reple} key={index} />
                ))
            )}
        </div>
    )
}

export default PlayRepleList