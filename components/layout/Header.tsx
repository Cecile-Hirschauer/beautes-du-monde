import Link from "next/link";
import { EthnicPattern } from "../ui/EthnicPattern";

export function Header() {
  return (
    <header className="relative border-b border-border">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-heading text-2xl font-bold text-gold">
            Beautés du Monde
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Accueil
            </Link>
            <Link
              href="/services"
              className="hover:text-gold transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-gold transition-colors"
            >
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <button className="text-foreground" aria-label="Menu">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
        <EthnicPattern opacity={0.5} height="9px" />
      </div>
    </header>
  );
}
