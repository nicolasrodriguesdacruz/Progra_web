import React from 'react';

const CartPopUp = ({ closeCart }) => {
  return (
    <div className="popup">
      {/* Cart UI goes here */}
      <button onClick={closeCart}>Close Cart</button>
    </div>
  );
};

export default CartPopUp;
