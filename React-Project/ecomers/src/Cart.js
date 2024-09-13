import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const [Productprice, setProductprice] = useState(0);
  //const [count, setcount] = useState(0);
  // const handleIncrement = (id) => {
  //   const updatedCart = cart.map((product) =>
  //     product.id === id
  //       ? { ...product, quantity: product.quantity + 1 }
  //       : product
  //   );
  //   setCart(updatedCart);
  // };
  //const handleDecreement = (id) => {};
  useEffect(() => {
    const totalprice = () => {
      let total = 0;
      cart.forEach((element) => {
        total += element.price;
      });
      setProductprice(total.toFixed(2));
    };
    totalprice();
  }, [cart]);
  const handelDelete = (id) => {
    const updatecard = cart.filter((element) => element.id !== id);
    setCart(updatecard);
  };
  const handelClear = () => {
    setCart([]);
  };
  return (
    <>
      <div className="container CretMain">
        <div className="row">
          <div className="col-md-12">
            {cart.length === 0 ? (
              <div>
                <h1>Your Cart is Emty</h1>
                <Link to={"/"} className="btn btn-warning">
                  Continue Showping
                </Link>
              </div>
            ) : (
              <div className="col col-md-4  cartFinel">
                <p>Product Count : {cart.length}</p>
                {/* <p>
                  Product Count:{" "}
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </p>{" "} */}
                {/* Display total quantity */}
                <p>
                  Total Price:<i className="fa-solid fa-indian-rupee-sign"></i>
                  {Productprice}
                </p>
                <button className="btn btn-warning">Check Out</button>
                <button
                  onClick={() => handelClear()}
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
                <div className="card mb-12" style={{ width: "600px" }}>
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
                              onClick={() => handelDelete(product.id)}
                            >
                              Delete
                            </button>
                            {/* <button
                              onClick={() => handleDecreement(product.id)}
                            >
                              -
                            </button>
                            {product.quantity}
                            <button onClick={() => handleIncrement(product.id)}>
                              +
                            </button> */}
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
      </div>
    </>
  );
};

export default Cart;
