import Link from "next/link";
import { EthnicPattern } from "../ui/EthnicPattern";

export function Footer() {
  return (
    <footer className="bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <EthnicPattern />
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl mb-4 text-gold">
              Beautés du Monde
            </h3>
            <p className="text-muted-foreground">
              Des soins esthétiques et services de coiffure inspirés des
              traditions du monde entier.
            </p>
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
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p>99 Av. Simon Bolivar</p>
              <p>75019 Paris</p>
              <p className="mt-2">Tél: 01 23 45 67 89</p>
              <p>Email: contact@beautesdumonde.fr</p>
            </address>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Horaires</h4>
            <ul className="text-muted-foreground">
              <li className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span>9h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi:</span>
                <span>10h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche:</span>
                <span>Fermé</span>
              </li>
            </ul>
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
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-gold"
            >
              Gestion des cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
