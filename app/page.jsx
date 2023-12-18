import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main className="h-screen font-bold relative">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://wallpaperaccess.com/full/1247841.png"
          alt="just a photo"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="container text-white">
        <h1 className="text-9xl">Home Page</h1>
        <div className="gap-4 flex italic">
          <Link href="/about">About Page</Link>
          <Link href="/contact">Contact Page</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
