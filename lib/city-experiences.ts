/**
 * Catalogue d'expériences par ville pour les pages « chauffeur privé + ville ».
 * Contenu SEO unique en français — distances, lieux et durées réels.
 * Complémentaire de lib/experiences.ts (hub) : aucune expérience dupliquée.
 */

export interface CityExperience {
  title: string;      // ex: "Route des vins de Provence"
  teaser: string;     // 25-40 mots, factuel et évocateur, ton luxe sobre
  duration: string;   // ex: "Journée complète" / "Demi-journée" / "3-4 heures" / "Soirée"
  price: string;      // prix indicatif en euros, ex: "590" (nombre seul, sans €)
}

export const CITY_EXPERIENCES: Record<string, { city: string; experiences: CityExperience[] }> = {
  'chauffeur-prive-paris': {
    city: 'Paris',
    experiences: [
      {
        title: 'Shopping rue du Faubourg Saint-Honoré',
        teaser: 'Hermès au 24 Faubourg, avenue Montaigne, place Vendôme : votre chauffeur vous dépose devant chaque maison, garde vos achats à bord et vous attend entre chaque adresse.',
        duration: 'Demi-journée',
        price: '450',
      },
      {
        title: 'Fontainebleau & Vaux-le-Vicomte',
        teaser: 'À 60 km au sud de Paris, deux chefs-d’œuvre en une journée : le château de François Ier et celui de Nicolas Fouquet, qui inspira Versailles. Déjeuner à Barbizon.',
        duration: 'Journée complète',
        price: '790',
      },
      {
        title: 'Chantilly, château et Grandes Écuries',
        teaser: 'À 50 minutes au nord de Paris, le domaine des princes de Condé : le musée Condé et sa collection de peintures, les Grandes Écuries, la crème Chantilly à sa source.',
        duration: 'Demi-journée',
        price: '490',
      },
      {
        title: 'Reims, cathédrale des sacres',
        teaser: 'À 145 km à l’est de Paris, la cathédrale gothique où furent sacrés trente-trois rois de France, les vitraux de Chagall et la ville art déco reconstruite après 1918.',
        duration: 'Journée complète',
        price: '850',
      },
      {
        title: 'Soirée gastronomique & Seine',
        teaser: 'Dépose devant votre table étoilée — Le Cinq, Arpège ou l’adresse de votre choix — puis embarquement privé au port Debilly pour une croisière sur la Seine. Le véhicule vous attend au débarcadère.',
        duration: 'Soirée',
        price: '390',
      },
    ],
  },
  'chauffeur-prive-nice': {
    city: 'Nice',
    experiences: [
      {
        title: 'Èze et les trois Corniches',
        teaser: 'À 12 km de Nice, le village médiéval d’Èze domine la mer à 429 mètres. Montée par la Basse Corniche, retour par la Grande Corniche — le plus beau balcon de la Riviera.',
        duration: '3-4 heures',
        price: '420',
      },
      {
        title: 'Saint-Paul-de-Vence & Fondation Maeght',
        teaser: 'À 20 km de Nice, le village d’artistes où vécut Chagall, la Colombe d’Or et la Fondation Maeght — Miró, Giacometti, Calder dans les pins. Déjeuner sur les remparts.',
        duration: 'Demi-journée',
        price: '490',
      },
      {
        title: 'Arrière-pays niçois, gorges du Loup',
        teaser: 'Tourrettes-sur-Loup et ses violettes, les gorges du Loup, Gourdon perché à 758 mètres au-dessus de la vallée : une journée hors du littoral, à moins d’une heure de la Promenade.',
        duration: 'Journée complète',
        price: '750',
      },
      {
        title: 'Menton, citrons et jardins',
        teaser: 'À 30 km de Nice, la ville la plus douce de France : vieille ville aux façades ocre, jardin Serre de la Madone, salle des mariages décorée par Cocteau. Retour par Roquebrune-Cap-Martin.',
        duration: 'Demi-journée',
        price: '460',
      },
      {
        title: 'Soirée à Monte-Carlo',
        teaser: 'À 20 km de la Promenade des Anglais, dîner au Louis XV ou soirée à l’Opéra Garnier de Monaco, dépose devant le Casino. Votre chauffeur reste à disposition jusqu’au retour.',
        duration: 'Soirée',
        price: '390',
      },
    ],
  },
  'chauffeur-prive-cannes': {
    city: 'Cannes',
    experiences: [
      {
        title: 'Îles de Lérins, dépose au Vieux-Port',
        teaser: 'Dépose au quai Laubeuf, quinze minutes de traversée vers Sainte-Marguerite et son fort royal, ou Saint-Honorat et l’abbaye où les moines cultivent la vigne. Le véhicule vous attend au retour.',
        duration: 'Demi-journée',
        price: '400',
      },
      {
        title: 'Grasse, capitale du parfum',
        teaser: 'À 17 km de la Croisette, les maisons Fragonard, Molinard et Galimard ouvrent leurs ateliers : création de votre parfum sur mesure, visite des champs de rose de mai en saison.',
        duration: 'Demi-journée',
        price: '450',
      },
      {
        title: 'Mougins, village des gastronomes',
        teaser: 'À 8 km de Cannes, le village circulaire où Picasso vécut ses quinze dernières années. Dîner dans l’une de ses tables réputées, musée d’Art classique, retour de nuit sans contrainte.',
        duration: 'Soirée',
        price: '350',
      },
      {
        title: 'Corniche d’Or et massif de l’Estérel',
        teaser: 'De Théoule-sur-Mer à Saint-Raphaël, 30 km de route littorale entre les roches rouges de l’Estérel et la Méditerranée. Arrêts au cap du Dramont et à Agay, déjeuner les pieds dans l’eau.',
        duration: 'Demi-journée',
        price: '480',
      },
      {
        title: 'Soirée Croisette & Casino',
        teaser: 'Dîner à La Palme d’Or ou sur une plage privée de la Croisette, puis Casino Barrière Le Croisette. Dépose au tapis, véhicule en attente toute la soirée, retour à votre villa ou hôtel.',
        duration: 'Soirée',
        price: '380',
      },
    ],
  },
  'chauffeur-prive-monaco': {
    city: 'Monaco',
    experiences: [
      {
        title: 'Le circuit du Grand Prix en berline',
        teaser: 'Les 3,337 km du tracé mythique sur route ouverte : Sainte-Dévote, la montée du Casino, le virage du Fairmont, le tunnel, la Rascasse. Commentaires de votre chauffeur, arrêts photo compris.',
        duration: '2-3 heures',
        price: '320',
      },
      {
        title: 'Vintimille, l’Italie du vendredi',
        teaser: 'À 20 minutes de la Principauté, le grand marché du vendredi de Vintimille : cuirs, cachemires et produits ligures. Déjeuner de pâtes fraîches sur le port avant le retour par la Basse Corniche.',
        duration: 'Demi-journée',
        price: '420',
      },
      {
        title: 'Sanremo et la Riviera dei Fiori',
        teaser: 'À 40 km de Monaco, la ville du festival italien : casino Belle Époque, vieille ville de la Pigna, boutiques de la via Matteotti. Dîner de gambas de San Remo avant le retour.',
        duration: 'Journée complète',
        price: '720',
      },
      {
        title: 'La Turbie et Èze, balcons sur le Rocher',
        teaser: 'À 10 minutes au-dessus de Monaco, le Trophée d’Auguste domine la Principauté depuis 480 mètres. Puis Èze, son jardin exotique et la Chèvre d’Or pour déjeuner face à la mer.',
        duration: '3-4 heures',
        price: '400',
      },
      {
        title: 'Soirée Casino de Monte-Carlo',
        teaser: 'Arrivée en berline sur la place du Casino, dîner au Grill de l’Hôtel de Paris au huitième étage, salons privés du Casino conçu par Charles Garnier. Votre chauffeur vous attend, sans limite d’heure.',
        duration: 'Soirée',
        price: '450',
      },
    ],
  },
  'chauffeur-prive-saint-tropez': {
    city: 'Saint-Tropez',
    experiences: [
      {
        title: 'Journée plage à Pampelonne',
        teaser: 'À 5 km du village, les 4,5 km de sable de Pampelonne : dépose au Club 55 ou à La Réserve à la Plage, navettes à la demande vers le village, retour au coucher du soleil.',
        duration: 'Journée complète',
        price: '700',
      },
      {
        title: 'Port-Grimaud et Grimaud',
        teaser: 'À 7 km de Saint-Tropez, la cité lacustre dessinée par François Spoerry en 1966 — canaux, ponts et coches d’eau — puis le village médiéval de Grimaud et son château en ruine.',
        duration: 'Demi-journée',
        price: '420',
      },
      {
        title: 'Vignobles de la presqu’île',
        teaser: 'Château Minuty, Château des Marres, Domaines Ott à quelques kilomètres du port : dégustations de rosés côtes-de-provence entre vignes et mer. Vous goûtez chaque cuvée, votre chauffeur conduit.',
        duration: 'Demi-journée',
        price: '480',
      },
      {
        title: 'Gassin et Ramatuelle au couchant',
        teaser: 'Deux villages perchés classés au-dessus du golfe : Gassin et sa table d’orientation à 200 mètres, Ramatuelle et ses ruelles en escargot. Apéritif face aux îles d’Or, dîner au village.',
        duration: 'Soirée',
        price: '350',
      },
      {
        title: 'Nuit tropézienne',
        teaser: 'Dîner sur le port ou à La Vague d’Or, puis Les Caves du Roy à l’hôtel Byblos. Votre chauffeur vous évite la recherche de voiturier et vous ramène à votre villa, à toute heure.',
        duration: 'Soirée',
        price: '400',
      },
    ],
  },
  'chauffeur-prive-lyon': {
    city: 'Lyon',
    experiences: [
      {
        title: 'Beaujolais des pierres dorées',
        teaser: 'À 35 km au nord de Lyon, Oingt — classé parmi les plus beaux villages de France —, Theizé et Bagnols : dégustations chez les vignerons, déjeuner dans une auberge des coteaux.',
        duration: 'Journée complète',
        price: '750',
      },
      {
        title: 'Côte-Rôtie et Condrieu',
        teaser: 'À 35 km au sud, les coteaux vertigineux de la Côte-Rôtie plongent sur le Rhône. Dégustations de syrah et de viognier à Ampuis et Condrieu, détour par Vienne la gallo-romaine.',
        duration: 'Journée complète',
        price: '790',
      },
      {
        title: 'Soirée bouchons de la Presqu’île',
        teaser: 'Quenelle de brochet, tablier de sapeur et pots de côtes-du-rhône dans un bouchon certifié des rues Mercière ou des Marronniers. Dépose au restaurant, retour à votre hôtel sans chercher de taxi.',
        duration: 'Soirée',
        price: '300',
      },
      {
        title: 'Pérouges, cité médiévale',
        teaser: 'À 35 km au nord-est de Lyon, la cité de tisserands du XVe siècle, intacte sur sa colline de la Dombes : remparts, place du Tilleul et galette de Pérouges tiède au sucre.',
        duration: 'Demi-journée',
        price: '430',
      },
      {
        title: 'Fourvière et traboules de la Croix-Rousse',
        teaser: 'Le panorama depuis l’esplanade de Fourvière, les théâtres romains, puis les traboules des canuts sur les pentes de la Croix-Rousse. Votre chauffeur vous reprend en bas de chaque descente.',
        duration: '3-4 heures',
        price: '350',
      },
    ],
  },
  'chauffeur-prive-bordeaux': {
    city: 'Bordeaux',
    experiences: [
      {
        title: 'Saint-Émilion, village et grands crus',
        teaser: 'À 40 km de Bordeaux, la cité médiévale classée UNESCO, son église monolithe creusée dans le calcaire et deux propriétés classées — dégustations organisées selon vos préférences.',
        duration: 'Journée complète',
        price: '790',
      },
      {
        title: 'Médoc, la route des châteaux',
        teaser: 'La D2 vers le nord : Margaux, Saint-Julien, Pauillac et leurs façades du XVIIIe. Visites et dégustations dans deux crus classés 1855, déjeuner face aux vignes à Pauillac.',
        duration: 'Journée complète',
        price: '850',
      },
      {
        title: 'Arcachon et la dune du Pilat',
        teaser: 'À 65 km de Bordeaux, la plus haute dune d’Europe — près de 106 mètres face au banc d’Arguin. Dégustation d’huîtres au Cap Ferret ou au village de l’Herbe, retour par la Ville d’Hiver.',
        duration: 'Journée complète',
        price: '780',
      },
      {
        title: 'Sauternes et les Graves',
        teaser: 'À 45 km au sud, le vignoble des liquoreux : Château d’Yquem en majesté, dégustations à Sauternes et Barsac, arrêt au château de Roquetaillade. L’or du Bordelais en une demi-journée.',
        duration: 'Demi-journée',
        price: '520',
      },
      {
        title: 'Soirée bordelaise, quais et grandes tables',
        teaser: 'Le miroir d’eau et la place de la Bourse illuminée, dîner au Pressoir d’Argent ou dans une table des Chartrons, dépose et retour à votre hôtel. Bordeaux de nuit, sans contrainte.',
        duration: 'Soirée',
        price: '320',
      },
    ],
  },
  'chauffeur-prive-deauville': {
    city: 'Deauville',
    experiences: [
      {
        title: 'Honfleur et le Vieux Bassin',
        teaser: 'À 15 km de Deauville par la corniche, le port qui inspira Boudin et Monet : Vieux Bassin, église Sainte-Catherine tout en bois, galeries de la rue Haute. Déjeuner face aux mâts.',
        duration: 'Demi-journée',
        price: '400',
      },
      {
        title: 'Étretat, falaises et jardins',
        teaser: 'À 75 km par le pont de Normandie, l’Aiguille et la porte d’Aval qui fascinèrent Monet et Arsène Lupin. Marche sur la falaise d’Amont, visite des jardins d’Étretat, retour par Le Havre.',
        duration: 'Journée complète',
        price: '720',
      },
      {
        title: 'Côte Fleurie, de Trouville à Cabourg',
        teaser: 'Les planches de Trouville, les villas Belle Époque de Houlgate, le Grand Hôtel de Cabourg cher à Proust : 20 km de littoral normand entre deux bains de mer et un plateau de fruits de mer.',
        duration: 'Demi-journée',
        price: '420',
      },
      {
        title: 'Pays d’Auge, haras et route du cidre',
        teaser: 'Beuvron-en-Auge et ses colombages, la route du cidre de Cambremer, visite d’un haras et d’une distillerie de calvados. La Normandie des herbages, à 20 minutes des planches.',
        duration: 'Demi-journée',
        price: '450',
      },
      {
        title: 'Soirée casino et planches',
        teaser: 'Dîner au Ciro’s face à la mer, salons du Casino Barrière inauguré en 1912, dernier verre au bar du Normandy. Votre chauffeur vous raccompagne à votre villa, sans regarder l’heure.',
        duration: 'Soirée',
        price: '340',
      },
    ],
  },
  'chauffeur-prive-megeve': {
    city: 'Megève',
    experiences: [
      {
        title: 'Chamonix et l’Aiguille du Midi',
        teaser: 'À 35 km de Megève, dépose au pied du téléphérique de l’Aiguille du Midi : 3 842 mètres face au mont Blanc en vingt minutes de cabine. Déjeuner à Chamonix, retour par Combloux.',
        duration: 'Demi-journée',
        price: '460',
      },
      {
        title: 'Courmayeur, l’Italie par le tunnel',
        teaser: 'Les 11,6 km du tunnel du Mont-Blanc et vous voilà en Vallée d’Aoste : déjeuner de polenta et de jambon de Bosses à Courmayeur, boutiques de la via Roma, retour au chalet avant la nuit.',
        duration: 'Journée complète',
        price: '780',
      },
      {
        title: 'Annecy et son lac',
        teaser: 'À 60 km de Megève, la vieille ville entre canaux et Palais de l’Isle, puis le tour du lac par Talloires et son abbaye. Déjeuner au bord de l’eau, la plus limpide des pauses entre deux journées de ski.',
        duration: 'Journée complète',
        price: '750',
      },
      {
        title: 'Route des Aravis, fermes et reblochon',
        teaser: 'Le col des Aravis à 1 486 mètres, La Clusaz et le Grand-Bornand, dégustation de reblochon fermier dans une exploitation du val de Thônes. La Haute-Savoie des alpages, à une heure de Megève.',
        duration: 'Demi-journée',
        price: '440',
      },
      {
        title: 'Soirée trois étoiles au Flocons de Sel',
        teaser: 'Sur les hauteurs du Leutaz, la table triplement étoilée d’Emmanuel Renaut. Votre chauffeur gère la route enneigée à l’aller comme au retour — vous ne pensez qu’au menu.',
        duration: 'Soirée',
        price: '320',
      },
    ],
  },
  'chauffeur-prive-marseille': {
    city: 'Marseille',
    experiences: [
      {
        title: 'Cassis et la route des Crêtes',
        teaser: 'À 30 minutes de Marseille, le port de Cassis puis la route des Crêtes jusqu’au cap Canaille — les plus hautes falaises maritimes de France, 394 mètres au-dessus de la Méditerranée.',
        duration: 'Demi-journée',
        price: '420',
      },
      {
        title: 'Calanques, dépose à l’embarcadère',
        teaser: 'Dépose au port de Cassis ou à Callelongue pour rejoindre Sormiou, Morgiou et En-Vau par la mer ou les sentiers du parc national. Le véhicule vous récupère à l’heure convenue, serviettes fraîches à bord.',
        duration: 'Journée complète',
        price: '700',
      },
      {
        title: 'Aix-en-Provence sur les pas de Cézanne',
        teaser: 'À 30 km de Marseille, le cours Mirabeau et ses hôtels particuliers, l’atelier des Lauves où Cézanne peignit ses dernières toiles, la Sainte-Victoire en toile de fond. Marché aux fleurs le matin.',
        duration: 'Demi-journée',
        price: '440',
      },
      {
        title: 'Côte Bleue, de l’Estaque à Carry-le-Rouet',
        teaser: 'La côte que peignirent Braque et Dufy : l’Estaque, les calanques de Niolon et de Méjean, oursinade à Carry-le-Rouet en saison. Trente kilomètres de littoral préservé, à contre-courant des foules.',
        duration: 'Demi-journée',
        price: '430',
      },
      {
        title: 'Soirée corniche Kennedy',
        teaser: 'Le coucher de soleil sur les îles du Frioul depuis la corniche, dîner au Petit Nice — la table trois étoiles de Gérald Passedat face à la mer — puis retour par le Vieux-Port illuminé.',
        duration: 'Soirée',
        price: '360',
      },
    ],
  },
  'chauffeur-prive-chamonix': {
    city: 'Chamonix',
    experiences: [
      {
        title: 'Aiguille du Midi, 3 842 mètres',
        teaser: 'Dépose au pied du téléphérique de l’Aiguille du Midi, le plus haut d’Europe, pour un panorama à 360° sur le mont Blanc et la chaîne alpine. Le véhicule vous attend au retour, quel que soit l’horaire.',
        duration: 'Demi-journée',
        price: '380',
      },
      {
        title: 'Mer de Glace et grotte de glace',
        teaser: 'Le train à crémaillère du Montenvers mène au plus grand glacier de France, sa grotte sculptée chaque année et le musée de la Glaciologie. Dépose à la gare de départ, retour à l’heure choisie.',
        duration: 'Demi-journée',
        price: '380',
      },
      {
        title: 'Genève et le lac Léman',
        teaser: 'À 1h de route, la vieille ville de Genève, le jet d’eau, les quais du Léman et les boutiques horlogères. Une échappée suisse au départ de Chamonix, passage de frontière sans formalité.',
        duration: 'Journée complète',
        price: '650',
      },
      {
        title: 'Villages de la vallée : Argentière et Servoz',
        teaser: 'Argentière et son glacier, le col des Montets, le village préservé de Servoz au pied du massif — la Haute-Savoie hors des foules du centre-ville, à quelques minutes de Chamonix.',
        duration: 'Demi-journée',
        price: '360',
      },
      {
        title: 'Soirée savoyarde',
        teaser: 'Dîner de fondue ou de tartiflette dans un chalet du centre, les sommets éclairés par la lune sur le retour. Véhicule à disposition toute la soirée, aucun souci de route enneigée.',
        duration: 'Soirée',
        price: '340',
      },
    ],
  },
};
