
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
   return (
    <>
      {data.map((item) => (
        <div className="container">
          <div className="card col-4">
            <div className="row-6">
              <img className="card-img-top" src={item.image} alt="Card  cap" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.discription} </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                {/* <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a> */}
              </div>
            </div>
          </div>{" "}
        </div>
      ))}
     </> )
}
export default Product;