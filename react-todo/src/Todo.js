import React, { useState } from 'react'
import db from './Firebase';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo({ todos }) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const updateTodo = () => {

        db.collection("todos").doc(todos.id).set({
            todo: input
        }, { merge: true })

        setOpen(false);
    }

    return (
        <>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>This is Modal Box</h1>
                    <input placeholder={todos.todo} value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={updateTodo}>Update</button>
                </div>
            </Modal>
            <div>
                <li>{todos.todo}</li>

                <button onClick={() => db.collection("todos").doc(todos.id).delete()}>
                    Delete🤬
                </button>

                <button onClick={() => setOpen(true)}>
                    Edit
                </button>
            </div>
        </>
    )
}

export default Todo;
