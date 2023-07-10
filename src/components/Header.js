import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

import Hamburger from "../assets/icon_menu.png";
import OpenedHamburger from "../assets/icon_menu_open.png";

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const resetHamburger = () => {
    setIsHamburgerOpen(false);
  };

  const onHamburgerClick = () => {
    setIsHamburgerOpen((prev) => !prev);
  };

  return (
    <header className="header container">
      <Link to="/home">
        <img
          src={require("../assets/Logo.png")}
          alt="logo"
          className="logo-image"
        />
      </Link>

      <img
        src={isHamburgerOpen ? OpenedHamburger : Hamburger}
        alt="mobile navigation icon"
        className="hamburger-icon top-nav-mobile"
        onClick={onHamburgerClick}
      />

      {isHamburgerOpen && (
        <Nav
          className="hamburger-menu top-nav-mobile full-width"
          resetHamburger={resetHamburger}
        />
      )}
      <Nav className="top-nav" />
    </header>
  );
}

export default Header;
