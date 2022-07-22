import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="nav-toggle"
        />

        <label for="nav-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                About
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/portfolio" className="navigation__link">
                Portfolio
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/contact" className="navigation__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
