import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const galleryImageIds = [
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "gallery-5",
  "gallery-6",
];

export default function Gallery() {
  const galleryImages = galleryImageIds
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Notre Gallerie
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plongez dans l'univers Euroforma RDC en images.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) =>
            image ? (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg"
                    data-ai-hint={image.imageHint}
                  />
                </DialogContent>
              </Dialog>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
