import React from "react";
import "../../styles/Header.css";
import { RxCross1 } from "react-icons/rx";

export default function Header({ hamburgerMenu, setHamburgerMenu }) {
  return (
    <>
      <header id="header-full">
        <div className="logo">
          <img alt="" src="./logo.svg" />
        </div>
        <nav>
          <ul>
            <li>Product</li>
            <li>Services</li>
            <li>Article</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="cart-and-profile">
          <div>
            <img alt="" src="./bag.svg" />
          </div>
          <div>
            <img alt="" src="./user.svg" />
          </div>
        </div>
      </header>
      <header id="header-responsive">
        <div className="logo">
          <img alt="" src="./logo.svg" />
        </div>
        <div className="hamburger-menu">
          <div>
            <img alt="" src="./bag.svg" />
          </div>
          <div>
            <img alt="" src="./user.svg" />
          </div>
          <div
            onClick={() => {
              setHamburgerMenu((prev) => !prev);
              console.log("Hamburger changed!");
            }}
          >
            {hamburgerMenu ? (
              <RxCross1 color="black" fontSize="40px" />
            ) : (
              <img alt="" src="./menu.svg" />
            )}
          </div>
        </div>
      </header>
    </>
  );
}
