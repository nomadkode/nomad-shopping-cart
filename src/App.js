import { useState } from 'react';
import Carts from './components/Carts';
import Header from './components/Header';

const App = () => {
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
      <Header />
      {carts.length > 0 ? (
        <Carts carts={carts} onDelete={deleteCart} onToggle={toggleReminder} />
      ) : (
        'No Cart To Show'
      )}
    </div>
  );
};

export default App;
