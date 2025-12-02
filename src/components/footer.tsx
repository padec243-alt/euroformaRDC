import Link from "next/link";
import Image from 'next/image';
import { MapPin, Globe, Mail } from "lucide-react";

const quickLinks = {
  "Formations courtes": [
    { name: "Management & Stratégie", href: "/formations" },
    { name: "Pédagogie", href: "/formations" },
    { name: "Technologie & numérique", href: "/formations" },
    { name: "Communication", href: "/formations" },
    { name: "Droit", href: "/formations" },
    { name: "Prospective internationale", href: "/formations" },
  ],
  "Formations longues": [
    { name: "US CERTIFICATE EXECUTIVE", href: "/formations" },
    { name: "US CERTIFICATE PROFESSIONAL", href: "/formations" },
  ],
  "Nous": [
    { name: "À propos", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ],
  "Plus": [
    { name: "Inscription", href: "/inscription" },
    { name: "Formations", href: "/formations" },
  ],
};

const FooterLogo = () => (
    <div className="flex items-center gap-2">
      <div className="rounded-full p-1 bg-white border-2 border-primary/20">
        <Image
          src="https://res.cloudinary.com/dy73hzkpm/image/upload/v1762438803/Capture_d_e%CC%81cran_2025-11-06_a%CC%80_15.19.36_v33tk5.png"
          alt="Euroforma RDC Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <span className="font-bold text-xl">
          <span className="text-white">Euroforma</span><span className="text-white">RDC</span>
      </span>
    </div>
  );

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <FooterLogo />
            <div className="mt-6 space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary-foreground/60" />
                <span>67 BLVD du 30 juin, Gombe, Kinshasa, RDC</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 flex-shrink-0 text-primary-foreground/60" />
                <Link href="https://euroforma-rdc.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  euroforma-rdc.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary-foreground/60" />
                <Link href="mailto:contact@euroforma-rdc.com" className="hover:underline">
                  contact@euroforma-rdc.com
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2">
            {Object.entries(quickLinks).map(([title, links]) => (
              <div key={title}>
                <p className="font-headline font-medium">{title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-primary-foreground/80 transition hover:opacity-75">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Euroforma RDC. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-primary-foreground/60">
            Conçu par{" "}
            <Link href="https://padec243.org" target="_blank" rel="noopener noreferrer" className="font-semibold transition hover:opacity-75">
              LA PADEC
            </Link>
          </p>
          <p className="mt-1 text-xs text-primary-foreground/60">
            Développé par{" "}
            <Link href="https://www.charmant-nyungu.com" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-75">
              Charmant Nyungu K.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
