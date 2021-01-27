const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3>{cart.text}</h3>
      <p>{cart.day}</p>
    </div>
  );
};

export default Cart;
