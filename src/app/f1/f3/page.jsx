import { Button } from "@/components/ui/button";
import Link from "next/link";

const F3 = () => {
  return (
    <>
      <h1>F3</h1>
      <br />
      <Link href={`/f1/f4`}>
        <Button variant={`outline`}>F4 page</Button>
      </Link>
    </>
  );
};

export default F3;
