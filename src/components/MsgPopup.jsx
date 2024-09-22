import { useDispatch } from "react-redux";
import { setGameStatus, setIndex } from "../slice/currentIndexSlice";
const MsgPopup = () => {
    const dispatch = useDispatch();
    const handleRestart = () => {
        dispatch(setGameStatus(false));
        dispatch(setIndex(0));
    }
    return(
        <div className="popup-overlay">
        <div className="popup-content">
            <h1 className="winning-message">You Won!</h1>
            <button className="restart-btn" onClick={handleRestart}>Restart</button>
        </div>
    </div>
    )
}

export default MsgPopup;