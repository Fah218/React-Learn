// import Card from './components/Card'
import { useState} from 'react'
import './App.css'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

return(
<div>
  {/* <Card name="fahad">
  <h1>Best web dev course</h1>
  <p>Try to consistance</p>
  <p>Will complete the course soon
  </p>
  </Card> */}

   
  <Button increamentCount={handleClick} text="Click Me">
        <h1>{count}</h1>
      </Button>
    </div>
  );
}

export default App
