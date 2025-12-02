import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const partnerIds = ["partner-1", "partner-2", "partner-3", "partner-4", "partner-5"];

export default function Partners() {
  const partners = partnerIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos Partenaires
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous collaborons avec des entreprises leaders pour garantir votre avenir professionnel.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              partner && (
                <div key={partner.id} className="flex items-center justify-center">
                  <Image
                    src={partner.imageUrl}
                    alt={partner.description}
                    width={150}
                    height={60}
                    className="object-contain filter grayscale transition duration-300 hover:grayscale-0"
                    data-ai-hint={partner.imageHint}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
