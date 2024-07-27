import React, { useState, useEffect } from "react";

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
    <>
      {data.map((item) => (
        <div className="container">
          <div className="card col-6">
            <div className="row-1">
              <img className="card-img-top" src={item.image} alt="Card  cap" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description} </p>
                <p>
                  <span>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    {item.price}
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    {item.rating.rate}
                  </span>
                </p>
                <p>
                  <button className="btn btn-primary">Add Cart</button>
                  <butoon className="btn btn-success">Buy</butoon>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Product;
