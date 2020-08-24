import React from "react"
import Column from "./Column"

const Board = (props) => {
  const styles = {
    gameBoard: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "60vw",
    },
    column: {
      border: "1px solid #fff",
      flex: "1 1 0px",
      textAlign: "center",
    },

    circle: {
      borderRadius: "50%",
      border: "1px solid #fff",
      backgroundColor: "#000",
      height: `calc(${props.board.width} / ${props.board.columns})`,
    },
    red: { backgroundColor: "red" },
    blue: { backgroundColor: "blue" },
  }

  const board = [...Array(props.board.columns)].map((val, index) => {
    return (
      <Column
        styles={styles}
        key={index}
        index={index}
        board={props.board}
        handleColumnSelection={props.handleColumnSelection}
        boardState={props.boardState}
      />
    )
  })
  return board
}

export default Board
