import './App.css'

function App() {
  
  function handleClick(){
       alert("i am clicked");
  }

  function handleMouseOver(){
    alert("para k uper mouse lekar aaye ho");
  }


  function handleInputChange(){
    // console.log("input men value chnage hui h");
    console.log("Value till now:",e.target.value);
  }


  function handleSubmit(e){
    e.preventDefault();
    alert("form submit kar dun kya");
  }

  return (
      <div>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange}/>
        <button type='submit'>
          submit
        </button>
      </form>



{/* 
      <p onMouseOver={handleMouseOver} style={{
        border:"1px solid black"}}>
        i am a para
      </p>

      <button onClick={handleClick}>
       Click me
      </button>
 */}



    </div>
  )
}


export default App
