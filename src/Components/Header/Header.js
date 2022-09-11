import React from "react";
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <div>
      <nav>
        <div>
          <img src={logo} alt="Image-logos" />
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Service</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </div>
  );
}
