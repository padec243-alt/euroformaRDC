"use client";

import Image from "next/image";

const partners = [
  {
    id: "priorites-rdc",
    name: "Priorités RDC",
    // Logo gris avec une personne et des feuilles
    logo: "/partners/priorites-rdc.png",
  },
  {
    id: "el-conseil",
    name: "EL Conseil & Formation",
    // Logo avec cercle vert et texte "HUMANISTE - PROCHE - OPTIMISANT"
    logo: "/partners/el-conseil.png",
  },
  {
    id: "padec",
    name: "PADEC - Passerelle des Congolais",
    // Logo bleu rond avec pont et globe
    logo: "/partners/padec.png",
  },
];

// Dupliquer les partenaires pour créer un effet de défilement infini
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

export default function Partners() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos Partenaires
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous collaborons avec des organisations de confiance pour garantir votre avenir professionnel.
          </p>
        </div>
        
        {/* Conteneur du carousel avec défilement */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          {/* Gradient droit */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          
          {/* Piste de défilement */}
          <div className="flex animate-scroll-left">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center"
              >
                <div className="w-28 h-28 md:w-36 md:h-36 relative flex items-center justify-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
