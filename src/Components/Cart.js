import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom'
import Hoc from "../Hocs/Hoc";

import {
  removeFromCart,
  clearCart,
  increseQuantity,
  decreaseQuantity,
} from '../features/cartSlice';

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="col-md-10 mx-auto">
      <h1 className="text-center mt-4">Cart</h1>
      <button
        className="btn btn-danger mt-4 mb-4"
        onClick={() => dispatch(clearCart())}
      >
        Clear cart
      </button>
      <table className="table">
        {cart.cart.map((product) => (
          <div className="card">
            <div className="card-body mx-auto">
              <h4>{product.title}</h4>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Quantity: {product.quantity} Kg
              </p>
              <img
                className="img-thumbnail mt-2 mb-2"
                style={{
                  width: "200px",
                  height: "200px",
                }}
                src={product.image}
                alt={product.title}
              />
              <p>Price: {product.Price * product.quantity}</p>
              <p>{product.Desc}</p>
              <div>
                <button
                  className="btn btn-danger mr-4 quanty"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  remove
                </button>
                <button
                  className="btn btn-primary mr-4 quanty"
                  onClick={() => dispatch(increseQuantity(product.id))}
                >
                  Increse +
                </button>
                <button
                  className="btn btn-primary quanty"
                  disabled={product.quantity === 1}
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                >
                  Decrese -
                </button>
              </div>
            </div>
          </div>
        ))}
      </table>

      <h4 className="mx-auto text-center mt-4">
        Total:
        {parseFloat(
          cart.cart.reduce((total, product) => {
            return total + product.Price * product.quantity;
          }, 0)
        ).toFixed(2)}
      </h4>
      <NavLink className="btn btn-primary w-50 CheckOut py-2" to='/Checkout'>CheckOut</NavLink>
    </div>
    
  );
};

export default Hoc(Cart);