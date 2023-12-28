import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PiImagesLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from "../../firebase.js";

const MypageImage = () => {
    const [currentImage, setCurrentImage] = useState("");
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isLoading && !user.accessToken) {
            navigate("/login");
        } else {
            setCurrentImage(user.photoURL);
        }
        // eslint-disable-next-line
    }, [])

    const ImageUpload = (e) => {
        const formData = new FormData();
        formData.append("file", (e.target.files[0]));

        axios
            .post("/api/user/profile/img", formData)
            .then((response) => {
                setCurrentImage(response.data.filePath);
            })
    }

    const SaveProfile = async (e) => {
        e.preventDefault();
        if (!currentImage) {
            return alert("이미지를 등록해주세요.")
        }
        try {
            await firebase.auth().currentUser.updateProfile({
                photoURL: currentImage
            })
        } catch (err) {
            return alert("프로필 저장에 실패하였습니다.")
        }

        let body = {
            photoURL: currentImage,
            uid: user.uid,
        }

        axios.post("/api/user/profile/update", body).then((response) => {
            if (response.data.success) {
                alert("프로필이미지가 변경되었습니다.")
                window.location.reload();
            } else {
                return alert("프로필 저장에 실패하였습니다.")
            }
        })
    }



    return (
        <form className="profile">
            <label htmlFor="commentImg">
                <span><PiImagesLight /></span>
                <input
                    type="file"
                    className="blind"
                    name="commentImg"
                    id="commentImg"
                    accept="image/png, image/jpeg, image/gif"
                    onChange={(e) => ImageUpload(e)}
                />
                <img src={`http://localhost:5050/${user.photoURL}`} alt="프로필이미지" />
            </label>
            <button onClick={(e) => SaveProfile(e)}>변경하기</button>
        </form>

    )
}

export default MypageImage;
