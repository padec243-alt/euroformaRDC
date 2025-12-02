import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    date: { day: '15', month: 'Oct' },
    image: PlaceHolderImages.find(p => p.id === 'event-1'),
    title: "Autumn Science Lectures",
    time: "8:00 am – 5:00 pm",
    location: "Venice, Italy",
    description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat",
  },
  {
    date: { day: '11', month: 'Dec' },
    image: PlaceHolderImages.find(p => p.id === 'event-2'),
    title: "Build Education Website Using WordPress",
    time: "8:00 am – 5:00 pm",
    location: "Chicago, US",
    description: "Tech you how to build a complete Learning Management System with WordPress and LearnPress.",
  },
  {
    date: { day: '09', month: 'Dec' },
    image: PlaceHolderImages.find(p => p.id === 'event-3'),
    title: "Elegant Light Box Paper Cut Dioramas",
    time: "8:00 am – 5:00 pm",
    location: "Vancouver, Canada",
    description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nos événements récents et à venir
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ateliers, conférences, lancements de formations… ne manquez rien !
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="#">Voir tout <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                {event.image && (
                  <Image
                    src={event.image.imageUrl}
                    alt={event.image.description}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={event.image.imageHint}
                  />
                )}
                <div className="absolute top-4 left-4 bg-background text-primary rounded-lg p-2 text-center shadow-md">
                  <span className="block font-bold font-headline text-2xl">{event.date.day}</span>
                  <span className="block text-sm font-semibold">{event.date.month}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-bold mb-2 h-14">{event.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>{event.location}</span>
                </div>
                <p className="text-muted-foreground text-sm h-20 overflow-hidden">{event.description}</p>
                 <Button asChild variant="link" className="p-0 h-auto mt-4 text-primary">
                    <Link href="#">En savoir plus <ArrowRight className="ml-1 h-4 w-4" /></Link>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
