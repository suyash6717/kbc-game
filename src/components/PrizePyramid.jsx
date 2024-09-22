import { useSelector, useDispatch } from "react-redux";
import { setAmount } from "../slice/currentIndexSlice";
import { useEffect } from "react";

const PrizePyramid = () => {
    // List of prizes
    const prizeList = [
        "₹7,00,00,000",
        "₹1,00,00,000",
        "₹50,00,000",
        "₹25,00,000",
        "₹12,50,000",
        "₹6,40,000",
        "₹3,20,000",
        "₹1,60,000",
        "₹80,000",
        "₹40,000",
        "₹20,000",
        "₹10,000",
        "₹5,000",
        "₹3,000",
        "₹2,000",
    ];
    const dispatch = useDispatch();
    const currentIndex = useSelector((state) => state.currentIndex.value);
    const index = (prizeList.length - currentIndex - 1);
    useEffect(() => {
        if(currentIndex+1 == 15 ){
            dispatch(setAmount(prizeList[0]));
        }
        else if(prizeList[index + 1]){
            dispatch(setAmount(prizeList[index + 1] ?? 0));
        }
    }, [index])

    return (
        <div className="pyramid-container">
            <ul className="pyramid-list">
                {prizeList.map((prize, prizeIndex) => (
                    <li
                        key={prizeIndex}
                        className={`pyramid-item ${index === prizeIndex ? "active" : ""}`}
                        onClick={() => handlePrize(prizeIndex, prize)}
                    >
                        {prize}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PrizePyramid;