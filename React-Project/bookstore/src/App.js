import { Routes, Route } from "react-router-dom";
import "./App.css";
import Bookdetail from "./Bookdetail";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
//import ProductRating from "./Star&reviw";
function App() {
  return (
    <><Navbar/>
      {/* <ProductRating></ProductRating> */}
      <Routes>
        <Route path="/Bookdeta/:id" element={<Bookdetail />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
