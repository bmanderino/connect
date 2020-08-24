import React from "react"
import Row from "./Row"

const Column = (props) => {
  return (
    <div
      className={props.index + " column"}
      style={props.styles.column}
      onClick={(e) => props.handleColumnSelection(props.index, e.target)}
    >
      {[...Array(props.board.rows)]
        .map((val, index) => {
          return (
            <Row
              key={index}
              styles={props.styles}
              col={props.index}
              cell={index}
              boardState={props.boardState}
            />
          )
        })
        .reverse()}
    </div>
  )
}

export default Column
