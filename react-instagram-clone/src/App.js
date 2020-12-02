import React, { useState, useEffect } from 'react'
import './App.css';
import Posts from './Posts';
import { db, auth } from "./firebase"

import { makeStyles } from '@material-ui/core/styles';
import { Modal, Input, Button, Avatar, Fade, Backdrop } from '@material-ui/core';

import ImageUpload from './ImageUpload';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        padding: theme.spacing(2, 4, 3),
        width: '400px',
    },
}));

function App() {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [posts, setPosts] = useState([]);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // console.log(authUser);
                setUser(authUser)
            } else {
                setUser(null);
            }
        })
    }, [user, username])
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })));
        })
    }, [])

    const signUp = (event) => {
        event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                return authUser.user.updateProfile({
                    displayName: username,
                })
            })
            .catch(error => alert(error.message))

        setOpen(false);
        setEmail("");
        setPassword("");
    }
    const signIn = (event) => {
        event.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message))

        setOpenSignIn(false);
        setEmail("");
        setPassword("");
    }

    return (
        <div className="App">
            {/* Modal */}
            <Modal
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form className="app__signup">
                            <center>
                                <img
                                    className="app__headerImage"
                                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                                    alt="Instagram Logo"
                                />
                            </center>

                            <input
                                placeholder="Username..."
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />

                            <input
                                placeholder="Email..."
                                type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />

                            <input
                                placeholder="Password..."
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />

                            <button onClick={signUp} type="submit" >Signup</button>
                        </form>
                    </div>
                </Fade>
            </Modal>
            <Modal
                className={classes.modal}
                open={openSignIn}
                onClose={() => setOpenSignIn(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openSignIn}>
                    <div className={classes.paper}>
                        <form className="app__signup">
                            <center>
                                <img
                                    className="app__headerImage"
                                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                                    alt="Instagram Logo"
                                />
                            </center>

                            <input
                                placeholder="Email..."
                                type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />

                            <input
                                placeholder="Password..."
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />

                            <button onClick={signIn} type="submit" >Login</button>
                        </form>
                    </div>
                </Fade>
            </Modal>

            {/* Header */}
            <div className="app__header">
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram Logo"
                />

                <div className="app__buttons">

                    {user ? (
                        <div className="app__avlog">
                            <div className="app__avuser">
                                <Avatar
                                    className="post__avatar"
                                    alt={user.displayName}
                                    src="/static/images/avatar/1.jpg"
                                />
                            </div>
                            <button onClick={() => auth.signOut()}>Logout</button>
                        </div>
                    ) : (
                            <div className="app__loginContainer">
                                <button onClick={() => setOpenSignIn(true)}>Login</button>
                                <button onClick={() => setOpen(true)}>Signup</button>
                            </div>
                        )}
                </div>
            </div>

            {/* Posts */}
            <div className="app__posts">
                <div className="app__postsLeft">
                    {posts.map(({ post, id }) => (
                        <Posts
                            key={id}
                            postId={id}
                            user={user}
                            username={post.username}
                            imageURL={post.imageURL}
                            caption={post.caption}
                        />
                    ))}
                </div>
            </div>

            {/* Image Uploader */}
            {
                user ? (
                    <ImageUpload username={user.displayName} />
                ) : (
                        <h3 style={{ margin: 10 }}>
                            <center>
                                You need to login to use the <br /> Upload and Comment features...
                        </center>
                        </h3>
                    )
            }
        </div >
    );
}

export default App;
