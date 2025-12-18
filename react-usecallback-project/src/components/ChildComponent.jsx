import React from 'react'

const ChildComponent = React.memo((props) => {
  console.log("Child component re-rendered");

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
})

export default ChildComponent



// React memo -> wrap -> component-> re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga
// if i ma sending function then react.memo won't be able to save u from re-render 