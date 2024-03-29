"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return ( 
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p>
       Quelque chose s'est mal passé
      </p>
      <Button variant="secondary" asChild>
        <Link href="/">
          Retour
        </Link>
      </Button>
    </div>
  );
};
 
export default ErrorPage;