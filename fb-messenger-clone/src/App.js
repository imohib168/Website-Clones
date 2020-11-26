import React, { useEffect, useState } from 'react';
import firebase from 'firebase'

// Material UI
import SendIcon from '@material-ui/icons/Send';
import { FormControl, Input, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import Message from './Message'
import db from './firebase'

// FlipMove functionality
import FlipMove from 'react-flip-move';

// Custom CSS
import './App.css';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function App() {
    const classes = useStyles();

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        db.collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
        })
    }, [])

    useEffect(() => {
        setUsername(prompt("Please Enter your Name/username: "))
    }, [])

    const sendMessaeg = (event) => {
        event.preventDefault();

        db.collection("messages").add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        // setMessages([...messages, { username: username, message: input }])
        setInput("");
    }


    return (
        <div>
            <div className="header">
                <h3>Welcome {username} </h3>
            </div>
            <div className="container">
                <form className="form">
                    <FormControl className="formControl">
                        {/* <InputLabel color="secondary">Enter a Message...</InputLabel> */}
                        <Input style={{ flex: 1 }} placeholder="Enter a Messaeg..." color="secondary" value={input} onChange={(e) => setInput(e.target.value)} />
                        <IconButton
                            style={{ flex: 0 }}
                            variant="contained"
                            color="primary"
                            disabled={!input}
                            onClick={sendMessaeg}
                            type="submit">
                            <SendIcon />
                        </IconButton>
                    </FormControl>
                </form>

                <FlipMove>
                    {
                        messages.map(({ id, message }) => (
                            <Message key={id} username={username} message={message} />
                        ))
                    }
                </FlipMove>
            </div>
        </div>
    );
}

export default App;
