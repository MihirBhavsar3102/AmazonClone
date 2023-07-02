import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart }, user] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* Logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__SearchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* Cart icon with number */}
      {/* 4th link */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionCart">
          {/*Shopping Basket icon*/}
          <ShoppingCartIcon />
          {/*Number of items in the cart*/}
          <span className="header__optionLineTwo header__cartCount">
            {cart?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
