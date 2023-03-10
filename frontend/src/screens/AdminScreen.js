// Basic overview screen with links to...
//  Manage products and categories
//   Add new products within this view, edit/delete on individual product pages?
//  Manage deals
//  Manage customers (users)
//  manage orders
//  manage reviews (probably on individual review lists rather than here - maybe put a "most recent reviews" page here?)
//  Manage other Administrators (probably uplift normal users to admin status, demote?)

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";

export default function AdminScreen() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const email = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  ).email;
  const password = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  ).password;
  console.log(email, password);

  // Check whether or not person accessing the 
  const admin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/admin", {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return <p>hello world!</p>;
}
