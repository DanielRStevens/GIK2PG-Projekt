import "./AppHeader.css";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Badge from "react-bootstrap/esm/Badge";
import { useContext } from "react";
import { StoreContext } from "./StoreContext";
import logo from "./images/dalavintage-cropped.png";
import LoggedInUser from "./components/LoggedInUser";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const { state } = useContext(StoreContext);
  const { cart } = state;
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/');
  }

  return (
    <header className="App-header">
      <a href="/">
        <img
          src={logo}
          alt="DalaVintage Vintage Bookstore"
          className="App-headerlogo"
        />
      </a>
      <div className="Searchbar">
        <input
          type="text"
          placeholder="Search..."
          className="Searchbar-input"
        ></input>
      </div>
      <div className="headerRight">
        <a href="/cart" className="Cart-icon">
          Cart{" "}
          <BsFillCartFill />
          {cart.cartItems.length > 0 && (
            <Badge pill bg="danger">
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </Badge>
          )}
        </a>
        <div className="Spacer"></div>
        <a href="#Help">
          <BsFillQuestionCircleFill />
        </a>
        <div className="Spacer"></div>
        <div className="Login">
          {isLoggedIn ? (
            <div>
              <LoggedInUser />
              <a
                className="Login-prompt"
                onClick={handleLogout}
              >
                Log out
              </a>
            </div>
          ) : (
            <p className="Login-prompt">
              <a href="/signin">Log in</a> or <a href="/register">Register</a>
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
