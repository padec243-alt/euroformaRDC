import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

const newsItems = [
  {
    image: PlaceHolderImages.find(p => p.id === 'news-1'),
    title: "L’importance de la formation continue",
    date: "July 20, 2022",
    comments: 0,
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'news-2'),
    title: "Maîtrisez votre temps : techniques efficaces pour rester productif",
    date: "August 25, 2025",
    comments: 0,
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'news-3'),
    title: "Les secrets d'un networking réussi",
    date: "August 27, 2025",
    comments: 0,
  },
];

export default function News() {
  return (
    <section id="news" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nos Actualités
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ateliers, conférences, lancements de formations… ne manquez rien !
            </p>
          </div>
          <Button asChild>
            <Link href="#">Voir Plus <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col">
              <CardHeader className="p-0">
                {item.image && (
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.image.imageHint}
                  />
                )}
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                    <span>{item.comments} Commentaire{item.comments !== 1 ? 's' : ''}</span>
                  </div>
                </div>
                <h3 className="font-headline text-xl font-bold h-20">{item.title}</h3>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href="#">Lire la suite <ArrowRight className="ml-1 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
