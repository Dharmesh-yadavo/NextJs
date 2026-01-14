import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ShadcnPage = () => {
  const isDarkMode = true;
  return (
    <div>
      <p className="text-white">Hello, Shadcn Page</p>
      <Button size="lg" variant="ghost" asChild={true}>
        <Link href="/">Click Me</Link>
      </Button>
      <p
        className={cn(
          "px-2 py-1 bg-red text-white hover:bg-red-500",
          "p-3 bg-black text-yellow-100",
          !isDarkMode && "text-red-300",
          { "text-yellow-400": isDarkMode }
        )}
      >
        Every component in shadcn/ui shares a common, composable interface. If a
        component does not exist, we bring it in, make it composable, and adjust
        its style to match and work with the rest of the design system.
      </p>
    </div>
  );
};

export default ShadcnPage;
