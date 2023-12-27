import React from 'react'
import axios from 'axios'

const BoardImage = (props) => {

    const FileUpload = (e) => {
        const formData = new FormData();
        formData.append("file", (e.target.files[0]));

        axios
            .post("/api/board/image/upload", formData)
            .then((response) => {
                console.log(response);
                props.setImage(response.data.filePath);
            })
    }

    return (
        <div>
            <input
                type="file"
                accept='image/*'
                onChange={(e) => FileUpload(e)}
            />
        </div>
    )
}

export default BoardImage