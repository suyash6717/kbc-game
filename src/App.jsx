import './App.css'
import MsgPopup from './components/MsgPopup'
import PrizePyramid from './components/PrizePyramid'
import QuestionAnswer from './components/QuestionAnswer'
import { useSelector } from 'react-redux'
function App() {
  const isGameOver = useSelector((state) => state.currentIndex.isGameOver)
  return (
    <>
      <div className="container">
        <PrizePyramid />
        <QuestionAnswer />
        {
          isGameOver && <MsgPopup  />
        }
      </div>
    </>
  )
}

export default App
