"use client";
import { MyContext } from "@/helper/Context";
import { useContext } from "react";

const Contact = () => {
  const user = useContext(MyContext);

  return (
    <main className="container">
      <h1 className="font-bold text-9xl">Contact Page</h1>
      <h1 className="italic">{user}</h1>
    </main>
  );
};

export default Contact;
