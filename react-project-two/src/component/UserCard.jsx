import React from "react";
// import Fahadimg from "../assets/Fahad Img.jpeg";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style} >
      <p id="user-name">{props.name}</p>
      {/* <img id="user-img" src={Fahadimg} alt="love" /> */}
      <p id="user-disc">{props.des}</p>
    </div>
  );
};

export default UserCard;
