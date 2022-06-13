import React from "react";
import "../styles/navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <Link to="/">
          <span className="my_shop" onClick={() => setShow(true)}>
            My Shoping
          </span>
        </Link>
        <div className="cart">
          <Link to="/cart">
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
