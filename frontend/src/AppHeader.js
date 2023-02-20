import './AppHeader.css';
import {BsFillCartFill} from "react-icons/bs";
import {BsFillQuestionCircleFill} from "react-icons/bs";
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { StoreContext } from './screens/StoreContext';
 function AppHeader() {
  const {state} = useContext(StoreContext);
  const {cart} = state;
  return (
      <header className="App-header">
        <div className="Searchbar">
            <input type="text" placeholder="Search..." className="Searchbar-input"></input>
        </div>
        <div className="headerRight"> 
          <a href="#Cart" className="Cart-icon">
            Cart {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">{cart.cartItems.reduce((a,c) => a + c.quantity, 0)}</Badge>
            )}
            <BsFillCartFill/>
            <p className="Cart-amount">0</p>
            
          </a>
          <div className='Spacer'></div>
          <a href="#Help"><BsFillQuestionCircleFill/></a>
          <div className='Spacer'></div>
          <div className="Login"> 
            <p className="Login-prompt"> <a href="#Login">Log in</a> or <a href="#Register">Register</a></p>
          </div>
        </div>
      </header>
  );
}

export default AppHeader;
