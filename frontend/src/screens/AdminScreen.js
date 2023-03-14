// Basic overview screen with links to...
//  Manage products and categories
//   Add new products within this view, edit/delete on individual product pages?
//  Manage deals
//  Manage customers (users)
//  manage orders
//  manage reviews (probably on individual review lists rather than here - maybe put a "most recent reviews" page here?)
//  Manage other Administrators (probably uplift normal users to admin status, demote?)

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminAuth from "../components/adminAuth";
import {NoMatch} from "../App.js";

export default function AdminScreen() {
  const navigate = useNavigate();

    if (!AdminAuth()) {
      return <NoMatch/>
    }

  // Pages to link to from this dashboard:
  // Create a new product?
  // Manage categories - maybe create/delete them?
  // manage deals - presumably setting a percentage
  // manage customers
  // manage orders
  // manage reviews
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Products</h2>
      <a href="">Create a new product listing</a>
      <br />
      <h2>Deals</h2>
      <a href="">View current deals</a>
      <br />
      <a href="">Create a new deal</a>
      <br />
      <h2>Customers</h2>
      <a href="">Find a customer</a>
      <br />
      <h2>Orders</h2>
      <a href="">Find an order by ID number</a>
      <br />
      <a href="">View recent orders</a>
      <br />
      <h2>Reviews</h2>
      <a href="">View recent reviews</a>
      <br />
      <a href=""></a>
      <br />
    </div>
  );
}
