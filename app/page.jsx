import Link from "next/link";

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
  ];
  return (
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
  );
};

export default Home;
