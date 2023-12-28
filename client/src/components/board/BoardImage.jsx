import React, { useState } from 'react';
import axios from 'axios';
import { PiImagesLight } from "react-icons/pi";

const BoardImage = (props) => {
    const [preview, setPreview] = useState(''); // 미리보기 이미지 URL을 저장하기 위한 상태 변수

    const FileUpload = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        // 이미지 미리보기
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);

        axios
            .post("/api/board/image/upload", formData)
            .then((response) => {
                console.log(response);
                props.setImage(response.data.filePath);
            });
    }

    return (
        <div className="bottom__left">
            <label htmlFor="commentImg">
                <span><PiImagesLight /></span>
            </label>
            <span>*최대 1개(jpg, png, gif만 가능)</span>
            <div className='preview' style={{ background: `url(${preview}) no-repeat center center`, backgroundSize: 'cover' }}>
                {!preview && <span>이미지 미리보기</span>}
            </div>
            <input
                type="file"
                className="blind"
                name="commentImg"
                id="commentImg"
                accept="image/png, image/jpeg, image/gif"
                onChange={FileUpload}
            />
        </div>
    )
}

export default BoardImage;
