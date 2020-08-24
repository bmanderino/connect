import React, { useState } from "react"
import "./Intro.css"

const Intro = (props) => {
  const [error, setError] = useState(false)

  const startGame = (str) => {
    if (props.playerName) {
      props.setCurrentPlayer(str)
      props.setStart(true)
    } else {
      setError(true)
    }
  }

  const handlePlayerNameInput = (value) => {
    if (error) {
      setError(false)
    }
    props.setPlayerName(value)
  }

  return (
    <header className="App-header">
      <h1>Play NineDT</h1>
      <h3>Enter your name</h3>
      <input
        className={error ? "errorInput" : "defaultInput"}
        onChange={(e) => handlePlayerNameInput(e.target.value)}
        placeholder={props.playerName}
      />
      {error && <p className="errorMessage">Please enter your name</p>}
      <div className="buttonGroup">
        <button
          className="button"
          type="button"
          onClick={() => startGame("red")}
        >
          I will go first
        </button>
        <button
          className="button"
          type="button"
          onClick={() => startGame("blue")}
        >
          Let the computer go first
        </button>
      </div>
    </header>
  )
}

export default Intro
