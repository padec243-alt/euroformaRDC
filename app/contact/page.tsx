"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, User, Mail, Book, MessageSquare, MapPin, Phone, Globe } from "lucide-react";

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
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("L'adresse e-mail n'est pas valide."),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message envoyé !",
      description: "Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Contactez-nous
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Une question ? Une demande d'information ? N'hésitez pas à nous écrire.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="shadow-2xl">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl font-bold">
                            Envoyez-nous un message
                        </CardTitle>
                        <CardDescription>
                            Remplissez le formulaire et notre équipe vous contactera.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Nom complet</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Votre nom complet" {...field} className="pl-10" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
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
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Sujet</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                    <Book className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Sujet de votre message" {...field} className="pl-10" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Textarea placeholder="Écrivez votre message ici..." {...field} className="pl-10 min-h-[120px]" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit" size="lg" className="w-full font-bold">
                                Envoyer le message
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    </Form>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                     <Card className="shadow-2xl">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl font-bold">
                                Nos Coordonnées
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-lg">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Adresse</h4>
                                    <p className="text-muted-foreground">67 Boulevard Du 30 juin, Immeuble Golf 3è niveau, Local 10, Kinshasa</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Téléphone</h4>
                                    <p className="text-muted-foreground">+243 000 000 000</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-muted-foreground">contact@euroformardc.com</p>
                                </div>
                            </div>
                              <div className="flex items-start gap-4">
                                <Globe className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Site Web</h4>
                                    <p className="text-muted-foreground">euroformardc.com</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                     <div className="w-full h-80 rounded-lg overflow-hidden shadow-2xl">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.432860165985!2d15.29323381533088!3d-4.331284596950204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a310df0b1b369%3A0x869055f46b158c33!2sBoulevard%20du%2030%20Juin%2C%20Kinshasa!5e0!3m2!1sen!2scd!4v1689622956241!5m2!1sen!2scd" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                     </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
