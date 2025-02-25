import ServiceCategory from "@/components/layout/ServiceCategory";
import { EthnicButton } from "@/components/ui/ethnic-button";
import { EthnicPattern } from "@/components/ui/EthnicPattern";
import servicesData from "@/data/services_beautes_du_monde.json";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nos Services | Beautés du Monde",
  description:
    "Découvrez tous nos services de beauté, coiffure et bien-être inspirés des traditions du monde entier.",
};

interface CategoryInfo {
  icon: ReactNode;
  description: string;
}

interface ServicesData {
  [category: string]: {
    nom: string;
    description: string;
    duree: string;
    prix: string;
  }[];
}

export default function ServicesPage() {
  // Liste des catégories à mettre en avant en premier
  const featuredCategories = [
    "NOTRE HAMMAM &SPA  / PAR TELEPHONE RESA",
    "NOS COIFFURE FEMMES",
    "NOS SOINS VISAGE MARIA GALAND",
  ];

  // Filtrer les catégories: d'abord les mises en avant, puis les autres par ordre alphabétique
  const otherCategories = Object.keys(servicesData as ServicesData)
    .filter((category) => !featuredCategories.includes(category))
    .sort();

  const orderedCategories = [...featuredCategories, ...otherCategories];

  // Fonction pour générer un ID d'ancrage à partir du nom de catégorie
  const getCategoryAnchor = (category: string): string => {
    return category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // Map des catégories aux icônes et descriptions courtes
  const categoryInfo: Record<string, CategoryInfo> = {
    "NOTRE HAMMAM &SPA  / PAR TELEPHONE RESA": {
      icon: (
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
          <path d="M15.2 10.12c1.22-1.85 1.99-3.76 2.77-5.47a14.76 14.76 0 0 1 1.91 2.45" />
          <path d="M16.25 7.1c-.23-.43-.46-.86-.69-1.29" />
          <path d="M2 21L8 18" />
          <path d="M17 21l-5-3" />
          <path d="M22 21l-5-3" />
        </svg>
      ),
      description:
        "Détente et relaxation dans notre espace hammam traditionnel. Une parenthèse de bien-être inspirée des rituels orientaux.",
    },
    "NOS COIFFURE FEMMES": {
      icon: (
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
          <path d="M18 9v6" />
          <path d="M6 9v6" />
          <path d="M12 9v6" />
          <circle cx="6" cy="5" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="18" cy="5" r="1" />
        </svg>
      ),
      description:
        "Coupez, colorez, coiffez... Notre équipe experte sublime vos cheveux avec les dernières techniques et tendances.",
    },
    // Autres catégories...
  };

  // Pour les autres catégories, créer des icônes par défaut
  orderedCategories.forEach((category) => {
    if (!categoryInfo[category]) {
      categoryInfo[category] = {
        icon: (
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
            <path d="M9.07 3h5.86a5 5 0 0 1 5 5.07v5.86a5 5 0 0 1-5 5.07H9.07a5 5 0 0 1-5-5.07V8.07a5 5 0 0 1 5-5.07Z" />
          </svg>
        ),
        description:
          "Découvrez nos services professionnels pour sublimer votre beauté naturelle.",
      };
    }
  });

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Quick navigation */}
        <div className="mb-16">
          <h2 className="text-xl mb-4 font-medium">Catégories</h2>
          <div className="flex flex-wrap gap-2">
            {orderedCategories.map((category, index) => (
              <a
                key={index}
                href={`#${getCategoryAnchor(category)}`}
                className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-gold hover:text-white transition-colors"
              >
                {category
                  .replace("NOS ", "")
                  .replace(" / PAR TELEPHONE RESA", "")
                  .toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Services sections */}
        {orderedCategories.map((category, index) => {
          const services = (servicesData as ServicesData)[category];
          const info = categoryInfo[category] || {};

          return (
            <ServiceCategory
              key={index}
              category={category}
              services={services}
              icon={info.icon}
              description={info.description}
            />
          );
        })}

        {/* CTA section */}
        <div className="mt-20 bg-card p-8 rounded-lg text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <EthnicPattern />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl mb-4">Prêt à vous faire chouchouter ?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Prenez rendez-vous dès maintenant et offrez-vous un moment de
              détente et de beauté dans notre salon. Notre équipe d&apos;experts
              est impatiente de prendre soin de vous.
            </p>
            <EthnicButton variant="primary" size="lg">
              Réserver un rendez-vous
            </EthnicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
