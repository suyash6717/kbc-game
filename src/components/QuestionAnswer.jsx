import { useEffect, useState } from "react";
import questions from "../questions";
const QuestionAnswer = () => {

    const [timerValue,setTimerValue] = useState(20);
    const [intervalId,setIntervalId] = useState(null);
    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect(()=>{
        const id = setInterval(()=>{
            setTimerValue((prev) => {
                if(prev == 0){
                    return 20;
                }else{
                    return prev-1;
                }
            })
        },1000)
    
        setIntervalId(id);

        return () => clearInterval(id);
    },[])
    
    const stopInterval = () => {
        clearInterval(intervalId);
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
                        <div key={option} className="option">
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default QuestionAnswer;