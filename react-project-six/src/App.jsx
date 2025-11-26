import './App.css'
import{ useState} from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const[isLoggedIn,setLoggedIn]=useState(true);
  
  if(!isLoggedIn){
    return (
      <LoginBtn/>
    )
  }



  return(
    <div>
      <h3>Welcome everyone to codehelp web d course</h3>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )




  // return(
  //   <div> 
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )




//   if(isLoggedIn){
//   return (
//       <LogoutBtn/>
//   )
// }
// else{
//   return(
//    <LoginBtn/>
//   )
// }
}
export default App
