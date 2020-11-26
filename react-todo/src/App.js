import React, { useState, useEffect } from 'react';
import './App.css';

import Todo from './Todo';

import db from './Firebase';
import firebase from 'firebase';

function App() {

	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
			setTodos(snapshot.docs.map(doc => ({
				id: doc.id,
				todo: doc.data().todo
			})))
		})
	}, [])

	const addTodo = (event) => {
		event.preventDefault();

		db.collection("todos").add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})

		setTodos([...todos, input]);
		setInput("");
	}

	return (
		<div className="App">
			<form>
				<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
				<button disabled={!input} onClick={addTodo}>Add todo</button>
			</form>

			<ul>
				{todos.map(todo => {
					return (
						<Todo todos={todo} />
					)
				})}
			</ul>
		</div>
	);
}

export default App;
