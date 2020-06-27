import React from 'react';
import './App.css';
import { ItemList } from './components/ItemList';
import { Cart } from './components/Cart';
import { CartProvider } from './Context/CartContext';
function App() {
  return (
    <CartProvider>
      <div>
        <Cart />
        <ItemList />
      </div>
    </CartProvider>
  );
}

export default App;
