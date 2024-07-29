import "../../css_style/navbar.css";
import logo from '../../assets/logo.png'
import card from "../../assets/card.png";
import search from "../../assets/search.png";
import setting from "../../assets/setting.png";

function Navbar() {
  return (
    <div className="containernavbar">
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            HOME
            <ul className="submenu">
              <li>New Demos</li>
              <li>Clothing</li>
              <li>Basics</li>
              <li>Electronic</li>
              <li>Furniture</li>
              <li>Vegetables</li>
              <li>Watch</li>
              <li>Lights</li>
              <li>Goggles</li>
              <li>Shoes</li>
              <li>Bags</li>
              <li>Flowers</li>
            </ul>
          </li>
          <li>SHOP</li>
          <li>PRODUCT</li>
          <li>FEATURE</li>
          <li>PAGES</li>
        </ul>

        <div className="search-box">
          {/* <input type="button" placeholder="Search" /> */}
          <img src={search} alt="search box" type="button" placeholder="Search" />
        </div>
        <div className="setting">
          {/* <input type="button" placeholder="setting" /> */}
          <img src={setting} alt="setting" type="button" placeholder="setting" />
        </div>
        <div className="card">
          {/* <input type="button" placeholder="card" name="" id="" /> */}
          <img src={card} alt="card" type="button" placeholder="card" name="" id="" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
