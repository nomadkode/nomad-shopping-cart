import { useState } from 'react';
import Carts from './components/Carts';
import Header from './components/Header';
import AddCart from './components/AddCart';

const App = () => {
  const [showAddCart, setShowAddCart] = useState(false);

  const [carts, setCarts] = useState([
    {
      id: 1,
      text: 'Keyboard',
      day: 'Jan 1st at 1:00pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Mouse',
      day: 'Jan 2nd at 9:00am',
      reminder: false,
    },
    {
      id: 3,
      text: 'Laptop',
      day: 'Jan 2nd at 3:00pm',
      reminder: false,
    },
  ]);

  // Add Cart Function
  const addCart = (cart) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newCart = { id, ...cart };
    setCarts([...carts, newCart]);
  };

  // Delete Cart Function
  const deleteCart = (id) => {
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
