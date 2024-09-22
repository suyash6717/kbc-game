import { useEffect, useState } from "react";
import questions from "../questions";
import { useDispatch } from "react-redux";
import { setIndex, setGameStatus } from "../slice/currentIndexSlice";
const QuestionAnswer = () => {

    const [timerValue, setTimerValue] = useState(20);
    const [intervalId, setIntervalId] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const dispatch = useDispatch();

    const restartGame = () => {
        clearInterval(intervalId);
        setTimerValue(20);
        setIsCorrect(false);
        setSelectedAnswer(null);
        setCurrentIndex(0)
        dispatch(setIndex(0));
        dispatch(setGameStatus(true));
    }

    const startTimer = () => {
        const id = setInterval(() => {
            setTimerValue((prev) => {
                if (prev == 0) {
                    clearInterval(id);
                    return 0;
                } else {
                    return prev - 1;
                }
            })
        }, 1000)
        setIntervalId(id);
    }

    useEffect(() => {
        startTimer();
        return () => clearInterval(intervalId);
    }, [currentIndex])

    useEffect(() => {
        if (timerValue === 0) {
            restartGame();
        }
    }, [timerValue]);

    const evaluateAnswer = (option) => {
        setSelectedAnswer(option);
        if (questions[currentIndex].correctAnswer === option) {
            setIsCorrect(true);
            setTimeout(() => {
                setTimerValue(20);
                setCurrentIndex(currentIndex + 1)
                dispatch(setIndex(currentIndex + 1));
                setSelectedAnswer(null);
            }, 500)
        } else {
            restartGame();
        }
    }

    return (
        <>
            <div className="quiz-container">
                <div className="timer-circle">
                    <span className="timer-text">{timerValue}</span>
                </div>
                <h2 className="question-text">{questions[currentIndex].question}</h2>
                <div className="options-container">
                    {questions[currentIndex].options.map((option) => (
                        <div key={option}
                            className={`option ${selectedAnswer === option ? (isCorrect === null ? "blink-gold" : isCorrect ? "correct" : "wrong") : ""}`}
                            onClick={() => evaluateAnswer(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default QuestionAnswer;