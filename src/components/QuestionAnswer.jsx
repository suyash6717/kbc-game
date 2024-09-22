import { useEffect, useState } from "react";
import questions from "../questions";
import { useDispatch } from "react-redux";
import { setAmount, setIndex } from "../slice/currentIndexSlice";
import MsgPopup from "./MsgPopup";
const QuestionAnswer = () => {

    const [timerValue, setTimerValue] = useState(20);
    const [intervalId, setIntervalId] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showMsgPopup, setShowMsgPopup] = useState(false);

    const dispatch = useDispatch();

    const restartGame = () => {
        clearInterval(intervalId);
        setIsCorrect(false);
        setSelectedAnswer(null);
        dispatch(setIndex(0));
        setShowMsgPopup(true);
    }

    useEffect(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        const id = setInterval(() => {
            setTimerValue((prev) => {
                if (prev == 0) {
                    clearInterval(id);
                    restartGame();
                } else {
                    return prev - 1;
                }
            })
        }, 1000)
        setIntervalId(id);
        return () => clearInterval(intervalId);
    }, [currentIndex, setTimerValue])

    const evaluateAnswer = (option) => {
        setSelectedAnswer(option);
        setIsCorrect(true);
        if (questions[currentIndex].correctAnswer === option) {
            if (currentIndex + 1 == questions.length) {
                restartGame();
            }
            setTimeout(() => {
                clearInterval(intervalId)
                setTimerValue(20);
                setCurrentIndex(currentIndex + 1)
                dispatch(setIndex(currentIndex + 1));
                setSelectedAnswer(null);
            }, 1000)
        } else {
            clearInterval(intervalId)
            setIsCorrect(false);
            setTimeout(() => {
                restartGame();
            }, 1000)
        }
    }

    const handleRestart = () => {
        setCurrentIndex(0)
        setShowMsgPopup(false);
        setTimerValue(20);
        dispatch(setAmount(0));
    }

    return (
        <>
            {
                questions[currentIndex]?.question && (
                    <>
                        <div className="quiz-container">
                            <div className="timer-circle">
                                <span className="timer-text">{timerValue}</span>
                            </div>
                            <h2 className="question-text">{questions[currentIndex]?.question}</h2>
                            <div className="options-container">
                                {questions[currentIndex]?.options.map((option) => (
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

            {
                showMsgPopup && <MsgPopup handleRestart={handleRestart} />
            }
        </>
    )
}

export default QuestionAnswer;