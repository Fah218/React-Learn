import UserCard from "./component/UserCard";

function App() {
  return (
    <div className="container">
      <UserCard name="Fahad" des="desc1" style={{"border-radius":"10px"}}/><br></br>
      <UserCard name="Kartikey" des="desc2"/><br></br>
      <UserCard name="Love babbar" des="desc3"/><br></br>
      <UserCard name="Rana" des="desc3"/><br></br>
    </div>
  );
}

export default App;
