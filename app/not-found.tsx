import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        This route doesn't exist.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you're looking for was moved, deleted, or never existed in the
        first place.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
