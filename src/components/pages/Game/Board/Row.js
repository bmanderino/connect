import React from "react"

const Row = (props) => {
  const cellColor = () => {
    const val = props.boardState.get(props.col)
    return val && val[props.cell] ? val[props.cell] : ""
  }
  let color = cellColor()
  if (color === "red") {
    return (
      <div
        className="circle red"
        style={{ ...props.styles.circle, ...props.styles.red }}
      ></div>
    )
  } else if (color === "blue") {
    return (
      <div
        className="circle blue"
        style={{ ...props.styles.circle, ...props.styles.blue }}
      ></div>
    )
  } else {
    return <div className="circle " style={props.styles.circle}></div>
  }
}

export default Row
