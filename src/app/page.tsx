import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* Section Hero avec Slideshow */}
      <section className="relative h-[80vh] mt-16 overflow-hidden">
        {/* Diaporama d'images */}
        <div className="absolute inset-0 z-0">
          {/* Image 1 */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 opacity-100 animate-slideshow-1">
            <div className="relative h-full w-full">
              <Image
                src="/images/diaporama/slide1.jpg"
                alt="Exposition de sculpture contemporaine"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Image 2 */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 opacity-0 animate-slideshow-2">
            <div className="relative h-full w-full">
              <Image
                src="/images/diaporama/slide2.jpg"
                alt="Atelier de sculpture"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Image 3 */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 opacity-0 animate-slideshow-3">
            <div className="relative h-full w-full">
              <Image
                src="/images/diaporama/slide3.jpg"
                alt="Sculptures monumentales"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Contenu héros */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div className="container px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Art Culture Sculpture
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-delay">
              Association dédiée à la promotion de la sculpture contemporaine et à la formation des jeunes talents
            </p>
            <Link 
              href="/devenir-membre" 
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Rejoignez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* Section Présentations des personnalités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Nos Personnalités</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez les figures emblématiques qui animent notre association
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Christine Le Gall Adami */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary">
                  <Image 
                    src="/images/personnalites/christine.jpg" 
                    alt="Christine Le Gall Adami" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Christine Le Gall Adami</h3>
                <p className="text-primary font-medium mb-4">Présidente Fondatrice</p>
                <p className="text-gray-600 text-center">
                  Sculpteure reconnue avec plus de 30 ans d'expérience dans l'art contemporain. 
                  Elle a fondé l'association pour créer un réseau de soutien aux artistes sculpteurs 
                  et promouvoir leur travail auprès du grand public.
                </p>
              </div>
            </div>
            
            {/* Marie-Claude Goinard */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary">
                  <Image 
                    src="/images/personnalites/marie-claude.jpg" 
                    alt="Marie-Claude Goinard" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Marie-Claude Goinard</h3>
                <p className="text-primary font-medium mb-4">Directrice Artistique</p>
                <p className="text-gray-600 text-center">
                  Spécialisée dans la sculpture moderne et l'accompagnement des jeunes talents. 
                  Elle supervise les programmes de formation, les expositions et coordonne 
                  les relations avec les galeries et institutions culturelles.
                </p>
              </div>
            </div>
            
            {/* Emanuela Clerici */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary">
                  <Image 
                    src="/images/personnalites/emanuela.jpg" 
                    alt="Emanuela Clerici" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Emanuela Clerici</h3>
                <p className="text-primary font-medium mb-4">Curatrice et Historienne</p>
                <p className="text-gray-600 text-center">
                  Experte en sculpture européenne contemporaine, elle coordonne les relations 
                  internationales et les échanges culturels de l'association. Son expertise 
                  en histoire de l'art enrichit la vision et les projets de l'association.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Philosophie */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Notre Philosophie</h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl leading-relaxed mb-8 text-white/90">
              Art Culture Sculpture croit aux vertus du dialogue et des échanges culturels basés sur la solidarité 
              et la protection de la diversité culturelle. Notre réseau constitue un carrefour d'échanges entre 
              acteurs culturels, fondé sur la réflexion, le partage et la collaboration pour réaliser des projets 
              novateurs ensemble.
            </p>
            
            <p className="text-xl leading-relaxed mb-10 text-white/90">
              Notre vision est de rendre la sculpture contemporaine accessible à tous, de valoriser le patrimoine 
              sculptural et de soutenir les artistes dans leur démarche créative. Nous accordons une importance 
              particulière à la transmission des savoirs et à la formation des nouvelles générations.
            </p>
            
            <Link 
              href="/a-propos"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-secondary font-medium py-3 px-6 rounded-full transition-colors duration-300"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Activités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Nos Activités</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez les différentes actions menées par notre association
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expositions */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image 
                  src="/images/activites/expositions.jpg"
                  alt="Expositions de sculpture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Expositions</h3>
                <p className="text-gray-600 mb-4">
                  Organisation d'expositions nationales et internationales pour promouvoir les sculpteurs contemporains et leurs œuvres.
                </p>
                <Link 
                  href="/activites/expositions"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
            
            {/* Formations */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image 
                  src="/images/activites/formations.jpg"
                  alt="Formations à la sculpture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Formations</h3>
                <p className="text-gray-600 mb-4">
                  Programmes de formation pour initier les jeunes à la sculpture traditionnelle et aux outils numériques 3D.
                </p>
                <Link 
                  href="/activites/formations"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Découvrir
                </Link>
              </div>
            </div>
            
            {/* Jeux Éducatifs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image 
                  src="/images/activites/jeux.jpg"
                  alt="Jeux éducatifs sur la sculpture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Jeux Éducatifs</h3>
                <p className="text-gray-600 mb-4">
                  Développement de jeux de société éducatifs comme "Invente ton expo" pour sensibiliser à l'art sculptural.
                </p>
                <Link 
                  href="/activites/jeux-educatifs"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Jouer
                </Link>
              </div>
            </div>
            
            {/* Comités d'Artiste */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image 
                  src="/images/activites/comites.jpg"
                  alt="Comités d'artiste"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Comités d'Artiste</h3>
                <p className="text-gray-600 mb-4">
                  Réseau de comités dédiés à chaque artiste pour soutenir et promouvoir leur œuvre auprès du public.
                </p>
                <Link 
                  href="/comites-dartiste"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Découvrir
                </Link>
              </div>
            </div>
            
            {/* Vidéos d'Artistes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image 
                  src="/images/activites/videos.jpg"
                  alt="Vidéos d'artistes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Vidéos d'Artistes</h3>
                <p className="text-gray-600 mb-4">
                  Portraits vidéo d'artistes, techniques de sculpture et interviews pour découvrir l'univers sculptural.
                </p>
                <Link 
                  href="/activites/videos"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Regarder
                </Link>
              </div>
            </div>
            
            {/* Actualités */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image 
                  src="/images/activites/actualites.jpg"
                  alt="Actualités"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Actualités</h3>
                <p className="text-gray-600 mb-4">
                  Suivez l'actualité de l'association, nos événements à venir et les dernières nouvelles du monde sculptural.
                </p>
                <Link 
                  href="/activites/actualites"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Lire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Dernières Actualités */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Dernières Actualités</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Restez informé des événements et nouvelles de l'association
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Actualité 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/activites/actu-prix.jpg"
                  alt="Prix ACS 2025"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Concours
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">15 avril 2025</div>
                <h3 className="text-xl font-bold text-secondary mb-3">Annonce des lauréats du Prix ACS 2025</h3>
                <p className="text-gray-700 mb-4">Découvrez les trois jeunes sculpteurs récompensés par le Prix Art Culture Sculpture 2025.</p>
                <Link 
                  href="/activites/actualites/prix-acs-2025"
                  className="text-primary hover:text-primary-dark font-medium flex items-center"
                >
                  Lire la suite
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Actualité 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/activites/actu-partenariat.jpg"
                  alt="Partenariat Fondation Giacometti"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Partenariat
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">28 mars 2025</div>
                <h3 className="text-xl font-bold text-secondary mb-3">Nouveau partenariat avec la Fondation Giacometti</h3>
                <p className="text-gray-700 mb-4">Art Culture Sculpture est fière d'annoncer la signature d'un partenariat d'envergure.</p>
                <Link 
                  href="/activites/actualites/partenariat-giacometti"
                  className="text-primary hover:text-primary-dark font-medium flex items-center"
                >
                  Lire la suite
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Actualité 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/activites/actu-ateliers.jpg"
                  alt="Ateliers d'été"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Formation
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">20 mars 2025</div>
                <h3 className="text-xl font-bold text-secondary mb-3">Ouverture des inscriptions pour les ateliers d'été</h3>
                <p className="text-gray-700 mb-4">Les inscriptions pour notre programme estival de formation à la sculpture sont désormais ouvertes.</p>
                <Link 
                  href="/activites/actualites/ateliers-ete-2025"
                  className="text-primary hover:text-primary-dark font-medium flex items-center"
                >
                  Lire la suite
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/activites/actualites"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
            >
              Toutes les actualités
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Call to Action */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez Notre Communauté</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Devenez membre de l'association et participez à la promotion de la sculpture contemporaine
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/devenir-membre" 
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Devenir membre
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}