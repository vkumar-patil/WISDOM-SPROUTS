import Image from "./Assets/Books610x315.jpg";
import React from "react";
import { Bookdata } from "./Bookdata";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//import { orange } from "@mui/material/colors";
function Homepage() {
  const { id } = useParams();
  return (
    <div className="container" style={{ border: "black solid 1px " }}>
      <div className="row">
        {Bookdata.map((element) => (
          <div
            className="card card-col-4 "
            style={{
              width: "28rem",
              margin: "20px",
            }}
          >
            <img
              src={Image}
              className="card-img-top"
              alt="..."
              style={{ height: "200px" }}
            />
            <div className="card-body" key={id}>
              <h5 className="card-title">{element.name}</h5>
              <button className="btn btn-warning">
                &#x20B9;{element.price}
              </button>
              <Link to={`/Bookdeta/ ${element.id}`} className="btn ">
                <button className="btn btn-primary">Detail</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
