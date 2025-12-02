import Link from "next/link";
import Image from 'next/image';

const quickLinks = {
  "Formations courte": [
    "Management & Stratégie",
    "Pedagogie",
    "Technologie & numérique",
    "Communication",
    "Droit",
    "Prospective internationale",
  ],
  "Formation Longue": [
    "Formations longue",
    "US CERTIFICATE EXECUTIVE",
    "US CERTIFICATE PROFESSIONAL",
  ],
  "Nous": ["A propos", "Contact"],
  "Plus": ["Inscription"],
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
            <p className="mt-4 text-sm text-primary-foreground/80">
              67 Boulevard Du 30 juin, Immeuble Golf 3è niveau, Local 10, Kinshasa.
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Site web: euroformardc.com
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2">
            {Object.entries(quickLinks).map(([title, links]) => (
              <div key={title}>
                <p className="font-headline font-medium">{title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href={
                        link === 'Inscription' ? '/inscription' : 
                        link === 'Contact' ? '/contact' : 
                        '#'
                      } className="text-primary-foreground/80 transition hover:opacity-75">
                        {link}
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
            <Link href="https://www.charmant-nyungu.com" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-75">
              Développé par Charmant Nyungu K.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
