//import { type } from "@testing-library/user-event/dist/type";
//import React from "react";
import Cart from "../Cart";
const initialstate =  0 ;

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE TOTAL PRICE":
      const total = Cart.reduce(action, (product) => action + product.price, 0);
      return total;
    default:
      return state;
  }
}

export { initialstate, reducer };
