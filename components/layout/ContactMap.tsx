"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface ContactMapProps {
  className?: string;
}

export default function ContactMap({ className }: ContactMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cette fonction sera remplacée par l'intégration réelle d'une carte
    // comme Google Maps, Mapbox, etc. une fois que les API seront configurées.
    const renderPlaceholderMap = () => {
      if (!mapContainerRef.current) return;

      const container = mapContainerRef.current;
      container.innerHTML = "";

      // Création d'un div stylisé pour représenter la carte
      const mapPlaceholder = document.createElement("div");
      mapPlaceholder.className =
        "w-full h-full bg-muted/20 flex items-center justify-center";

      // Ajout d'un message
      const message = document.createElement("div");
      message.className = "text-muted-foreground text-center p-4";
      message.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2 text-gold">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <p class="text-gold font-medium">Beautés du Monde</p>
        <p>99 Av. Simon Bolivar, 75019 Paris</p>
      `;

      mapPlaceholder.appendChild(message);
      container.appendChild(mapPlaceholder);
    };

    renderPlaceholderMap();

    // Cette fonction sera appelée pour nettoyer lorsque le composant est démonté
    const mapContainerNode = mapContainerRef.current;
    return () => {
      if (mapContainerNode) {
        mapContainerNode.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className={cn(
        "w-full h-[300px] border border-border rounded-md overflow-hidden",
        className
      )}
      aria-label="Carte de localisation de Beautés du Monde"
    />
  );
}
