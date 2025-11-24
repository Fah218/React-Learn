import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='counter-container' style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center' }}>
      <p id='para'>You have clicked {count} times</p>
      <button id='btn' onClick={() => setCount(count + 1)}>increase</button>
      <button id='btn' onClick={() => setCount(count -1)}>decrease</button>
    </div>
  )
}

export default Counter