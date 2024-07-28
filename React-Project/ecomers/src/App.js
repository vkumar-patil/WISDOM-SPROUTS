import "./App.css";
import Navbar from "./Componant/Navbar";
import Login from "./Componant/LogIn ";
import Register from "./Componant/Register";
import { Route, Routes } from "react-router-dom";
import Productdetail from "./Componant/Productdetail";
import Cart from "./Cart";
import FechProduct from "./Componant/FechProduct";
import SerchItem from "./Componant/SerchItem";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Serch/:term" element={<SerchItem />}></Route>
        <Route path="/Product/:id" element={<FechProduct />}></Route>
        
        

        <Route path="/Productdetail" element={<Productdetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
