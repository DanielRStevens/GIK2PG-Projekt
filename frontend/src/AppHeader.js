import './AppHeader.css';
import {BsFillCartFill} from "react-icons/bs";
import {BsFillQuestionCircleFill} from "react-icons/bs";
 function AppHeader() {
  return (
      <header class="App-header">
        <div class="Searchbar">
            <input type="text" placeholder="Search..." class="Searchbar-input"></input>
            <button>Search</button>
        </div>
        <p class="Login-prompt"><a href="#Login">Log in</a> or <a href="#Register">Register</a></p>
        <a href="#Cart" class="Cart-icon">
            <BsFillCartFill/>
            <p class="Cart-amount">0</p>
        </a>
        <a href="#Help"><BsFillQuestionCircleFill/></a>
      </header>
  );
}

export default AppHeader;
