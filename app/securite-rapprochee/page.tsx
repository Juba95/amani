import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Sécurité Rapprochée Paris — Transport Sécurisé & Garde du Corps | Amani Limousines',
  description:
    'Service de sécurité rapprochée et transport sécurisé à Paris. Escorte pour personnalités, dirigeants et diplomates. Véhicules banalisés, chauffeurs formés.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/securite-rapprochee',
  },
};

export default function SecuriteRapprochee() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Close protection — Paris</p>
          <h1 className="heading mt-3">
            <strong>Sécurité rapprochée et transport sécurisé à Paris</strong> —{' '}
            <em>discrétion avant tout</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            La sécurité rapprochée dans un contexte urbain comme Paris n'est pas qu'une affaire
            de véhicules blindés. C'est surtout une question d'anticipation, de discrétion et
            de choix d'itinéraires. Nos chauffeurs dédiés aux missions de{' '}
            <strong>protection rapprochée à Paris</strong> sont formés à la conduite de sécurité,
            à la lecture de l'environnement urbain et aux protocoles de communication avec les
            équipes de protection.
          </p>
        </div>
      </section>

      {/* Profil chauffeurs */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Des chauffeurs formés à la conduite de sécurité</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Les chauffeurs affectés aux missions de sécurité rapprochée ont reçu une formation
            spécifique à la conduite défensive et aux situations à risque. Ils connaissent
            les itinéraires alternatifs dans Paris, les accès réservés aux urgences et les
            points de dégagement rapide dans les quartiers sensibles. Ils travaillent en
            coordination directe avec les responsables de sécurité de vos clients.
          </p>
        </div>
      </section>

      {/* Dispositifs */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Véhicule ouvrier et suiveur</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Pour les personnalités à haute exposition médiatique ou politique, nous proposons
              des dispositifs en deux véhicules minimum : un véhicule principal et un véhicule
              suiveur. Les deux chauffeurs sont en communication constante. En cas d'incident,
              le protocole de dégagement est activé immédiatement.
            </p>
          </div>
          <div>
            <h2 className="heading">Véhicules banalisés</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Sur demande, tous nos véhicules sont disponibles sans aucun signe distinctif
              d'Amani Limousines. Berlines noires standard, immatriculations de série régulières :
              le véhicule ne se distingue pas du trafic parisien ordinaire, ce qui constitue
              souvent la meilleure protection.
            </p>
          </div>
        </div>
      </section>

      {/* Clientèle */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Profils de clientèle</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le service de <strong>chauffeur sécurité à Paris</strong> s'adresse aux dirigeants
            d'entreprise cotées sous contrainte de surveillance, aux personnalités publiques en
            déplacement à Paris (artistes, sportifs, influenceurs à très haute visibilité),
            aux diplomates en mission non officielle, et aux familles fortunées qui souhaitent
            un niveau de protection supplémentaire lors d'un séjour dans la capitale.
            Toutes les missions sont traitées en toute confidentialité. Aucun détail n'est
            partagé en dehors de l'équipe assignée à la mission.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}
