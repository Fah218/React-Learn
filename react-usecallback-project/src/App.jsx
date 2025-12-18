import { useState, useCallback } from 'react'
import ChildComponent from './components/ChildComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <div>
      <div>Count: {count}</div>

      <button onClick={handleClick}>Increment</button>

      <br /><br />

      <ChildComponent
        buttonName="Click me"
        handleClick={handleClick}
      />
    </div>
  )
}

export default App
