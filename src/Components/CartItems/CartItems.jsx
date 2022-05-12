import React, { useEffect } from "react";
import "../CartItems/CartItems.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCard,
  closeModal,
  getTotals,
  minusProd,
} from "../../Redux/CartModalSlice/cartModalSlice";
export default function CartItems() {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItem, dispatch]);

  return (
    <div className="cartContiner">
      {cartItem.cartItems?.map((item) => {
        return (
          <form key={item.id} className="prodCarts">
            <div className="cartBlock">
              <div className="imgTitle">
                <div className="cartImg">
                  <img src={item.image} />
                </div>
                <div className="prodsTitle">
                  <h2>{item.title}</h2>
                </div>
              </div>
              <div className="cartCount">
                <span
                  onClick={() => {
                    dispatch(minusProd(item));
                  }}
                  className="minus"
                >
                  <p>-</p>
                </span>
                <div className="cartCountSpan">
                  <p>{item.cartQuantity}</p>
                </div>
                <span
                  onClick={() => {
                    dispatch(addItemToCard(item));
                  }}
                  className="plus"
                >
                  <p>+</p>
                </span>
              </div>
              <div className="money">
                <span>${item.cartQuantity * item.price}</span>
              </div>
            </div>
            <hr />
          </form>
        );
      })}
      <div className="cartFooter">
        <div className="footerText">
          <p>Shipping & taxes calculated at checkout</p>
        </div>
        <div className="totalPrice">
          <p>Subtotal $ {cartItem.cartTotalAmount}</p>
        </div>
      </div>
      <div className="cartFootBtn">
        <button onClick={()=>{dispatch(closeModal())}} className="cntBtn">CONTINUE SHOPPING</button>
        <button className="chekBtn">CHEK OUT</button>
      </div>
    </div>
  );
}
