import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, Users, Clock } from 'lucide-react';

import { formationsData } from '@/lib/formations-data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function generateStaticParams() {
  return formationsData.map((formation) => ({
    slug: formation.slug,
  }));
}

export default function FormationDetailPage({ params }: { params: { slug: string } }) {
  const formation = formationsData.find((f) => f.slug === params.slug);
  const otherFormations = formationsData.filter((f) => f.slug !== params.slug);

  if (!formation) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Accueil
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href="/#formations" className="hover:text-primary">
              Formations
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="font-medium text-foreground">{formation.title}</span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose max-w-none dark:prose-invert">
                <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {formation.title}
                </h1>
                <p className="text-xl text-muted-foreground">{formation.description}</p>
                
                {formation.details && !formation.modules && formation.details.map((detail, index) => (
                    <div key={index} className="mt-8">
                        <h3 className="font-headline text-2xl font-semibold">{detail.heading}</h3>
                        <p>{detail.content}</p>
                    </div>
                ))}
                
                <div className="mt-12">
                    <Button asChild size="lg">
                        <Link href="/inscription">S'inscrire à cette formation <ArrowRight className="ml-2 h-5 w-5"/></Link>
                    </Button>
                </div>

                {formation.modules && (
                  <div className="mt-16 not-prose">
                    <h2 className="font-headline text-2xl font-bold mb-8">Modules de formation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {formation.modules.map((module) => (
                        <Link key={module.slug} href={`/formations/${formation.slug}/${module.slug}`} className="group">
                          <Card className="flex flex-col h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <CardHeader>
                              <CardTitle>{module.title}</CardTitle>
                              <CardDescription className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
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
                  </div>
                )}
              </div>
            </div>

            <aside className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">Autres Formations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {otherFormations.map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/formations/${other.slug}`}
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
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
