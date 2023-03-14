import "./App.css";
import logo from "./images/dalavintage-low-resolution-logo-color-on-transparent-background_2.png";
import AppProductList from "./AppProductList";

//import ProductScreen from './screens/ProductScreen';
import DetailScreen from "./screens/DetailScreen";
import {
  Routes,
  Route,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
import CartScreen from "./screens/CartScreen";
import ReviewScreen from "./screens/ReviewScreen";
import KlarnaScreen from "./screens/KlarnaScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PaypalScreen from "./screens/PaypalScreen";
import AdminScreen from "./screens/AdminScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentSuccessScreen from "./screens/PaymentSuccessScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

function App() {

  return (
    <main>
      <Container className="mt-3 mainColumn">
        <Routes>
          {/* Casual customer */}
          <Route path="/" element={<ProductScreen />} />
          <Route path="/product/:id" element={<DetailScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/shipping" element={<ShippingAddressScreen />} />
          <Route path="/search/*" element={<NoMatch />} />
          <Route path="/deals" element={<NoMatch />} />
          <Route path="/new" element={<NoMatch />} />
          <Route path="/payment" element={<PaypalScreen />} />
          <Route path="/payment/success" element={<PaymentSuccessScreen />} />

          {/* Logged in customer */}
          <Route path="/product/:id/review" element={<ReviewScreen />} />
          <Route path="/order" element={<NoMatch />} />
          <Route path="/product/*/create-review" element={<NoMatch />} />
          <Route path="/favorites" element={<NoMatch />} />
          <Route path="/order-history" element={<NoMatch />} />
          <Route path="/account" element={<NoMatch />} />
          <Route path="/logout" element={<NoMatch />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/product/:id/edit" element={<ProductEditScreen />} />
          <Route path="/admin/deals" element={<NoMatch />} />
          <Route path="/admin/customers" element={<NoMatch />} />
          <Route path="/admin/review/*" element={<NoMatch />} />

          {/* 404 error */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </main>
  );
}

function ProductScreen() {
  return (
    <div className="App">
      <Helmet>
        <title>DalaVintage Vintage Bookstore</title>
      </Helmet>
      {/* <img src={logo} alt="Logo" className="App-logo" /> */}
      <ul className="App-categories">
        <a href="#new">NEW</a>
        <a href="#deals">DEALS</a>
        <a href="#books" className="Activecategory">
          BOOKS
        </a>
        <a href="#newspapers">NEWSPAPERS</a>
      </ul>
      <AppProductList />
    </div>
  );
}

export function NoMatch() {
  return (
    <div>
      <Helmet>
        <title>404 Error</title>
      </Helmet>
      <h1>404 Error</h1>
      <p>Page not found</p>
    </div>
  );
}

export default App;
