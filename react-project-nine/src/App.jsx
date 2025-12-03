import './App.css'
import { createContext, useState} from 'react'
import ChildA from './components/ChildA';


// step 1: create context
const UserContext= createContext();

// step 2: wrap all the childs inside a provider
// step 3: pass value
// step 4: consumer k andr jaakr consume krlo

const ThemeContext=createContext();


function App() {
  // const[user,setUser]=useState({name:"fahad"});
  const [theme,setTheme]=useState('light')

  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div id='container' style={{background:theme==='light'?"beige":"black"}}>
    <ChildA/>
    </div>  
    
    </ThemeContext.Provider>





    {/* <UserContext.Provider value={user}>
     <ChildA/>
    </UserContext.Provider> */}
     
    </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
