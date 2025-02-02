import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return ( 
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404</h1>
      <p>
        Nous avons pu trouver l&apos;utilisateur que vous recherchiez.
      </p>
      <Button variant="secondary" asChild>
        <Link href="/">
          Rentrer &#xE0; la maison
        </Link>
      </Button>
    </div>
  );
};
 
export default NotFoundPage;