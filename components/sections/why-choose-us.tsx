import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BriefcaseBusiness, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Formateurs qualifiés",
    description: "Nos formateurs sont des professionnels expérimentés, passionnés par la transmission de leur savoir-faire.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Certifications reconnues",
    description: "Obtenez des certificats valorisés sur le marché du travail, un véritable atout pour votre carrière.",
  },
  {
    icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
    title: "Insertion professionnelle",
    description: "Nous vous connectons à notre réseau de partenaires pour faciliter votre accès à l'emploi.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Pédagogie innovante",
    description: "Apprenez à travers des projets concrets, des études de cas et des outils à la pointe de la technologie.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Votre succès est notre priorité. Voici ce qui nous distingue.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl font-semibold mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
