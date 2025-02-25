import React, { ReactNode } from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  nom: string;
  description: string;
  duree: string;
  prix: string;
}

interface ServiceCategoryProps {
  category: string;
  services: Service[];
  icon: ReactNode;
  description?: string;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  category,
  services,
  icon,
  description,
}) => {
  // Fonction pour générer un ID d'ancrage à partir du nom de catégorie
  const getCategoryAnchor = (category: string): string => {
    return category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // Transformer la catégorie pour l'affichage (enlever "NOS " et "/PAR TELEPHONE RESA", mettre en majuscules)
  const displayName = category
    .replace("NOS ", "")
    .replace(" / PAR TELEPHONE RESA", "")
    .toUpperCase();

  return (
    <section id={getCategoryAnchor(category)} className="mb-16 scroll-mt-20">
      <div className="border-l-4 border-gold pl-4 mb-8">
        <div className="flex items-center mb-3">
          <div className="mr-3 text-gold">{icon}</div>
          <h2 className="text-2xl font-heading">{displayName}</h2>
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, serviceIndex) => (
          <ServiceCard
            key={serviceIndex}
            name={service.nom}
            duration={service.duree}
            price={service.prix}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCategory;
