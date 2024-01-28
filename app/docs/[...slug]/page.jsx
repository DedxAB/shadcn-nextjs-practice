const DocsPage = ({ params }) => {
  if (params.slug.length === 2) {
    return (
      <div className="flex flex-col m-auto gap-5 text-3xl items-center">
        <h1>
          Inside docs page - {params.slug[0]} route and {params.slug[1]} route
        </h1>
      </div>
    );
  }
  if (params.slug.length === 1) {
    return (
      <div className="flex flex-col m-auto gap-5 text-3xl items-center">
        <h1>Inside docs page - {params.slug[0]} route </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col m-auto gap-5 text-3xl items-center">
      Docs Home Page
    </div>
  );
};

export default DocsPage;
