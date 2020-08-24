import React, { useState, useEffect } from "react"
import Board from "./Board/Board"
import GameOver from "./GameOver"
import {
  checkWinCondition,
  createInitialBoardState,
  updateBoardState,
  refreshGame,
  //handleAi
} from "../../utils/"

const Game = (props) => {
  const board = {
    columns: 4,
    rows: 4,
    height: "auto",
    width: "400px",
  }
  const styles = {
    gameBoard: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: board.width,
      height: board.height,
    },
  }

  const [moves, setMoves] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [boardState, setBoardState] = useState(new Map())
  const [displayError, setDisplayError] = useState(false)

  const handleColumnSelection = async (col) => {
    if (checkforValidColumn(col)) {
      setDisplayError(false)
      setMoves([...moves, col])
      updateBoardState(col, boardState, setBoardState, props.currentPlayer)
      props.setCurrentPlayer(props.currentPlayer === "red" ? "blue" : "red")
    } else {
      setDisplayError(true)
    }
    setGameOver(checkWinCondition(boardState, board))
  }

  useEffect(() => {
    createInitialBoardState(boardState, setBoardState, board)
  }, [])

  useEffect(() => {
    if (!props.start) {
      refreshGame()
    }
    // if(props.playerName==="AI"){
    //   handleAI(moves, handleColumnSelection)
    // }
  })

  const checkforValidColumn = (col) => {
    if (boardState.get(col).length >= board.rows) return false
    return true
  }

  return (
    <header className="App-header">
      <h1>
        Current Player:{" "}
        {props.currentPlayer === "red" ? props.playerName : "AI"}
      </h1>
      <div style={styles.gameBoard}>
        <Board
          board={board}
          boardState={boardState}
          handleColumnSelection={handleColumnSelection}
        />
      </div>
      {displayError && <div>Please select a different column</div>}
      {gameOver && (
        <GameOver
          setBoardState={setBoardState}
          setGameOver={setGameOver}
          setMoves={setMoves}
          setStart={props.setStart}
        />
      )}
    </header>
  )
}

export default Game
