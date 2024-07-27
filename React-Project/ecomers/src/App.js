import "./App.css";
import Navbar from "./Componant/Navbar";
import Login from "./Componant/LogIn ";
import Register from "./Componant/Register";
import { Route, Routes } from "react-router-dom";
import Productdetail from "./Componant/Productdetail";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <br />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/fechproduct" element={<Productdetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
