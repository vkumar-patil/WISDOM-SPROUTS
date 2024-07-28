import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=20`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-lg-3 text-center">
            <Link to={`/Product/${item.id}`}>
              <img className="card-img-top" src={item.image} alt="Card  cap" />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.descriptio} </p>
              <p>
                <span className="price">
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  {item.price}
                </span>
                <span className="rating">
                  <i className="fa-solid fa-star"></i>
                  {item.rating.rate}
                </span>
              </p>
              <p>
                <button className="btn btn-warning">Add Cart</button>
                <butoon className="btn btn-success">Buy</butoon>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Product;
