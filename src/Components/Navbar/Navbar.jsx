import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.webp';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Shopify Logo" height="50px" />
        <p>Shopify</p>
      </div>

     
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link to="/" className="nav-link">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" className="nav-link">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" className="nav-link">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" className="nav-link">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

     
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-btn">Login/Signup</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" className="cart_icon" height="40px" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
