import { useParams } from "react-router-dom";
import { Bookdata } from "./Bookdata";
import bookimage from "./Assets/OIP (1).jpeg";
import { useEffect, useState } from "react";
import React from "react";
import ProductRating from "./Star&reviw";

function Bookdetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const filterproduct = Bookdata.filter((element) => element.id == id);
    setProduct(filterproduct[0]);
  }, [id]);
  //console.log(product);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="card" style={{ marginTop: "20px" }}>
          <img
            src={bookimage}
            className="card-img-top"
            alt="..."
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.Description}</p>
            <button className="btn btn-success"> BUY</button>
            <button className="btn btn-warning">&#x20B9;{product.price}</button>
          </div>
        </div>
        <div>
          <ProductRating />
        </div>
      </div>
    </>
  );
}

export default Bookdetail;
