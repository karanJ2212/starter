import React from "react";
import CartItem from "../CartItems/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/CartSlice";
import { clearall } from "../../features/cart/CartSlice";

export default function CartContainer() {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleRemove = () => {
    console.log("handleremove");
    dispatch(clearCart());
  };
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearall())}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
}
