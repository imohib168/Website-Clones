import React, { useState, useEffect, useRef } from 'react'

const TodoForm = ({ edit, onSubmit }) => {

    const [input, setInput] = useState(edit ? edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        })

        setInput('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update Todo"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        ref={inputRef}
                        className="todo-input"
                    />
                    <button className="todo-button" onClick={handleSubmit}>Update</button>
                </>
            ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Add a todo..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            ref={inputRef}
                            className="todo-input"
                        />
                        <button className="todo-button" onClick={handleSubmit}>Add Todo</button>
                    </>
                )}
        </form>
    )
}

export default TodoForm;
