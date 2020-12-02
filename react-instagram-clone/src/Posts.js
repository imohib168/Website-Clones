import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import './Post.css'

import { db } from './firebase'

import Avatar from '@material-ui/core/Avatar';

function Posts({ username, imageURL, caption, postId, user }) {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setComment("");
    }

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map(doc => doc.data()))
                })
        }

        return () => {
            unsubscribe();
        }
    }, [postId])

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>

            <img
                className="post__image"
                src={imageURL}
                alt="React Logo" />

            <h3 className="post__text">
                <strong>{username} </strong>{caption}
            </h3>

            <div className="post__comments">
                {
                    comments.map(comment => (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))
                }
            </div>

            {user && (
                <form className="post__commentSection">
                    <input
                        type="text"
                        placeholder="Enter your Comment here..."
                        value={comment}
                        className="post__input"
                        onChange={(event) => setComment(event.target.value)}
                    />

                    <button
                        className="post__button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}
                    >
                        Post
                            </button>
                </form>
            )}
        </div>
    )
}

export default Posts;
