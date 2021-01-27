import Cart from './Cart';

const Carts = ({ carts }) => {
  return (
    <>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
    </>
  );
};

export default Carts;
