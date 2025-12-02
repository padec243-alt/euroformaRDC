import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Amina MAKABI",
    role: "Étudiante en bureautique, Kinshasa",
    quote: "“Grâce à Euroforma RDC, j’ai pu maîtriser les outils bureautiques en seulement trois mois. Aujourd’hui, je travaille dans une entreprise et j’utilise mes compétences au quotidien.”",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-1'),
  },
  {
    id: "testimonial-2",
    name: "Pascal KENGE",
    role: "Directeur RH partenaire",
    quote: "“Nous recrutons régulièrement chez Euroforma RDC. Les profils sont bien formés, motivés, et prêts pour le terrain. Une vraie valeur ajoutée pour notre entreprise.”",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-2'),
  },
  {
    id: "testimonial-3",
    name: "Serge TSHIMANGA",
    role: "Apprenant en Droit des affaires",
    quote: "“La formation était pratique et complète. Les formateurs sont disponibles même après les cours. Je recommande vivement à tous ceux qui veulent apprendre sérieusement.”",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-3'),
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ils nous ont fait confiance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Leur expérience, leurs résultats, leur avenir.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <p className="italic text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center">
                        {testimonial.avatar && (
                           <Avatar className="h-12 w-12">
                           <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.avatar.description} data-ai-hint={testimonial.avatar.imageHint} />
                           <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                         </Avatar>
                        )}
                        <div className="ml-4 text-left">
                          <p className="font-headline font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
