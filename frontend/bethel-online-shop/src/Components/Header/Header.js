import React from 'react';
import './Header.css';
import logoImage from '../Asset/images/Bethel-logo.png'; // Update with the correct path to your image

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="" className="logo-image" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Category</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cart">
        <a href="/cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">0</span>
        </a>
      </div>
    </header>
  );
};

export default Header;