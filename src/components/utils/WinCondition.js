const checkForVerticalWin = (boardState) => {
  let win = false
  boardState.forEach((val, key) => {
    if (val.length < 4) return false
    let j = 1
    while (j < 4) {
      if (val[0] !== val[j]) {
        return false
      } else {
        j++
      }
    }
    win = true
  })
  return win
}

const checkForHorizontalWin = (boardState) => {
  let arr = traverseColumnsForValues(boardState)
  let win = false
  let i = 0
  let j = i + 1
  arr.forEach((val) => {
    if (val.find((val) => val === undefined)) return false
    if (val.length < 4) return false
    while (j < val.length) {
      if (val[i] !== val[j]) {
        return false
      } else {
        j++
      }
      win = true
    }
  })
  return win
}
const traverseColumnsForValues = (boardState) => {
  let arr = createArrayOfValues(boardState) //get data per column
  let sortedArr = [] //traverse columns to get the value of same index
  let i = 0
  let j = 0
  while (j < arr.length) {
    let innerArr = []
    while (i < arr.length) {
      if (arr[i][j]) innerArr.push(arr[i][j])
      i++
    }
    sortedArr.push(innerArr)
    i = 0
    j++
  }
  return sortedArr
}

// Honestly not thrilled with this solution but I'm including it afterall.
// It's not scalable - it really only works in a 4x4 grid.
// In an actual working environment, this is where I would seek out input from my co-workers
// const checkForDiagonalWin = (boardState, board) => {
//   let win = false
//   let arr = createArrayOfValues(boardState) //get data per column
//   let i = 0
//   let j = i + 1
//   while (j < arr.length) {
//     if (arr[i][i] !== arr[j][j]) {
//       return false
//     } else {
//       j++
//     }
//     win = true
//   }
//  let k = 3
//   let l = i - 1
//   while (l > 0) {
//     if (arr[k][k] !== arr[l][l]) {
//       return false
//     } else {
//       l--
//     }
//     win = true
//   }
//   return win
// }

const checkForDraw = (boardState, board) => {
  let arr = createArrayOfValues(boardState)
  let singleArr = []
  for (let val of arr) {
    singleArr.push(...val)
  }
  if (!checkForHorizontalWin(boardState) && !checkForVerticalWin(boardState)) {
    if (singleArr.length < board.rows * board.columns) return false
  } else if (
    !checkForHorizontalWin(boardState) &&
    !checkForVerticalWin(boardState)
  ) {
    if (singleArr.length === board.rows * board.columns) return true
  }
  return false
}

const createArrayOfValues = (boardState) => {
  let arr = [] //get data per column
  for (let val of boardState.values()) {
    arr.push(val)
  }
  return arr
}

export const checkWinCondition = (boardState, board) => {
  let verticalWin = checkForVerticalWin(boardState)
  let horizontalWin = checkForHorizontalWin(boardState)
  let draw = checkForDraw(boardState, board)
  return verticalWin || horizontalWin || draw
}
