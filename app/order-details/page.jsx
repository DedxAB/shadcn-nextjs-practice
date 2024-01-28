"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Order = () => {
  const router = useRouter();
  const handelButton = () => {
    console.log("Button Clicked");
    router.push("/login");
    // router.back();
  };

  return (
    <>
      <h1>Order Details</h1>
      <Button variant={`outline`} onClick={handelButton}>
        Click Me
      </Button>
    </>
  );
};

export default Order;
