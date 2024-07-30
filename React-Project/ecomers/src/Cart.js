import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className=" CretMain">
        {/* <div>
          if(cart.length == 0 ?)
          {
            <div>
              <h1>Your Cart is Emty</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Showping
              </Link>
            </div>
          }
        </div> */}

        {cart.map((product) => {
          return (
            <>
              <div className="card mb-3" style={{ width: "540px" }}>
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
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            {product.price}
                          </span>
                          <butoon className="btn btn-success">Buy</butoon>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <div className="  cartFinel">
          <p>Product Count= 0</p>
          <p>
            Total Price=<i class="fa-solid fa-indian-rupee-sign"></i>
          </p>
          <button className="btn btn-warning">Check Out</button>
          <button onClick={() => (setCart = "")} className="btn btn-warning">
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
