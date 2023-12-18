"use client";
import { MyContext } from "@/helper/Context";
import { useContext } from "react";

const Contact = () => {
  const user = useContext(MyContext);

  return <main className="container">Contact Page {user}</main>;
};

export default Contact;
