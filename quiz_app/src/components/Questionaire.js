import React from 'react';

const Questionaire = ({ showAnswer, handleAnswer, data: { question, correct_answer, incorrect_answers } }) => {

    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

    return (
        <div>
            <div className="bg-white text-purple-800 p-8 rounded-lg shadow-md">
                <h2
                    className='text-2xl'
                    dangerouslySetInnerHTML={{ __html: question }}
                />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4">
                {shuffledAnswers.map(answer => {
                    // const bgColor = showAnswer ? answer === correct_answer ? 'bg-green-200' : 'bg-red-100' : 'bg-white';
                    const bgColor = "bg-white";
                    return (
                        <button>
                            <div className={`${bgColor} outline-none text-purple-800 p-4 font-semibold my-1 rounded shadow-md cursor-pointer`}
                                onClick={() => { handleAnswer(answer) }}
                                dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Questionaire;
