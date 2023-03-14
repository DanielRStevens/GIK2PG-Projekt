import React from "react";
import { Buffer } from "buffer";

export default function AdminCheck() {
    const token = localStorage.getItem("token");
    if(token === null){
        return false;
    }
    const admin = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()).admin;
    return admin===1;
}