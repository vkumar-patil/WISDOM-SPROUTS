import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
const FechProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const filterproduct = items.filter((product) => product.id === id);
    setProduct(filterproduct[0]);
  }, [id]);
  return (
    <div>
      <div className="col-lg-3 text-center">
        <div>
          <img className="card-img-top" src={product.image} alt="Card  cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.descriptio} </p>
          <p>
            <span className="price">
              <i class="fa-solid fa-indian-rupee-sign"></i>
              {product.price}
            </span>
            <span className="rating">
              <i className="fa-solid fa-star"></i>
              {product.rating.rate}
            </span>
          </p>
          <p>
            <button className="btn btn-warning">Add Cart</button>
            <butoon className="btn btn-success">Buy</butoon>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FechProduct;
