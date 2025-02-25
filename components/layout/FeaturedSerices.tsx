import { EthnicButton } from "@/components/ui/ethnic-button";
import { EthnicPattern } from "@/components/ui/EthnicPattern";
import Link from "next/link";

const FeaturedServices = () => {
  // Services mis en avant avec leurs descriptions
  const featuredServices = [
    {
      title: "Hammam & Spa",
      description:
        "Détendez-vous dans notre hammam traditionnel et découvrez nos rituels de bien-être inspirés des quatre coins du monde.",
      link: "/services#hammam",
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
          className="text-gold mb-2"
        >
          <path d="M15.2 10.12c1.22-1.85 1.99-3.76 2.77-5.47a14.76 14.76 0 0 1 1.91 2.45" />
          <path d="M16.25 7.1c-.23-.43-.46-.86-.69-1.29" />
          <path d="M10.75 14.07a22.87 22.87 0 0 0-1.79-3.13 22.75 22.75 0 0 0-1.51-2.13" />
          <path d="M7.9 8.81a22.87 22.87 0 0 0-1.2-1.74c-.68-.88-1.4-1.64-2.19-2.13" />
          <path d="M5.08 5.32c-.39-.28-.79-.51-1.22-.68" />
          <path d="M10.3 9.13c.21-.21.38-.42.52-.63" />
          <path d="M15.7 13.83a7.3 7.3 0 0 0-1.75-1.89" />
          <path d="M11.5 15.28a22.14 22.14 0 0 0-2.2-1.95" />
          <path d="M7.75 14.77a15.07 15.07 0 0 0-2.35-1.22" />
          <path d="M4.39 14.04c-.64-.28-1.28-.46-1.93-.57" />
          <path d="M2 21L8 18" />
          <path d="M17 21l-5-3" />
          <path d="M22 21l-5-3" />
        </svg>
      ),
    },
    {
      title: "Coiffure",
      description:
        "Entre mèches, ombré hair et lissages personnalisés, sublimez votre chevelure grâce à nos techniques expertes.",
      link: "/services#coiffure",
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
          className="text-gold mb-2"
        >
          <path d="M18 9v6" />
          <path d="M6 9v6" />
          <path d="M12 9v6" />
          <circle cx="6" cy="5" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="18" cy="5" r="1" />
          <circle cx="6" cy="19" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="18" cy="19" r="1" />
        </svg>
      ),
    },
    {
      title: "Soins du Visage",
      description:
        "Révélez votre éclat naturel avec nos rituels de soins visage Maria Galland, adaptés à tous les types de peau.",
      link: "/services#visage",
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
          className="text-gold mb-2"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 16.3c.4.9 1.5 1.7 2.5 1.7h5c1 0 2.1-.8 2.5-1.7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">
          Nos Services Signature
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg relative overflow-hidden group border border-muted transition-all duration-300 hover:border-gold/30"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <EthnicPattern />
              </div>
              <div className="flex flex-col items-start h-full">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-xl font-heading mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <EthnicButton variant="outline" size="sm">
                    Découvrir
                  </EthnicButton>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <EthnicButton variant="primary" size="default">
              Tous nos services
            </EthnicButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
