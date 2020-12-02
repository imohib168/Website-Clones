import React, { useState } from 'react'
import { db, storage } from "./firebase"
import firebase from 'firebase'
import './ImageUpload.css';

function ImageUpload({ username }) {

    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);


    const handleChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    ((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                );

                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageURL: url,
                            username: username,
                        })

                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    })
            }
        )
    }

    return (
        <div className="imageUpload">
            <h3>You Can upload your Posts here</h3>

            <progress
                value={progress}
                max="100"
            />

            <input
                type="text"
                placeholder="Enter a Caption..."
                value={caption}
                onChange={(event) => setCaption(event.target.value)}
                className="imageUpload__caption"
            />
            {/* <label for="file">Choose a file</label> */}
            <div className="imageUpload__file">
                <input
                    type="file"
                    id="file"
                    className="imageUpload__fileUpload"
                    onChange={handleChange}
                />
            </div>

            <button
                onClick={handleUpload}
                disabled={!caption}
            >
                Upload
            </button>
        </div>
    )
}

export default ImageUpload;
