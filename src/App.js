import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App w-full">
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:id" element={<ProductDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;