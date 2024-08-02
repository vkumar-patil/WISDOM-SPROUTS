import { Routes, Route } from "react-router-dom";
import "./App.css";
import Bookdetail from "./Bookdetail";
import Homepage from "./Homepage";
function App() {
  return (
    <>
      <Homepage></Homepage>
      <Routes>
        <Route path="/Bookdetail/:id" element={<Bookdetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
