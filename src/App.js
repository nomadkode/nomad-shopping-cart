import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Carts from './components/Carts';
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

  // Fetch Cart
  const fetchCart = async (id) => {
    const res = await fetch(`http://localhost:5000/carts/${id}`);
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
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchCart(id);
    const updateCart = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/carts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateCart),
    });

    const data = await res.json();

    setCarts(
      carts.map((cart) =>
        cart.id === id ? { ...cart, reminder: data.reminder } : cart
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddCart(!showAddCart)}
          showAdd={showAddCart}
        />
        <Route
          path="/"
          exact
          render={() => (
            <>
              {showAddCart && <AddCart onAdd={addCart} />}
              {carts.length > 0 ? (
                <Carts
                  carts={carts}
                  onDelete={deleteCart}
                  onToggle={toggleReminder}
                />
              ) : (
                'No cart to show'
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
