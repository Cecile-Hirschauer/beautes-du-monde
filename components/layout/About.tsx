import Image from "next/image";
import { EthnicPattern } from "../ui/EthnicPattern";

export default function About() {
  return (
    <section className="py-16 px-4 relative bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] overflow-hidden ethnic-border">
              <Image
                src="/images/hair-salon-workplace.jpg"
                alt="Beautés du Monde"
                fill={true}
              />
              <EthnicPattern
                className="absolute top-0 left-0 w-full h-full"
                opacity={0.2}
              />
            </div>
          </div>
          <div>
            <h2 className="section-title">Notre Philosophie</h2>
            <p className="mb-4">
              Chez Beautés du Monde, nous puisons notre inspiration dans les
              rituels de beauté des quatre coins du monde pour vous offrir une
              expérience unique et personnalisée.
            </p>
            <p className="mb-4">
              Notre équipe de professionnels passionnés combine expertise
              technique et connaissance des traditions pour sublimer votre
              beauté naturelle.
            </p>
            <p>
              Chaque soin est une invitation au voyage, une parenthèse de
              bien-être où l&apos;excellence et l&apos;authenticité sont au
              rendez-vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
