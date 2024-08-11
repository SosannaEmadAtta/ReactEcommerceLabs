import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementItemCount, decrementItemCount } from '../../store/cartslice';

import './cart.css';

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {totalCount === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Remove</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="cart-item">
                  <td className="cart-item-description">
                    <img src={item.thumbnail} alt={item.title} />
                    <div>
                      <h2>{item.title}</h2>
                      <p>Product Code: {item.id}</p>
                    </div>
                  </td>
                  <td className="cart-item-quantity">
                    <button onClick={() => dispatch(incrementItemCount(item))}>+</button>
                    <span>{item.count}</span>
                    <button onClick={() => dispatch(decrementItemCount(item))}>-</button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(removeItem(item))} className="remove-item-btn">×</button>
                  </td>
                  <td className="cart-item-price">£{(item.price * item.count).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <p>Total: £{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
