import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Prêt à transformer votre avenir ?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Inscrivez-vous dès maintenant à l’une de nos formations certifiantes.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="destructive" className="font-bold text-lg">
            <Link href="/inscription">INSCRIVEZ-VOUS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
