import './AppHeader.css';
import {BsFillCartFill} from "react-icons/bs";
import {BsFillQuestionCircleFill} from "react-icons/bs";
 function AppHeader() {
  return (
      <header class="App-header">
          <input type="text" placeholder="Search..."></input>
          <button>Search</button>

          <p><a href="#">Log in</a> or <a href="#">Register</a></p>
          <BsFillCartFill/>
          <p class="Cart-Amount">0</p>
          <BsFillQuestionCircleFill/>
      </header>
  );
}

export default AppHeader;
