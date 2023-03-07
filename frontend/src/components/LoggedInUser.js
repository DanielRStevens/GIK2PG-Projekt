import React from "react";
import { Buffer } from "buffer";
const LoggedInUser = () => {
  const token = localStorage.getItem("token");
  const user = token
    ? JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()).email
    : "";
    console.log(user);

  return <div>Logged in as: {user}</div>;
};
export default LoggedInUser;