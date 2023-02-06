import './App.css';
import logo from './images/dalavintage-low-resolution-logo-color-on-transparent-background_2.png'
import AppProductList from './AppProductList';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="App-logo"/>
      <div className="App-categories">NEW TEXT</div>
      <AppProductList/>
    </div>
  );
}

export default App;
