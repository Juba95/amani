import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'evenements/paris-air-show';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Paris Air Show — Transport Salon du Bourget | Amani Limousines',
  description: 'Transport VIP pour le Salon International de l\'Aéronautique du Bourget. Transferts exposants, délégations gouvernementales, accueil FBO. Convois coordonnés.',
  canonical: 'https://www.amani-limousines.com/evenements/paris-air-show',
});

export default function ParisAirShowPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Événement — SIAE Le Bourget</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé Paris Air Show — Salon du Bourget, transport officiel')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Le Salon International de l\'Aéronautique et de l\'Espace du Bourget est le plus grand salon aéronautique au monde. Il se tient tous les deux ans en juin, et concentre en une semaine des centaines de délégations officielles, des ministres, des PDG de constructeurs et des acheteurs de compagnies aériennes du monde entier. Le transport Paris Air Show Le Bourget est une logistique à part entière.')}
          </p>
        </div>
      </section>

      {/* Contexte */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Un salon qui impose sa logistique</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pendant le SIAE, les routes autour du Bourget sont saturées. Les accréditations véhicule
            sont vérifiées à l'entrée du périmètre sécurisé. Les délégations gouvernementales
            bénéficient d'accès dédiés. Nos chauffeurs sont briefés bien en amont sur les plans
            de circulation spécifiques au salon, les itinéraires bis et les créneaux d'accès
            réservés aux véhicules accrédités.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Transferts CDG → Bourget</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              La grande majorité des délégations internationales arrive à Charles de Gaulle.
              Le Bourget est à 15 km de CDG — 20 à 30 minutes selon la circulation salon.
              Nous organisons des flux de navettes coordonnées pour les exposants qui
              réceptionnent plusieurs arrivées par jour depuis CDG.
            </p>
          </div>
          <div>
            <h2 className="heading">Convois délégations gouvernementales</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Les délégations ministérielles et les acheteurs officiels de compagnies nationales
              nécessitent des convois coordonnés avec communication radio. Nous intervenons
              en coordination directe avec les équipes de sécurité et les handlers du SIAE.
            </p>
          </div>
        </div>
      </section>

      {/* FBO et aviation privée */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Accueil FBO et aviation privée</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le Bourget héberge en parallèle du salon une intense activité d'aviation d'affaires.
            Les plus grands constructeurs font venir leurs clients en jet pour des présentations
            privées. Nous assurons les transferts depuis et vers les FBO du Bourget, avec des
            chauffeurs autorisés à entrer dans les zones réservées sur présentation de l'accréditation
            fournie par votre handler ou votre constructeur.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}
