"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Users, Clock } from 'lucide-react';
import { formationsData } from '@/lib/formations-data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/animated-section';
import { Separator } from '@/components/ui/separator';

const allModules = formationsData.flatMap(formation => 
  formation.modules ? formation.modules.map(module => ({ ...module, formationSlug: formation.slug })) : []
);

const categories = ["Toutes", ...new Set(allModules.map(module => module.category))];
const priceFilters = ["Tous", "Gratuit", "Payant"];

export default function AllFormationsPage() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [activePrice, setActivePrice] = useState("Tous");

  const filteredModules = allModules.filter(module => {
    const categoryMatch = activeCategory === "Toutes" || module.category === activeCategory;
    
    let priceMatch = true;
    if (activePrice === "Gratuit") {
      priceMatch = module.price === 'Free';
    } else if (activePrice === "Payant") {
      priceMatch = module.price !== 'Free';
    }

    return categoryMatch && priceMatch;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Toutes nos formations
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Explorez notre catalogue complet et trouvez le module qui vous correspond.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-12 space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <p className="font-semibold mr-4">Catégories:</p>
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={activeCategory === category ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <Separator />
               <div className="flex flex-wrap items-center justify-center gap-2">
                <p className="font-semibold mr-4">Coût:</p>
                {priceFilters.map(price => (
                  <Button 
                    key={price}
                    variant={activePrice === price ? 'default' : 'outline'}
                    onClick={() => setActivePrice(price)}
                    size="sm"
                  >
                    {price}
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredModules.map((module) => (
                <Link key={module.slug} href={`/formations/${module.formationSlug}/${module.slug}`} className="group">
                  <Card className="flex flex-col h-full cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="h-14">{module.title}</CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {module.students}</span>
                          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {module.duration}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground line-clamp-3">{module.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Badge variant={module.price === 'Free' ? 'secondary' : 'destructive'}>{module.price}</Badge>
                      <span className="text-sm font-semibold text-primary group-hover:underline">
                        En savoir plus <ArrowRight className="inline-block ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            {filteredModules.length === 0 && (
              <p className="text-center text-muted-foreground mt-8">Aucune formation ne correspond à vos critères de recherche.</p>
            )}
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
