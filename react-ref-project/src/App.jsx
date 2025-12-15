import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const val = useRef(0)
  // const btnRef = useRef(null)

  // function handleIncrement() {
  //   val.current = val.current + 1
  //   console.log("Value of val:", val.current)
  //   setCount(prev => prev + 1)
  // }

  // useEffect(() => {
  //   console.log("Component re-rendered")
  // }, [count]) // runs only when count changes

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red"
  // }
  
   
 const [time, setTime] = useState(0)
  const timerRef = useRef(null)

  function startTimer() {
    if (timerRef.current !== null) return // prevent multiple intervals

    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
  }

  function stopTimer() {
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  function resetTimer() {
    stopTimer()
    setTime(0)
  }

  return (
    <div>
      <h1>Stopwatch: {time} seconds</h1>

      <button onClick={startTimer}>Start</button>
      <br /><br />

      <button onClick={stopTimer}>Stop</button>
      <br /><br />

      <button onClick={resetTimer}>Reset</button>
    



      {/* <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>

      <br /><br />

      <button onClick={changeColor}>
        Change color of 1st Button
      </button>

      <div>
        Count: {count}
      </div> */}
    </div>
  )
}

export default App
