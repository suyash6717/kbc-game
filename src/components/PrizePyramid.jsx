import { useState } from "react";

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
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="pyramid-container">
            <ul className="pyramid-list">
                {prizeList.map((prize, prizeIndex) => (
                    <li
                        key={prizeIndex}
                        className={`pyramid-item ${activeIndex === prizeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(prizeIndex)}
                    >
                        {prize}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PrizePyramid;