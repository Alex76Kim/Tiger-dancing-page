import { useState } from 'react'
import tigerSvg from '../assets/images/tiger.svg'
import '../styles/DancingTiger.css'

function DancingTiger() {
  const [isAnimating, setIsAnimating] = useState(true)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="dancing-tiger-container">
      <div className="title-section">
        <h1 className="page-title">춤추는 호랑이</h1>
        <p className="subtitle">Dancing Tiger</p>
      </div>

      <div className={`tiger-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={tigerSvg} alt="Dancing Tiger" className="tiger-image" />
      </div>

      <button className="control-button" onClick={toggleAnimation}>
        {isAnimating ? '⏸️ 정지' : '▶️ 춤추기'}
      </button>

      <div className="info-text">
        <p>{isAnimating ? '호랑이가 신나게 춤을 추고 있어요! 🎵' : '호랑이가 쉬고 있어요 😴'}</p>
      </div>
    </div>
  )
}

export default DancingTiger
