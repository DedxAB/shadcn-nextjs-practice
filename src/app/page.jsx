"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
    { name: "Order Details", href: "/order-details" },
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  // const generateRandomNumber = (count) => {
  //   return Math.floor(Math.random() * count);
  // };
  // const randomNumber = generateRandomNumber(4);

  // console.log(randomNumber);
  // if (randomNumber === 3) {
  //   throw new Error("Something went wrong");
  // }

  const [isLoggedin, setIsLoggedin] = useState(false);
  const handelLogin = () => {
    setIsLoggedin(true);
  };
  // const isLoggedin = false;

  return isLoggedin ? (
    <>
      <h1 className="text-9xl">Home Page</h1>
      <div className="gap-4 flex italic my-3">
        {navLinks.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <>
      <h1 className="text-9xl">Login Page</h1>
      <Link href={`/login`}>
        <Button variant={`outline`} onClick={handelLogin}>
          Log in
        </Button>
      </Link>
    </>
  );
};

export default Home;
