import { Button } from "@/components/ui/button";
import Link from "next/link";

const F4 = () => {
  return (
    <>
      <h1>F4</h1>
      <br />
      <Link href={`/f1`}>
        <Button variant={`outline`}>F1 page</Button>
      </Link>
    </>
  );
};

export default F4;
