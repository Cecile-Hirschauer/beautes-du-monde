"use client";

import ContactMap from "@/components/layout/ContactMap";
import { EthnicPattern } from "@/components/ui/EthnicPattern";
import { EthnicButton } from "@/components/ui/ethnic-button";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "information",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi - À remplacer par la logique réelle plus tard
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "information",
      message: "",
    });

    // Reset le message de succès après 5 secondes
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="w-full flex flex-col gap-5">
      {/* Hero section */}
      <div className="relative bg-gradient-to-b from-background to-card py-8">
        <div className="absolute inset-0 opacity-5">
          <EthnicPattern />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading mb-4 text-center">
            Contact
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Nous sommes à votre écoute pour toute question ou demande de devis
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact information */}
          <div>
            <h2 className="section-title">Nos Coordonnées</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <address className="not-italic text-muted-foreground">
                <p>Beautés du Monde</p>
                <p>99 Av. Simon Bolivar</p>
                <p>75019 Paris</p>
              </address>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <div className="text-muted-foreground">
                <p>Tél: 01 23 45 67 89</p>
                <p>Email: contact@beautesdumonde.fr</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Horaires</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div>Lundi - Vendredi:</div>
                <div>9h - 19h</div>
                <div>Samedi:</div>
                <div>10h - 18h</div>
                <div>Dimanche:</div>
                <div>Fermé</div>
              </div>
            </div>

            <div className="relative p-6 border border-gold/20 rounded-lg bg-card">
              <div className="absolute inset-0 opacity-5">
                <EthnicPattern />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-gold">
                  Comment nous trouver
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous sommes situés à proximité du métro Jaurès (lignes 2, 5 et
                  7bis) et du métro Bolivar (ligne 7bis).
                </p>
                <p className="text-muted-foreground mb-4">
                  Un parking public est disponible à 200m du salon.
                </p>

                {/* Import du composant carte */}
                <div className="mt-4">
                  <ContactMap className="h-[200px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="section-title">Formulaire de Contact</h2>

            {submitted ? (
              <div className="p-4 bg-gold/10 border border-gold rounded-md mb-6">
                <p className="font-medium text-gold">
                  Votre message a bien été envoyé ! Nous vous répondrons dans
                  les plus brefs délais.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Nom complet <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-md bg-card"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-md bg-card"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-border rounded-md bg-card"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Sujet <span className="text-gold">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-border rounded-md bg-card"
                >
                  <option value="information">
                    Demande d&apos;information
                  </option>
                  <option value="devis">Demande de devis</option>
                  <option value="reservation">Réservation</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-3 border border-border rounded-md bg-card resize-none"
                ></textarea>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Les champs marqués d&apos;un{" "}
                  <span className="text-gold">*</span> sont obligatoires
                </p>
                <EthnicButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </EthnicButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
