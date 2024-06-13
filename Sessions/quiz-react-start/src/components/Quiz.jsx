import { useState } from "react";
import questions from "../assets/js/questions";
import quizCompleteScreen from '../assets/quiz-complete.png';
import QuizTimer from "./QuizTimer";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex === questions.length;

    function handleAnswer(selectedAnswer) {
        setUserAnswers((previousAnswers) => {
            return [...previousAnswers, selectedAnswer];
        });
    }

    if (isQuizComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteScreen} alt="Quiz Completed" />
                <h2>Quiz Complete</h2>
            </div>
        );
    }

    const shuffleAnswer = [...questions[activeQuestionIndex].answers.sort((a,b) => 0.5 - Math.random())]

    return (
        <div>
            <main>
                <div id="quiz">
                    <div id="question">
                        <QuizTimer/>    
                        <h2>{questions[activeQuestionIndex].text}</h2>
                        <ul id="answers">
                            {shuffleAnswer.map((answer, index) => (
                                <li key={index} className="answer">
                                    <button onClick={() => handleAnswer(answer)}>{answer}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
