const ProductPage = ({ params }) => {
  return (
    <div className="flex flex-col m-auto gap-5 text-3xl items-center">
      Product Page
      <h1>Product no {params.productId}</h1>
    </div>
  );
};

export default ProductPage;
