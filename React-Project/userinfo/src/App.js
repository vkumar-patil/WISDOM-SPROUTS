import "./App.css";
import Userlist from "./Userlist";
import Userdetail from "./Userdetail";
//import Router from "react-router-dom";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Userlist></Userlist>

      <Routes>
        <Route path="/fechUserdetail/:id" element={<Userdetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
