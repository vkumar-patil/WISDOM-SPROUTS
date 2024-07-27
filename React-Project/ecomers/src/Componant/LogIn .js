import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
function LogIn() {
  const [Input, setInput] = useState({ Email: "", Password: "" });

  const Navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    if (
      Input.Email === userData.Email &&
      Input.Password === userData.Password
    ) {
      localStorage.setItem("Logdin", true);
      Navigate("/fechproduct");
    } else {
      alert("invalid Input");
    }
  };

  return (
    <div className="formbody">
      <form onSubmit={handleLogin}>
        <h2 className="heading">Log In</h2>
        <h4 className="lable">Email</h4>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="Email"
          value={Input.Email}
          onChange={(e) =>
            setInput({ ...Input, [e.target.name]: e.target.value })
          }
        ></input>
        <br></br>
        <h4 className="lable">Password</h4>
        <input
          type="password"
          placeholder="passward"
          id="passward"
          name="Password"
          value={Input.Password}
          onChange={(e) =>
            setInput({ ...Input, [e.target.name]: e.target.value })
          }
        ></input>
        <br></br>
        <input type="submit" id="submit" name="submit"></input>
      </form>
    </div>
  );
}
export default LogIn;
