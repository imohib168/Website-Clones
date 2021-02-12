import React, { useState, useEffect } from 'react';
import Questionaire from './components/Questionaire';

import './App.css';


const API_URL = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const App = () => {

    const [questions, setQuestions] = useState([]);
    let [currentIndex, setCurrentIndex] = useState(0);
    let [score, setScore] = useState(0);
    let [gameEnded, setGameEnded] = useState(false);
    // const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setQuestions(data.results);
            })
    }, [])

    const handleAnswer = (answer) => {
        let newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);

        // if (!showAnswer) {
        if (answer === questions[currentIndex].correct_answer) {
            setScore(score + 1);
        }
        // setShowAnswer(true);

        if (newIndex >= questions.length) {
            setGameEnded(true);
        }
    }

    return gameEnded ? (
        <h1 className="text-black font-bold text-3xl">Hey! Your Score is: {score}</h1>
    ) : (questions.length > 0 ? (
        <div className="container">
            <Questionaire handleAnswer={handleAnswer} data={questions[currentIndex]} />
            {/* showAnswer={showAnswer} */}
        </div>
    ) : (
            <div className="text-2xl font-bold">Loading...</div>
        ));
}

export default App
