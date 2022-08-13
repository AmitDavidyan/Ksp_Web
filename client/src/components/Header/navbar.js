import React from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
            <img
              src="https://www.couponnearme.com/wp-content/uploads/2020/09/KSP-COUPON.png"
              width={180}
              height={115}
            ></img>
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <section className="navbar">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/products" className="navbar-item">
                Products
              </Link>
              <Link to="/Basket" className="navbar-item">
                Cart
              </Link>
            </section>
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
    </section>
  );
}

export default Header;
