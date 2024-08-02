import Image from "./Assets/Books610x315.jpg";
import React from "react";
import { Bookdata } from "./Bookdata";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div
      className="card card-row "
      style={{ width: "28rem", margin: "10px", border: "black 2px" }}
    >
      {Bookdata.map((element) => (
        <>
          <img
            src={Image}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{element.name}</h5>
            <p className="card-text">{element.Description}</p>
            <Link to={`/Bookdetail${element.id}`} className="btn btn-success">
              <button className="btn btn-primary">Detail</button>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}

export default Homepage;
