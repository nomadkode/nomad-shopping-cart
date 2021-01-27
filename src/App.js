import { useState } from 'react';
import Header from './components/Header';
import Carts from './components/Carts';

function App() {
  const [carts, setCarts] = useState([
    {
      id: 1,
      text: 'Keyboard',
      day: 'Jan 1st at 1:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Mouse',
      day: 'Jan 2nd at 9:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Laptop',
      day: 'Jan 2nd at 3:00pm',
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Carts carts={carts} />
    </div>
  );
}

export default App;
