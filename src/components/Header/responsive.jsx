import React from "react";

export default function ResponsiveNav({ hamburgerMenu }) {
  return (
    <nav id="responsive-nav" className={hamburgerMenu && "height"}>
      <ul>
        <li>Product</li>
        <li>Services</li>
        <li>Article</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
}
