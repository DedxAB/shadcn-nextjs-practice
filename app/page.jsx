const Home = () => {
  return (
    <main className="container h-[79vh] font-bold">
      <h1 className=" text-9xl">Home Page</h1>
      <div className="gap-4 flex italic">
        <a href="/about">About Page</a>
        <a href="/contact">Contact Page</a>
      </div>
    </main>
  );
};
export default Home;
