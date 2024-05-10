import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import ChekOut from './pages/ChekOut';

function App() {
  const location = useLocation();
  const [hideFooter, setHideFooter] = useState(false);

  // Hide footer when the path is '/checkout'
  useState(() => {
    setHideFooter(location.pathname === '/checkout' );
  }, [location.pathname]);

  return (
    <div className="App w-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<ChekOut />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
