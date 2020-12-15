import React, { useReducer } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../../firebase.config/firebase.config";
// import reducer, { initialState } from "../reducer";

const Header = () => {
  const [state, dispatch] = useStateValue();
  // console.log(state.basket);
  // const [state, dispatch] = useReducer(reducer, initialState);

  const handleAuthentication = () => {
    if (state.user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo img-fluid"
          alt="amazon"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!state.user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header__optionLineOne">
              Hello {!state.user ? "Guest" : state.user.email}
            </span>
            <span className="header__optionLineTwo">
              {state.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            {/* <span className="header__optionLineTwo header__basketCount">{state.basket?.length}</span> */}
            <span className="header__optionLineTwo header__basketCount">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
