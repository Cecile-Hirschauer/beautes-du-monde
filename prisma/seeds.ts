import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import servicesData from "../data/services_beautes_du_monde.json";

const prisma = new PrismaClient();

async function main() {
  console.log(`🌱 Début de l'importation des données...`);

  // Supprimer les données existantes (attention en production)
  await prisma.service.deleteMany({});
  await prisma.category.deleteMany({});

  console.log("✅ Données existantes supprimées");

  // Fonction pour créer un slug à partir d'une chaîne
  function createSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");
  }

  // Fonction pour extraire un displayName à partir du nom de catégorie
  function getDisplayName(categoryName: string): string {
    return categoryName
      .replace("NOS ", "")
      .replace(" / PAR TELEPHONE RESA", "")
      .trim();
  }

  // Importer chaque catégorie et ses services
  for (const [categoryName, services] of Object.entries(servicesData)) {
    // Ignorer les catégories vides
    if (!Array.isArray(services) || services.length === 0) continue;

    // Filtrer les services invalides
    const validServices = services.filter(
      (service) => !service.nom.includes("Ce site est exclusivement")
    );

    if (validServices.length === 0) continue;

    // Créer la catégorie
    const displayName = getDisplayName(categoryName);
    const slug = createSlug(displayName);

    const category = await prisma.category.create({
      data: {
        name: categoryName,
        displayName: displayName,
        slug: slug,
        // Obtenir une description à partir du premier service avec une description
        description:
          validServices.find((s) => s.description)?.description || "",
      },
    });

    console.log(`✅ Catégorie créée: ${displayName}`);

    // Créer les services pour cette catégorie
    for (const service of validServices) {
      await prisma.service.create({
        data: {
          name: service.nom,
          description: service.description || "",
          price: service.prix,
          duration: service.duree,
          // Vérifier si c'est une promotion
          isPromotion: categoryName === "NOS SUPER PROMOTIONS",
          categoryId: category.id,
          slug: createSlug(service.nom),
        },
      });
    }

    console.log(
      `✅ ${validServices.length} services créés pour ${displayName}`
    );
  }

  // Créer un utilisateur admin
  const adminExists = await prisma.user.findFirst({
    where: { role: "ADMIN" },
  });

  if (!adminExists) {
    const hashedPassword = await hash("adminpassword", 10);

    await prisma.user.create({
      data: {
        name: "Admin",
        email: "admin@beautesdumonde.fr",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    console.log("✅ Utilisateur admin créé avec succès");
  } else {
    console.log("✅ Un utilisateur admin existe déjà");
  }

  console.log("🎉 Importation terminée avec succès!");
}

main()
  .catch((e) => {
    console.error("❌ Erreur pendant l'importation:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
