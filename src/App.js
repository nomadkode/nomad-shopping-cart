import { useState, useEffect } from 'react';
import Carts from './components/Carts';
import Header from './components/Header';
import AddCart from './components/AddCart';

const App = () => {
  const [showAddCart, setShowAddCart] = useState(false);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      const cartsFromServer = await fetchCarts();
      setCarts(cartsFromServer);
    };

    getCarts();
  }, []);

  // Fetch Carts
  const fetchCarts = async () => {
    const res = await fetch('http://localhost:5000/carts');
    const data = await res.json();

    return data;
  };

  // Add Cart Function
  const addCart = async (cart) => {
    const res = await fetch('http://localhost:5000/carts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(cart),
    });

    const data = await res.json();

    setCarts([...carts, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;

    // const newCart = { id, ...cart };
    // setCarts([...carts, newCart]);
  };

  // Delete Cart Function
  const deleteCart = async (id) => {
    await fetch(`http://localhost:5000/carts/${id}`, {
      method: 'DELETE',
    });

    setCarts(carts.filter((cart) => cart.id !== id));
  };

  // Reminder Toggle Cart Function
  const toggleReminder = (id) => {
    setCarts(
      carts.map((cart) =>
        cart.id === id ? { ...cart, reminder: !cart.reminder } : cart
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddCart(!showAddCart)}
        showAdd={showAddCart}
      />
      {showAddCart && <AddCart onAdd={addCart} />}
      {carts.length > 0 ? (
        <Carts carts={carts} onDelete={deleteCart} onToggle={toggleReminder} />
      ) : (
        'No cart to show'
      )}
    </div>
  );
};

export default App;
