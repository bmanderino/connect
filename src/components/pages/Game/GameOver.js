import React from "react"
import "../../utils/Alert.css"

const GameOver = (props) => {
  const handlePlayAgainButton = () => {
    props.setStart(false)
  }
  const styles = {
    message: {
      color: "red",
    },
  }
  return (
    <div className="alert">
      <div style={styles.message}>Game Over</div>
      <button className="button" onClick={handlePlayAgainButton}>
        Play Again
      </button>
    </div>
  )
}

export default GameOver
