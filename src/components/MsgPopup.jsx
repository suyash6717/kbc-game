import { useSelector } from "react-redux";
const MsgPopup = ({ handleRestart }) => {
    const prizeAmount = useSelector((state) => state.currentIndex.prizeAmount)
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h1 className="winning-message">You Won! {prizeAmount}</h1>
                <button className="restart-btn" onClick={handleRestart}>Restart</button>
            </div>
            {/* Celebration Effects */}
            {
                prizeAmount == '₹7,00,00,000' &&
                (
                    <>
                        <div className="balloons">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className="ribbons">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className="cracker"></div>
                    </>
                )
            }

        </div>
    )
}

export default MsgPopup;