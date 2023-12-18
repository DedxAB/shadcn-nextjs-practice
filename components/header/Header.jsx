import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const Header = () => {
  return (
    <header className="container flex justify-between mx-auto items-center py-5">
      <Link href="/">
        <span className="text-lg font-bold">DEDSEC</span>
      </Link>
      <div className="justify-center items-center">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
