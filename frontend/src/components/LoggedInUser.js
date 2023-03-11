import React from "react";
import { Buffer } from "buffer";
const LoggedInUser = () => {
  const token = localStorage.getItem("token");
  const user = token
    ? JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()).email
    : "";
    const admin = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()).admin;

    console.log(Buffer.from(token.split(".")[1], "base64").toString())
    if (admin == 1){
        return <div><a href="/admin">Admin panel</a></div>
    }
  return <div>Logged in as: {user}</div>;
};
export default LoggedInUser;