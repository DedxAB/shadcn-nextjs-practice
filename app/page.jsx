import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main className="h-screen font-bold relative">
      <div>
        <Image
          src="https://wallpaperaccess.com/full/1247841.png"
          alt="just a photo"
          priority
          className="brightness-50 w-auto h-auto"
          fill
        />
      </div>
      <div className="container text-white absolute inset-0">
        <h1 className="text-9xl">Home Page</h1>
        <div className="gap-4 flex italic">
          <Link href="/about">About Page</Link>
          <Link href="/contact">Contact Page</Link>
          <Link href="/blogs">Blogs Page</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
