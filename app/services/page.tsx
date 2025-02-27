"use client";

import CategoryDescription from "@/components/layout/CategoryDescription";
import { EthnicPattern } from "@/components/ui/EthnicPattern";
import servicesData from "@/data/services_beautes_du_monde.json";
import Link from "next/link";
import { ReactNode, useMemo } from "react";

type Service = {
  nom: string;
  description: string;
  duree: string;
  prix: string;
};

type ServicesDataType = Record<string, Service[]>;

export default function ServicesPage() {
  // Fonction pour générer un ID d'ancrage à partir du nom de catégorie
  const getCategoryId = (category: string): string => {
    return category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // Fonction pour formater le nom d'affichage de la catégorie
  const formatCategoryName = (category: string): string => {
    return category.replace("NOS ", "").replace(" / PAR TELEPHONE RESA", "");
  };

  // Icône par défaut
  const defaultIcon: ReactNode = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );

  // Déterminer les catégories valides
  const validCategories = useMemo(() => {
    const typedData = servicesData as ServicesDataType;
    return Object.keys(typedData).filter((category) => {
      const services = typedData[category];
      if (!services || !Array.isArray(services)) return false;

      const validServices = services.filter(
        (service) => !service.nom.includes("Ce site est exclusivement")
      );

      return validServices.length > 0;
    });
  }, []);

  return (
    <>
      {/* Hero section */}
      <div className="relative bg-gradient-to-b from-background to-card py-16">
        <div className="absolute inset-0 opacity-5">
          <EthnicPattern />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading mb-4 text-center">
            Nos Services
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez notre gamme complète de services de beauté et bien-être
          </p>
        </div>
      </div>

      {/* Categories navigation */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-4 whitespace-nowrap">
            {validCategories.map((category) => (
              <a
                key={category}
                href={`#${getCategoryId(category)}`}
                className="text-sm font-medium px-3 py-1.5 rounded-full transition-colors hover:bg-gold hover:text-background"
              >
                {formatCategoryName(category)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services list */}
      <div className="container mx-auto px-4 py-10">
        {validCategories.map((category) => {
          const typedData = servicesData as ServicesDataType;
          const services = typedData[category];
          const validServices = services.filter(
            (service) => !service.nom.includes("Ce site est exclusivement")
          );

          // Trouver une description pour la catégorie
          const categoryDescription = (() => {
            // Cherche une description non vide
            const serviceWithDesc = validServices.find(
              (s) => s.description && s.description.trim() !== ""
            );
            if (serviceWithDesc) return serviceWithDesc.description;
            return `Services de ${formatCategoryName(category).toLowerCase()}`;
          })();

          return (
            <section
              key={category}
              id={getCategoryId(category)}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="section-title">{formatCategoryName(category)}</h2>

              <CategoryDescription
                icon={defaultIcon}
                description={categoryDescription}
              />

              <div className="grid gap-4">
                {validServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="group p-5 border border-border rounded-md hover:border-gold/30 transition-all bg-card flex flex-col md:flex-row md:items-center justify-between"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{service.nom}</h3>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm text-muted-foreground">
                          {service.duree}
                        </p>
                        {service.description &&
                          service.description !== categoryDescription && (
                            <p className="text-sm text-muted-foreground italic">
                              {service.description}
                            </p>
                          )}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4 flex items-center gap-4">
                      <span className="text-gold font-semibold text-lg whitespace-nowrap">
                        {service.prix}
                      </span>
                      {service.prix.includes("Sur devis") ||
                      service.prix.includes("devis") ? (
                        <p className="text-sm font-medium px-4 py-2  text-gold">
                          Nous contacter
                        </p>
                      ) : (
                        <Link
                          href="/reservation"
                          className="text-sm font-medium px-4 py-2 rounded-md border border-gold text-gold hover:bg-gold/10 transition-colors"
                        >
                          Choisir
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
