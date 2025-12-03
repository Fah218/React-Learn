import { useEffect, useState } from 'react'
import './App.css'

function App() {
    // const [count, setCount]= useState(0);
    // const [total, setTotal]= useState(1);



    //first -> side-effect function
    // second -> clean up function 
    // third -> comma separated dep list 



    // variation:1
    //runs on every render 

    // useEffect(() => {
    //   alert("i will run on each render")
    // })



    // variation:2
    // that runs on only first render 

    // useEffect(() => {
    //   alert("i will run on only first render")
    // }, [])
    



    // variation:3

    // useEffect(() => {
    //  alert("i will run everytime when count is updated")
    // }, [count])


    
    // variation 4:
    // multiple dependencies

    // useEffect(() => {
    //   alert("i will run everytime when count/total is updated")
    // }, [count,total])



    // variation :5
    // add up a cleanup function

    // useEffect(() => {
    //   alert("count is upadated")
    //   return () => {
    //    alert("count is unmounted for UI")
    //   }
    // }, [count])
    

    





    // function handleClick(){
    //   setCount(count+1);
    
    // }


    // function handleClickTotal(){
    //   setTotal(total+1);
    // }

  

  return (
    
      <div>
      




        {/* <button onClick={handleClick}>
        update count
        </button>
        <br/>
        Count is: {count}

     <br/>
      <button onClick={handleClickTotal}>
        update Total
        </button>
        <br/>
        Total is: {total}
       */}


      </div>
  )
}

export default App
