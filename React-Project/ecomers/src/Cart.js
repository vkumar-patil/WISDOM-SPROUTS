import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import ReducerComponant from "./useReducer/ReducerComponant";
//import { useParams } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  //const { id } = useParams;
  const [Productprice, setProductprice] = useState(0);
  // const [Product, setproduct] = useState("");
  // useEffect(() => {
  //   const totalprice = () => {
  //     let total = 0;
  //     cart.forEach((element) => {
  //       total += element.price;
  //     });
  //     setProductprice(total);
  //   };
  //   totalprice();
  // }, [cart]);
  // const handelClick = (id) => {
  //   const updatecard = cart.reducer((item) => item.id !== id);
  //   setCart(updatecard);
  // };

  return (
    <>
      <div className=" CretMain">
        <div>
          {cart.length == 0 ? (
            <div>
              <h1>Your Cart is Emty</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Showping
              </Link>
            </div>
          ) : (
            <div className="  cartFinel">
              <p>Product Count : {cart.length}</p>
              <p>
                Total Price=
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {ReducerComponant.productPrice}
              </p>
              <button className="btn btn-warning">Check Out</button>
              <button
                // onClick={handalClick}
                className="btn btn-warning"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        {cart.map((product) => {
          return (
            <>
              <div className="card cartdiv mb-3 " style={{ width: "540px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      alt="/"
                      style={{ height: "150px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.discription}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span className="price">
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                            {product.price}
                          </span>
                          <button className="btn btn-success">Buy</button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handelClick(product.id)}
                          >
                            Delete
                          </button>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
