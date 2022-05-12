import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Redux/CartModalSlice/cartModalSlice";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "../ModalCart/ModalCart.scss";
import { NavLink } from "react-router-dom";
import CartItems from "../CartItems/CartItems";
export default function ModalCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className="modalBackgraund">
      <div className="modalContainer">
        <div className="cartTitle">
          <h2>Shopping Cart</h2>
        </div>
        {cart.cartItems.length === 0 ? (
          <div className="cartBody">
            <h5>Your cart is currently empty.</h5>

            <RemoveShoppingCartIcon className="icon" />

            <button>
              <NavLink
                onClick={() => {
                  dispatch(closeModal());
                }}
                className={"shopNow"}
                to={"/"}
              >
                Shop Now
              </NavLink>
            </button>
          </div>
        ) : (
          <CartItems />
        )}

        <span
          className="close"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          X
        </span>
      </div>
    </div>
  );
}
