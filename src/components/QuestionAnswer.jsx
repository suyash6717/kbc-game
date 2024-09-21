import { useEffect, useState } from "react";

const QuestionAnswer = () => {
    const question = "What is the capital of France?";
    const options = [
        { id: 1, text: "Berlin" },
        { id: 2, text: "Madrid" },
        { id: 3, text: "Paris" },
        { id: 4, text: "Rome" },
    ];
    const [timerValue,setTimerValue] = useState(20);
    const [intervalId,setIntervalId] = useState(null);

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

                <h2 className="question-text">{question}</h2>
                <div className="options-container">
                    {options.map((option) => (
                        <div key={option.id} className="option">
                            {option.text}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default QuestionAnswer;