"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return ( 
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p>
        Quelque chose s&apos;est mal pass&#xE9;
      </p>
      <Button variant="secondary" asChild>
        <Link href="/">
         Rentrer &#xE0; la maison
        </Link>
      </Button>
    </div>
  );
};
 
export default ErrorPage;