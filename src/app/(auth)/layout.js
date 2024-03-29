"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }) {
  const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];

  const pathName = usePathname();
  return (
    <div className="text-lg">
      <h1>Auth Layout</h1>
      {navLinks.map((link) => {
        const activePath = pathName.startsWith(link.href);
        const activeStyle = activePath ? "bg-blue-500" : "";
        return (
          <Link
            href={link.href}
            key={link.name}
            className={`pr-3 mr-3 border-white border-2 px-3 ${activeStyle}`}
          >
            {link.name}
          </Link>
        );
      })}
      <h1>Auth layout end</h1>
      <div>{children}</div>
    </div>
  );
}
