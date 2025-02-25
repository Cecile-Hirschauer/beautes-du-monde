import { ThemeProvider } from "@/components/theme-provider";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import "./globals.css";

export const metadata = {
  title: "Beautés du Monde | Salon de beauté et coiffure",
  description:
    "Découvrez nos soins esthétiques et services de coiffure inspirés par les traditions de beauté du monde entier.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
