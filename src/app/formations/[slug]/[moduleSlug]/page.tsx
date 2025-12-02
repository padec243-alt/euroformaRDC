import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, Users, Clock, Tag, BookOpen, Calendar, Info } from 'lucide-react';

import { formationsData } from '@/lib/formations-data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function generateStaticParams({ params: { slug } }: { params: { slug: string } }) {
  const formation = formationsData.find((f) => f.slug === slug);
  if (!formation || !formation.modules) {
    return [];
  }
  return formation.modules.map((module) => ({
    slug: slug,
    moduleSlug: module.slug,
  }));
}

export default function ModuleDetailPage({ params }: { params: { slug: string, moduleSlug: string } }) {
  const formation = formationsData.find((f) => f.slug === params.slug);
  const module = formation?.modules?.find((m) => m.slug === params.moduleSlug);

  if (!formation || !module) {
    notFound();
  }

  const otherModules = formation.modules?.filter(m => m.slug !== params.moduleSlug) || [];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 flex items-center text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-primary">
              Accueil
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href="/#formations" className="hover:text-primary">
              Formations
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href={`/formations/${formation.slug}`} className="hover:text-primary">
              {formation.title}
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="font-medium text-foreground">{module.title}</span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose max-w-none dark:prose-invert">
                 <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
                  {module.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-muted-foreground mb-8">
                  <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> {module.students}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> {module.duration}</span>
                  <span className="flex items-center gap-1.5"><Tag className="h-4 w-4 text-primary" /> {module.category}</span>
                  <Badge variant={module.price === 'Free' ? 'secondary' : 'destructive'}>{module.price}</Badge>
                </div>
               
                <p className="text-lg text-muted-foreground">{module.description}</p>
                
                <div className="mt-8 not-prose space-y-6 text-lg">
                    <div className="flex items-start gap-4">
                        <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">À propos de ce cours</h4>
                            <p className="text-muted-foreground">{module.description} Ce module vous apportera les compétences nécessaires pour exceller dans ce domaine spécifique.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Durée et format</h4>
                            <p className="text-muted-foreground">La formation se déroule sur une durée de {module.duration}, avec un mix de théorie et de pratique pour une meilleure assimilation.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Info className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Pré-requis</h4>
                            <p className="text-muted-foreground">Aucun pré-requis spécifique n'est demandé, mais une appétence pour le sujet est recommandée.</p>
                        </div>
                    </div>
                </div>

                 <div className="mt-12">
                    <Button asChild size="lg" className="font-bold">
                        <Link href={`/inscription?formation=${formation.slug}&module=${module.slug}`}>
                            S'inscrire à ce module <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                    </Button>
                </div>
              </div>
            </div>
            
            <aside className="space-y-8">
                {otherModules.length > 0 && (
                    <Card>
                        <CardHeader>
                        <CardTitle className="font-headline text-xl">Autres modules de cette formation</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <ul className="space-y-4">
                            {otherModules.map((other) => (
                            <li key={other.slug}>
                                <Link
                                href={`/formations/${formation.slug}/${other.slug}`}
                                className="flex items-center justify-between rounded-md p-3 hover:bg-secondary"
                                >
                                <span className="font-medium">{other.title}</span>
                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </CardContent>
                    </Card>
                )}
            </aside>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
