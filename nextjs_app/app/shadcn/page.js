import { Button } from "@/components/ui/button";
import Link from "next/link";

const ShadcnPage = () => {
  return (
    <div>
      <p className="text-white">Hello, Shadcn Page</p>
      <Button size="lg" variant="ghost" asChild={true}>
        <Link href="/">Click Me</Link>
      </Button>
    </div>
  );
};

export default ShadcnPage;
