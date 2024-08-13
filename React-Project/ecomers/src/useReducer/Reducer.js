//import { type } from "@testing-library/user-event/dist/type";
//import React from "react";

const initialstate = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE TOTAL PRICE":
      const total = cart.reduce(acc, (product) => acc + product.price, 0);
      return total;
      default :
      return state
  }
}

export { initialstate, reducer };
