import About from "@/components/layout/About";
import FeaturedServices from "@/components/layout/FeaturedSerices";
import Hero from "@/components/layout/Hero";
export default function Home() {
  return (
    <main className="w-full flex flex-col gap-10">
      <Hero />
      <About />
      <FeaturedServices />
    </main>
  );
}
