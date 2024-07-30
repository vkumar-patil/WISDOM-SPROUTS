import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Items } from "./Datas";
//import Productdetail from "./Productdetail";
import "./Fechdata.css";
const FechProduct = ({ cart, setCart }) => {
  // const addToCart = (id, price, title, description, image) => {
  //   const obj = { id, price, title, description, image };
  //   setCart([...cart, obj]);
  //   console.log(cart);
  // };
  const { id } = useParams();
  const [product, setProduct] = useState({});
  //const [reletedProduct, setReletedproduct] = useState([]);
  useEffect(() => {
    const filterproduct = Items.filter((product) => product.id == id);
    //console.log(filterproduct);
    setProduct(filterproduct[0]);
    // const reletedProduct = Items.filter((p) => p.category === product.category);
    //console.log(reletedProduct[0]);
    // setReletedproduct(reletedProduct);
  }, [id]);

  return (
    <div className="container fechcontainer" style={{ display: "flex" }}>
      <div className="img">
        <img className="card-img-top" src={product.image} alt="Card  cap" />
      </div>
      <div className="detaildata">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <span>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {product.price}
        </span>
        {/* <span>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {product.rating}
          console.log(type off (product))
        </span> */}
        <p>
          <button
            className="btn btn-warning"
            // onClick={() =>
            //   addToCart(
            //     product.id,
            //     product.price,
            //     product.title,
            //     product.description,
            //     product.image
            //   )
            // }
          >
            Add Cart
          </button>
          <butoon className="btn btn-success">Buy</butoon>
        </p>
      </div>
      {/* <Productdetail item={reletedProduct} /> */}
    </div>
  );
};

export default FechProduct;
