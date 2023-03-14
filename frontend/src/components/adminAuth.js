import axios from "axios";
import { Buffer } from "buffer";
import React, { useState } from "react";

export default function AdminAuth() {
  const [isAdmin, setIsAdmin] = useState(false);

  const token = localStorage.getItem("token");
  if (token === null) {
    return false;
  }
  const email = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  ).email;
  const password = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  ).password;

  // Check whether or not person accessing the
  const checkAdmin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/user/admin", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        setIsAdmin(true);
      } else {
        alert("Authentication failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Authentication failed.");
    }
  };
  checkAdmin();

  return isAdmin;
}
