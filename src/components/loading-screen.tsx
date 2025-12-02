"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Fonction pour masquer le loader
    const hideLoader = () => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Durée de l'animation de fade-out
    };

    // Simuler un chargement minimum pour une meilleure UX
    const minLoadTimer = setTimeout(() => {
      if (document.readyState === "complete") {
        hideLoader();
      }
    }, 2500); // Minimum 2.5 secondes pour mieux voir l'animation

    // Vérifier si la page est déjà chargée
    if (document.readyState === "complete") {
      clearTimeout(minLoadTimer);
      setTimeout(hideLoader, 500);
    } else {
      window.addEventListener("load", () => {
        clearTimeout(minLoadTimer);
        setTimeout(hideLoader, 500);
      });
    }

    return () => {
      clearTimeout(minLoadTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Logo circulaire avec animation de rotation */}
        <div className="relative">
          {/* Cercle externe animé */}
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          {/* Cercle principal avec logo */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white border-4 border-primary shadow-2xl flex items-center justify-center overflow-hidden">
            <Image
              src="/logo-euroforma.png"
              alt="Euroforma RDC Logo"
              width={80}
              height={80}
              className="object-contain p-2"
              priority
            />
          </div>
          {/* Cercle de rotation */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary/40 animate-spin" style={{ animationDuration: "2s" }}></div>
        </div>

        {/* Points de chargement animés */}
        <div className="flex space-x-2">
          <div 
            className="w-3 h-3 rounded-full bg-primary" 
            style={{ 
              animation: "loading-bounce 1.4s infinite",
              animationDelay: "0s"
            }}
          ></div>
          <div 
            className="w-3 h-3 rounded-full bg-primary" 
            style={{ 
              animation: "loading-bounce 1.4s infinite",
              animationDelay: "0.2s"
            }}
          ></div>
          <div 
            className="w-3 h-3 rounded-full bg-primary" 
            style={{ 
              animation: "loading-bounce 1.4s infinite",
              animationDelay: "0.4s"
            }}
          ></div>
        </div>

        {/* Texte de chargement */}
        <p className="text-sm text-muted-foreground font-medium">
          Chargement...
        </p>
      </div>
    </div>
  );
}

