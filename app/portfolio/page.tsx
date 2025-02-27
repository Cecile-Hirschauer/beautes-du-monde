"use client";

import { EthnicPattern } from "@/components/ui/EthnicPattern";
import { EthnicButton } from "@/components/ui/ethnic-button";
import Link from "next/link";
import { useState } from "react";

// Types pour notre portfolio
type PortfolioCategory =
  | "all"
  | "coiffure"
  | "soins-visage"
  | "manucure"
  | "epilation"
  | "maquillage";

type PortfolioItem = {
  id: number;
  title: string;
  category: PortfolioCategory[];
  image: string;
  featured?: boolean;
};

// Données du portfolio
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Coiffure de mariée",
    category: ["coiffure"],
    image: "/images/portfolio-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Soin visage détox",
    category: ["soins-visage"],
    image: "/images/portfolio-2.jpg",
  },
  {
    id: 3,
    title: "Manucure artistique",
    category: ["manucure"],
    image: "/images/portfolio-3.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Coupe tendance",
    category: ["coiffure"],
    image: "/images/portfolio-4.jpg",
  },
  {
    id: 5,
    title: "Maquillage soirée",
    category: ["maquillage"],
    image: "/images/portfolio-5.jpg",
  },
  {
    id: 6,
    title: "Coiffure homme",
    category: ["coiffure"],
    image: "/images/portfolio-6.jpg",
  },
  {
    id: 7,
    title: "Soin anti-âge",
    category: ["soins-visage"],
    image: "/images/portfolio-7.jpg",
  },
  {
    id: 8,
    title: "Extensions de cils",
    category: ["maquillage"],
    image: "/images/portfolio-8.jpg",
    featured: true,
  },
  {
    id: 9,
    title: "Nail art personnalisé",
    category: ["manucure"],
    image: "/images/portfolio-9.jpg",
  },
  {
    id: 10,
    title: "Épilation sourcils",
    category: ["epilation"],
    image: "/images/portfolio-10.jpg",
  },
  {
    id: 11,
    title: "Coloration innovante",
    category: ["coiffure"],
    image: "/images/portfolio-11.jpg",
  },
  {
    id: 12,
    title: "Beauté des pieds",
    category: ["manucure"],
    image: "/images/portfolio-12.jpg",
  },
];

// Composant principal de la page Portfolio
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Filtrer les éléments en fonction de la catégorie active
  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeFilter));

  const featuredItems = portfolioItems.filter((item) => item.featured);

  return (
    <>
      {/* Hero section */}
      <div className="relative bg-gradient-to-b from-background to-card py-16">
        <div className="absolute inset-0 opacity-5">
          <EthnicPattern />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading mb-4 text-center">
            Notre Portfolio
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez notre savoir-faire à travers une sélection de nos plus
            belles réalisations
          </p>
        </div>
      </div>

      {/* Featured work section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Nos réalisations phares</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden h-80 group cursor-pointer ethnic-border"
                onClick={() => setSelectedItem(item)}
              >
                <div className="w-full h-full bg-gradient-to-br from-bronze to-gold/50 relative">
                  <div className="absolute inset-0 opacity-20">
                    <EthnicPattern />
                  </div>
                  <div className="absolute top-4 left-4 text-background/80">
                    {item.category.includes("coiffure") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                        <path d="M7 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                        <path d="M10 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                        <path d="M17 3c-2.2 0-4 1.8-4 4v9" />
                        <path d="M21 13H3" />
                      </svg>
                    )}
                    {item.category.includes("soins-visage") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="10" r="3" />
                        <path d="M7 16.3c.4.9 1.5 1.7 2.5 1.7h5c1 0 2.1-.8 2.5-1.7" />
                      </svg>
                    )}
                    {item.category.includes("manucure") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 14v.01" />
                        <path d="M11 6c3 0 3 8.3 8 8.3" />
                        <path d="M15.1 18H8.9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1" />
                        <path d="M6 12v-3" />
                        <path d="M18 17l-3-2v3l3 2z" />
                      </svg>
                    )}
                    {item.category.includes("maquillage") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 9a5 5 0 0 0 10 0" />
                        <path d="M12 3v6" />
                        <path d="M8 3h8l1 6H7l1-6Z" />
                        <path d="M16 20l2-8a5 5 0 0 0-12 0l2 8Z" />
                        <path d="M10 14v.01" />
                        <path d="M14 14v.01" />
                      </svg>
                    )}
                    {item.category.includes("epilation") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19.9 13.5c-1.4 1.4-4.3 1.5-9.9-4.1s-5.5-8.5-4.1-9.9c1.4-1.4 4.3-1.5 9.9 4.1s5.5 8.5 4.1 9.9z" />
                        <path d="m6.1 7.9 5.5 5.5" />
                        <path d="M14 16.8c-.8.8-6.5-3.5-6.5-3.5s-1-1.8 0-2.8" />
                        <path d="M16.8 19.6c-.6.6-7.1-5-7.1-5S8 11.3 9.6 9.7" />
                        <path d="M20 23a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v1h15v-1z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                  <h3 className="text-white font-medium text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio gallery section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Galerie complète</h2>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "all"
                  ? "bg-gold text-background"
                  : "hover:bg-gold/10 border border-gold/30"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveFilter("coiffure")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "coiffure"
                  ? "bg-gold text-background"
                  : "hover:bg-gold/10 border border-gold/30"
              }`}
            >
              Coiffure
            </button>
            <button
              onClick={() => setActiveFilter("soins-visage")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "soins-visage"
                  ? "bg-gold text-background"
                  : "hover:bg-gold/10 border border-gold/30"
              }`}
            >
              Soins visage
            </button>
            <button
              onClick={() => setActiveFilter("manucure")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "manucure"
                  ? "bg-gold text-background"
                  : "hover:bg-gold/10 border border-gold/30"
              }`}
            >
              Manucure
            </button>
            <button
              onClick={() => setActiveFilter("epilation")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "epilation"
                  ? "bg-gold text-background"
                  : "hover:bg-gold/10 border border-gold/30"
              }`}
            >
              Épilation
            </button>
            <button
              onClick={() => setActiveFilter("maquillage")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "maquillage"
                  ? "bg-gold text-background"
                  : "hover:bg-gold/10 border border-gold/30"
              }`}
            >
              Maquillage
            </button>
          </div>

          {/* Grille du portfolio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden h-64 relative border border-border hover:border-gold/50 rounded-md transition-all"
                onClick={() => setSelectedItem(item)}
              >
                <div className="w-full h-full bg-gradient-to-r from-card to-background relative">
                  <div className="absolute inset-0 opacity-10">
                    <EthnicPattern />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.category.includes("coiffure") && (
                      <div className="text-gold opacity-30 transform group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                          <path d="M7 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                          <path d="M10 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                          <path d="M17 3c-2.2 0-4 1.8-4 4v9" />
                          <path d="M21 13H3" />
                        </svg>
                      </div>
                    )}
                    {item.category.includes("soins-visage") && (
                      <div className="text-gold opacity-30 transform group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="10" r="3" />
                          <path d="M7 16.3c.4.9 1.5 1.7 2.5 1.7h5c1 0 2.1-.8 2.5-1.7" />
                        </svg>
                      </div>
                    )}
                    {item.category.includes("manucure") && (
                      <div className="text-gold opacity-30 transform group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 14v.01" />
                          <path d="M11 6c3 0 3 8.3 8 8.3" />
                          <path d="M15.1 18H8.9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1" />
                          <path d="M6 12v-3" />
                          <path d="M18 17l-3-2v3l3 2z" />
                        </svg>
                      </div>
                    )}
                    {item.category.includes("maquillage") && (
                      <div className="text-gold opacity-30 transform group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 9a5 5 0 0 0 10 0" />
                          <path d="M12 3v6" />
                          <path d="M8 3h8l1 6H7l1-6Z" />
                          <path d="M16 20l2-8a5 5 0 0 0-12 0l2 8Z" />
                          <path d="M10 14v.01" />
                          <path d="M14 14v.01" />
                        </svg>
                      </div>
                    )}
                    {item.category.includes("epilation") && (
                      <div className="text-gold opacity-30 transform group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19.9 13.5c-1.4 1.4-4.3 1.5-9.9-4.1s-5.5-8.5-4.1-9.9c1.4-1.4 4.3-1.5 9.9 4.1s5.5 8.5 4.1 9.9z" />
                          <path d="m6.1 7.9 5.5 5.5" />
                          <path d="M14 16.8c-.8.8-6.5-3.5-6.5-3.5s-1-1.8 0-2.8" />
                          <path d="M16.8 19.6c-.6.6-7.1-5-7.1-5S8 11.3 9.6 9.7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 bg-card relative">
        <div className="absolute inset-0 opacity-[0.03]">
          <EthnicPattern />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-title mb-12">Ce que disent nos clients</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-md shadow-sm border border-border relative">
              <svg
                className="w-10 h-10 text-gold/20 absolute top-4 right-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 italic text-muted-foreground">
                &quot;Je suis cliente régulière depuis plus d&apos;un an et je
                ne peux que recommander Beautés du Monde. Leur expertise en
                matière de coiffure est incomparable.&quot;
              </p>
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="font-medium">Sophie Martin</p>
                  <p className="text-sm text-muted-foreground">
                    Cliente depuis 2023
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-md shadow-sm border border-border relative">
              <svg
                className="w-10 h-10 text-gold/20 absolute top-4 right-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 italic text-muted-foreground">
                &quot;Les soins du visage sont exceptionnels, j&apos;ai vu une
                réelle différence sur ma peau. L&apos;ambiance est chaleureuse
                et le personnel très professionnel.&quot;
              </p>
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="font-medium">Nathalie Durand</p>
                  <p className="text-sm text-muted-foreground">
                    Cliente depuis 2022
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-md shadow-sm border border-border relative">
              <svg
                className="w-10 h-10 text-gold/20 absolute top-4 right-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 italic text-muted-foreground">
                &quot;Le service de manucure est impeccable, avec une attention
                aux détails impressionnante. Je recommande particulièrement leur
                nail art qui est très créatif.&quot;
              </p>
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="font-medium">Marie Lefebvre</p>
                  <p className="text-sm text-muted-foreground">
                    Cliente depuis 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading mb-6">
            Prêt à vous faire sublimer ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour mettre en valeur votre
            beauté naturelle avec des techniques inspirées des traditions du
            monde entier.
          </p>
          <Link href="/contact">
            <EthnicButton size="lg">Prendre rendez-vous</EthnicButton>
          </Link>
        </div>
      </section>

      {/* Modal pour afficher l'élément sélectionné */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-background p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96 mb-4 bg-gradient-to-r from-bronze/30 to-gold/30 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <EthnicPattern />
              </div>
              <div className="text-gold">
                {selectedItem.category.includes("coiffure") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="96"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                    <path d="M7 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                    <path d="M10 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                    <path d="M17 3c-2.2 0-4 1.8-4 4v9" />
                    <path d="M21 13H3" />
                  </svg>
                )}
                {selectedItem.category.includes("soins-visage") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="96"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M7 16.3c.4.9 1.5 1.7 2.5 1.7h5c1 0 2.1-.8 2.5-1.7" />
                  </svg>
                )}
                {selectedItem.category.includes("manucure") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="96"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 14v.01" />
                    <path d="M11 6c3 0 3 8.3 8 8.3" />
                    <path d="M15.1 18H8.9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1" />
                    <path d="M6 12v-3" />
                    <path d="M18 17l-3-2v3l3 2z" />
                  </svg>
                )}
                {selectedItem.category.includes("maquillage") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="96"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 9a5 5 0 0 0 10 0" />
                    <path d="M12 3v6" />
                    <path d="M8 3h8l1 6H7l1-6Z" />
                    <path d="M16 20l2-8a5 5 0 0 0-12 0l2 8Z" />
                    <path d="M10 14v.01" />
                    <path d="M14 14v.01" />
                  </svg>
                )}
                {selectedItem.category.includes("epilation") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="96"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19.9 13.5c-1.4 1.4-4.3 1.5-9.9-4.1s-5.5-8.5-4.1-9.9c1.4-1.4 4.3-1.5 9.9 4.1s5.5 8.5 4.1 9.9z" />
                    <path d="m6.1 7.9 5.5 5.5" />
                    <path d="M14 16.8c-.8.8-6.5-3.5-6.5-3.5s-1-1.8 0-2.8" />
                    <path d="M16.8 19.6c-.6.6-7.1-5-7.1-5S8 11.3 9.6 9.7" />
                  </svg>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-heading mb-2">{selectedItem.title}</h3>
            <div className="flex gap-2 mb-4">
              {selectedItem.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {cat === "coiffure"
                    ? "Coiffure"
                    : cat === "soins-visage"
                    ? "Soins visage"
                    : cat === "manucure"
                    ? "Manucure"
                    : cat === "epilation"
                    ? "Épilation"
                    : cat === "maquillage"
                    ? "Maquillage"
                    : cat}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              Cette prestation fait partie de nos services signature chez
              Beautés du Monde. Nos experts qualifiés utilisent des techniques
              innovantes et des produits de qualité pour garantir un résultat
              exceptionnel.
            </p>
            <div className="flex justify-end">
              <button
                className="text-sm text-muted-foreground hover:text-foreground mr-4"
                onClick={() => setSelectedItem(null)}
              >
                Fermer
              </button>
              <Link href="/services">
                <EthnicButton variant="primary" size="sm">
                  Réserver ce service
                </EthnicButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
