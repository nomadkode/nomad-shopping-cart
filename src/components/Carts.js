import Cart from './Cart';

const Carts = ({ carts, onDelete, onToggle }) => {
  return (
    <>
      {carts.map((cart) => (
        <Cart
          key={cart.id}
          cart={cart}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Carts;
