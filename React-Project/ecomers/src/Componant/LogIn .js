import { useState } from "react";
import { json, Navigate, useNavigate } from "react-router-dom";

import "./Login.css";
function LogIn() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState();
  const Navigate = useNavigate();
  const handleClick = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (Email === userData?.Email && Password === userData?.Password) {
      setMessage = "successful";
    } else {
      setMessage = "invalid Input";
    }
  };

  return (
    <div className="formbody">
      <form>
        <h2 className="heading">Log In</h2>
        <h4 className="lable">Email</h4>
        <input type="email" placeholder="email" id="email" name="email"></input>
        <br></br>
        <h4 className="lable">Password</h4>
        <input
          type="password"
          placeholder="passward"
          id="passward"
          name="passward"
        ></input>
        <br></br>
        <input type="submit" id="submit" name="submit"></input>
      </form>
    </div>
  );
}
export default LogIn;
