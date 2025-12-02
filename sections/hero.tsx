import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-background");

  return (
    <section id="home" className="relative h-[80vh] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 flex h-full max-w-7xl flex-col items-center justify-center text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Former les leaders d’aujourd’hui,
        </h1>
        <p className="mt-4 max-w-3xl font-headline text-2xl font-semibold md:text-3xl lg:text-4xl">
          façonner les stratégies de demain.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg" variant="destructive" className="font-bold">
            <Link href="#formations">Nos Formations</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-black">
            <Link href="#contact">Contactez-nous</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
