import { notFound } from "next/navigation";
const ReviewIdPage = ({ params }) => {
  // Your code here
  if (parseInt(params.reviewId) > 99) return notFound();
  return (
    <div className="flex flex-col m-auto gap-5 text-3xl items-center">
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
};

export default ReviewIdPage;
