import "./App.css";
import logo from "./images/dalavintage-low-resolution-logo-color-on-transparent-background_2.png";
import AppProductList from "./AppProductList";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="App-logo" />
      <ul className="App-categories">
        <a href="#new">NEW</a>
        <a href="#deals">DEALS</a>
        <a href="#books" className="Activecategory">BOOKS</a>
        <a href="#newspapers">NEWSPAPERS</a>
      </ul>
      <AppProductList />
    </div>
  );
}

export default App;
