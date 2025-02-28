import Link from "next/link";
import { EthnicPattern } from "../ui/EthnicPattern";

export function Footer() {
  return (
    <footer className="bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <EthnicPattern />
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl mb-4 text-gold">
              Beautés du Monde
            </h3>
            <p className="text-muted-foreground">
              Des soins esthétiques et services de coiffure inspirés des
              traditions du monde entier.
            </p>

            {/* Section réseaux sociaux */}
            <div className="mt-6">
              <h4 className="font-heading text-lg mb-3">Suivez-nous</h4>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Horaires et Adresse</h4>
            <div className="text-muted-foreground mb-4">
              <div className="flex justify-between mb-1">
                <span>Lundi - Vendredi:</span>
                <span>9h - 19h</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Samedi:</span>
                <span>10h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche:</span>
                <span>Fermé</span>
              </div>
            </div>

            <address className="not-italic text-muted-foreground mt-4">
              <p>99 Av. Simon Bolivar</p>
              <p className="mb-2">75019 Paris</p>
              <p className="mb-2">
                <Link href="/contact" className="text-gold hover:underline">
                  Voir sur la carte →
                </Link>
              </p>
              <p>
                <Link
                  href="tel:0123456789"
                  className="hover:text-gold transition-colors"
                >
                  01 23 45 67 89
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Beautés du Monde. Tous droits
            réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/mentions-legales"
              className="text-sm text-muted-foreground hover:text-gold"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-sm text-muted-foreground hover:text-gold"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
