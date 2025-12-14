import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrementByAmount = () => {
    if (!amount) return
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className="container">
      <button onClick={() => dispatch(increment())}>+</button>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>

      <br /><br />

      <button onClick={() => dispatch(reset())}>Reset</button>

      <br /><br />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter Amount"
      />

      <br /><br />

      <button onClick={handleIncrementByAmount}>
        Inc by Amount
      </button>
    </div>
  )
}

export default App
