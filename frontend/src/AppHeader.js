import './AppHeader.css';
import {BsFillCartFill} from "react-icons/bs";
import {BsFillQuestionCircleFill} from "react-icons/bs";
 function AppHeader() {
  return (
      <header className="App-header">
        <div className="Searchbar">
            <input type="text" placeholder="Search..." className="Searchbar-input"></input>
        </div>
        <div className="headerRight"> 
          <a href="#Cart" className="Cart-icon">
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
