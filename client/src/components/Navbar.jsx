import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="container" style={{alignItems:'center'}}>
          <div className="logo-brand">
            <NavLink to="/">Snappy Services</NavLink>
          </div>

          <nav className={isMenuOpen ? "nav-open" : ""}>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" activeClassName="active">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" activeClassName="active">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" activeClassName="active">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="hamburger"></span>
          </div>
        </div>
      </header>
    </>
  );
};
