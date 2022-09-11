import React from "react";
import bucket from "../../assets/bucket.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import './Heder.css';
export default function Header() {
  return (
    <div className="container">
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
        <div>
          <img src={search} alt="" />
          <input type="text" placeholder="Search" />
          <img src={bucket} alt="" />
        </div>
      </nav>
    </div>
  );
}
