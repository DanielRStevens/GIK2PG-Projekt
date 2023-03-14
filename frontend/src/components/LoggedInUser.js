import React from "react";
import { Buffer } from "buffer";
import AdminCheck from "./adminCheck";
const LoggedInUser = () => {
  const token = localStorage.getItem("token");
  const user = token
    ? JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()).email
    : "";
    if (AdminCheck()){
        return <div><a href="/admin">Admin panel</a></div>
    }
  return <div>Logged in as: {user}</div>;
};
export default LoggedInUser;