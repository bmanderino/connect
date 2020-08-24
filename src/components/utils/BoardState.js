export const createInitialBoardState = (boardState, setBoardState, board) => {
  let boardMap = boardState
  for (let j = 0; j < board.columns; j++) {
    boardMap.set(j, [])
  }
  setBoardState(boardMap)
}

export const updateBoardState = (
  col,
  boardState,
  setBoardState,
  currentPlayer
) => {
  let thisColArr = boardState.get(col)
  let updatedBoardState = boardState.set(col, [...thisColArr, currentPlayer])
  setBoardState(updatedBoardState)
}
