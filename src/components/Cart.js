import { FaTimes } from 'react-icons/fa';

const Cart = ({ cart, onDelete, onToggle }) => {
  return (
    <div
      className={`cart ${cart.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(cart.id)}
    >
      <h3>
        {cart.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(cart.id)}
        />
      </h3>
      <p>{cart.day}</p>
    </div>
  );
};

export default Cart;
