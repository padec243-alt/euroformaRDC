import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { formationsData, longCourses, shortCourses } from "@/lib/formations-data";


export default function Formations() {
  return (
    <section id="formations" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos Formations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Des parcours adaptés à vos ambitions, conçus pour votre réussite.
          </p>
        </div>
        <Tabs defaultValue="courte" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="courte">Formations Courtes</TabsTrigger>
            <TabsTrigger value="longue">Formations Longues</TabsTrigger>
          </TabsList>
          <TabsContent value="courte">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {shortCourses.map((course) => {
                const formation = formationsData.find(f => f.slug === course.slug);
                return(
                <Card key={course.title} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <CardHeader>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                            {course.icon}
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardTitle className="font-headline text-xl font-semibold mb-2">{course.title}</CardTitle>
                        <CardDescription>{formation?.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button asChild>
                            <Link href={`/formations/${course.slug}`}>En savoir plus <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </CardFooter>
                </Card>
              )})}
            </div>
          </TabsContent>
          <TabsContent value="longue">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {longCourses.map((course) => {
                    const formation = formationsData.find(f => f.slug === course.slug);
                    return (
                    <Card key={course.title} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                        <CardHeader>
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                {course.icon}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardTitle className="font-headline text-xl font-semibold mb-2">{course.title}</CardTitle>
                            <CardDescription>{formation?.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <Button asChild>
                                <Link href={`/formations/${course.slug}`}>En savoir plus <ArrowRight className="ml-2 h-4 w-4"/></Link>
                            </Button>
                        </CardFooter>
                    </Card>
                )})}
            </div>
          </TabsContent>
        </Tabs>
         <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/formations">Toutes nos formations <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
