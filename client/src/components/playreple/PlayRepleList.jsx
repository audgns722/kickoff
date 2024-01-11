import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PlayRepleContent from './PlayRepleContent';
import { Link } from 'react-router-dom';

const PlayRepleList = (props) => {
    const [repleList, setRepleList] = useState([]);

    useEffect(() => {
        let body = {
            matchId: props.matchId,
        }
        axios.post("/api/reple/getPlayReple", body).then((response) => {
            if (response.data.success) {
                // console.log(response.data.repleList);
                setRepleList([...response.data.repleList])
            }
        })
    }, [props.matchId])
    return (
        <div className="comment__list">
            <div className="comments">
                <div className="avatar"></div>
                <div className="text">
                    <div className="name">축덕</div>
                    <div className="cont">가고싶다 집에</div>
                </div>
                <div className="time">오후 12:30</div>
            </div>
            {/* {repleList.map((reple, index) => {
                return (
                    <PlayRepleContent reple={reple} key={index} />
                )
            })} */}
        </div>
    )
}

export default PlayRepleList