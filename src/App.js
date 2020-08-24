// Start New Game
// Decide if Player or AI goes first
// Determine Current Player
// Generate Board state - dynamic to allow for changing dimensions
// Player Turn
// // Select Column
// // Determine if column is full
// // // if full, alert player to select new column
// // Add 'chip' to lowest available space
// // Store column selection
// // Check for win condition
// // //End Game || End turn/Next Player
// AI Turn
// // fetch data (passing column array)
// // Select column
// // Store column selection
// // Check for win condition
// // //End Game || End turn/Next Player

// Future
// // Animated Component transitions (fade in/out)
// // Animated chips falling into place
// // Select your color
// // Local storage to prevent starting over on browser refresh

import React, { useState } from "react"
import "./App.css"
import Intro from "./components/pages/Intro/Intro"
import Game from "./components/pages/Game/Game"

function App() {
  const [playerName, setPlayerName] = useState("") //TODO revert back to empty
  const [currentPlayer, setCurrentPlayer] = useState("red")
  const [start, setStart] = useState(false) //TODO revert back to false
  if (!start) {
    return (
      <div className="App">
        <Intro
          playerName={playerName}
          setPlayerName={setPlayerName}
          setCurrentPlayer={setCurrentPlayer}
          setStart={setStart}
        />
      </div>
    )
  } else {
    return (
      <Game
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        playerName={playerName}
        start={start}
        setStart={setStart}
      />
    )
  }
}

export default App
