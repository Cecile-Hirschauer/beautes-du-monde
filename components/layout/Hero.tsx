import Image from "next/image";
import Link from "next/link";
import { EthnicButton } from "../ui/ethnic-button";
import { EthnicPattern } from "../ui/EthnicPattern";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center px-4 overflow-hidden">
      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-background/60 z-10"></div>

      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.jpg"
          alt="Spa et bien-être"
          fill={true}
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Motif ethnique superposé */}
      <div className="absolute inset-0 z-20">
        <EthnicPattern asBackground opacity={0.15} />
      </div>

      <div className="container mx-auto relative z-30">
        <div className="max-w-2xl">
          <h1 className="mb-6 tracking-tight">
            <span className="block text-gold">Beautés du Monde</span>
            <span className="block">Éveillez votre beauté naturelle</span>
          </h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Découvrez nos soins esthétiques et services de coiffure inspirés par
            les traditions de beauté du monde entier.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services">
              <EthnicButton size="lg">Découvrir nos services</EthnicButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
