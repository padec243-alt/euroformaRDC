"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, User, Mail, Globe, BookOpen, Library } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { formationsData } from "@/lib/formations-data";

const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères."),
  lastName: z.string().min(2, "Le nom de famille doit contenir au moins 2 caractères."),
  email: z.string().email("L'adresse e-mail n'est pas valide."),
  country: z.string().min(2, "Le pays doit contenir au moins 2 caractères."),
  formation: z.string({ required_error: "Veuillez sélectionner une formation." }),
  module: z.string().optional(),
});

type Module = {
  slug: string;
  title: string;
};

export default function InscriptionPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const formationSlug = searchParams.get('formation');
  const moduleSlug = searchParams.get('module');

  const [availableModules, setAvailableModules] = useState<Module[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      formation: formationSlug || undefined,
      module: moduleSlug || undefined,
    },
  });

  const selectedFormationSlug = form.watch("formation");

  useEffect(() => {
    if (selectedFormationSlug) {
      const formation = formationsData.find(f => f.slug === selectedFormationSlug);
      setAvailableModules(formation?.modules || []);
      // Reset module if the new formation doesn't have it or has no modules
      const currentModuleValue = form.getValues('module');
      if(currentModuleValue && !formation?.modules?.find(m => m.slug === currentModuleValue)) {
        form.setValue('module', undefined);
      }
    } else {
      setAvailableModules([]);
      form.setValue('module', undefined);
    }
  }, [selectedFormationSlug, form]);

  // Pre-select modules when the page loads with params
  useEffect(() => {
    if(formationSlug){
      const formation = formationsData.find(f => f.slug === formationSlug);
      setAvailableModules(formation?.modules || []);
    }
    if (moduleSlug) {
      form.setValue('module', moduleSlug);
    }
  }, [formationSlug, moduleSlug, form]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inscription réussie !",
      description: "Nous avons bien reçu votre demande d'inscription. Nous vous contacterons bientôt.",
    });
    form.reset();
    setAvailableModules([]);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <div className="container mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <Card className="w-full max-w-2xl shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold">
                Formulaire d&apos;inscription
              </CardTitle>
              <CardDescription>
                Rejoignez-nous pour façonner votre avenir.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prénom</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input placeholder="Votre prénom" {...field} className="pl-10" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <div className="relative">
                               <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                               <Input placeholder="Votre nom" {...field} className="pl-10" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresse e-mail</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="email" placeholder="exemple@email.com" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pays de résidence</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Votre pays" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="formation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Formation souhaitée</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <div className="relative">
                                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <SelectTrigger className="pl-10">
                                  <SelectValue placeholder="Sélectionnez une formation" />
                                </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent>
                            {formationsData.map((formation) => (
                              <SelectItem key={formation.slug} value={formation.slug}>
                                {formation.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {availableModules.length > 0 && (
                    <FormField
                      control={form.control}
                      name="module"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Module souhaité</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || ''}>
                            <FormControl>
                              <div className="relative">
                                <Library className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <SelectTrigger className="pl-10">
                                  <SelectValue placeholder="Sélectionnez un module" />
                                </SelectTrigger>
                              </div>
                            </FormControl>
                            <SelectContent>
                              {availableModules.map((module) => (
                                <SelectItem key={module.slug} value={module.slug}>
                                  {module.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <Button type="submit" size="lg" className="w-full font-bold">
                    Soumettre mon inscription
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
