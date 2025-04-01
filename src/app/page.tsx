'use client';

import { heroTitles } from '@/components/constants/heroTitles';
import { routes } from '@/components/constants/routes';
import ButtonLink from '@/components/ui/ButtonLink';
import H2Tittle from '@/components/ui/H2Tittle';
import H3Titlle from '@/components/ui/H3Titlle';
import NavCard from '@/components/ui/NavCard';
import { capitalyzeString } from '@/utils/capitalyse';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import shuffleLetters from 'shuffle-letters';

export default function Home() {
  useEffect(() => {
    const title = document.querySelector('.hero-tittle') as HTMLElement;
    let currentIndex = 0;

    const animateText = () => {
      if (title) {
        shuffleLetters(title, {
          text: heroTitles[currentIndex],
          iterations: 1,
          fps: 15,
          duration: 5000,
        });
        currentIndex = (currentIndex + 1) % heroTitles.length;
      }
    };

    // Animation initiale
    animateText();

    // Mise en place de l'intervalle
    const interval = setInterval(animateText, 4000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="flex w-full flex-col items-center justify-center"
      role="main"
      aria-label="Contenu principal"
    >
      {/* section Hero */}
      <section
        className="bg-dark-blue w-full h-[calc(100vh-110px)] lg:h-[calc(100vh-100px)] flex items-center justify-center relative overflow-hidden"
        aria-label="Section d'accueil - Présentation de l'agence"
      >
        <Image
          src="/images/motif1.svg"
          alt="Motif 1"
          width={388}
          height={250}
          className="absolute top-0 right-0"
        />
        <Image
          src="/images/motif2.svg"
          alt="Motif 2"
          width={759}
          height={463}
          className="absolute bottom-0 left-0 hidden lg:block"
        />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 px-4 py-6 container mx-auto z-10">
          <div className="flex flex-col items-center lg:items-start justify-center gap-6">
            <h1 className="text-white min-h-[85px] text-center lg:text-left font-montserrat text-xl lg:text-4xl">
              {capitalyzeString('Nous sommes :')}
              <p className="hero-tittle font-montserrat font-bold text-xl lg:text-4xl break-words"></p>
            </h1>
            <div className="w-12 bg-bright-blue h-1"></div>
            <p className="text-white text-center font-pt-serif italic text-base lg:text-xl">
              Agence web novatrice depuis 2008
            </p>

            <ButtonLink
              title={capitalyzeString('Discutons de votre projet')}
              href={routes.contact}
            />
          </div>

          <Image
            src="/images/pieuvre.svg"
            alt="Pieuvre"
            width={500}
            height={530}
            className="w-[200px] h-[212px] md:w-[350px] md:h-[371px] lg:w-[400px] lg:h-[424px] xl:w-[500px] xl:h-[530px]"
            priority
          />
        </div>
        <div className="absolute bottom-2 left-[50%] w-0.5 bg-white h-8 transform -translate-y-1/2 z-10"></div>
      </section>
      {/* section de présentation */}
      <section
        className="bg-light-grey w-full lg:p-[90px]"
        aria-label="Section de présentation - Notre équipe et notre approche"
      >
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 container mx-auto">
          <H2Tittle title={capitalyzeString('Un équipage à votre service')} />
          <H3Titlle title="Pour l'ensemble de vos projets web " />
          <p className="font-montserrat text-sm lg:text-base text-center text-dark-blue">
            Experts du web, nous répondons aux{' '}
            <strong>
              problématiques de nos clients depuis plus de 10 ans.
            </strong>{' '}
            Et comme chaque besoin est unique, nous proposons des{' '}
            <strong>solutions personnalisées et adaptées</strong> à chaque
            nouveau projet. De la conception à la réalisation technique, notre
            équipe vous accompagne tout au long du processus de création pour
            obtenir le meilleur retour que l&apos;on puisse avoir :{' '}
            <strong>Nice Work Bro&apos; !</strong>
          </p>
          <ButtonLink
            title={capitalyzeString("Découvrir l'agence")}
            href={routes.contact}
          />
        </div>
      </section>
      {/* section des services */}
      <section
        className="bg-white w-full lg:p-[90px]"
        aria-label="Section des services - Nos domaines d'expertise"
      >
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 container mx-auto">
          <H2Tittle title={capitalyzeString('Expertise')} />
          <H3Titlle title="entre design et développement" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 font-montserrat text-lg">
            <NavCard
              title="Conseil"
              icon="/images/light.svg"
              href={routes.categories.consulting}
              textColor="text-[#23AEEB]"
              bgColor="bg-pastel-blue/80 hover:bg-pastel-blue"
            />
            <NavCard
              title="création"
              icon="/images/pen.svg"
              href={routes.categories.creation}
              textColor="text-[#26E6CC]"
              bgColor="bg-pastel-green/80 hover:bg-pastel-green"
            />
            <NavCard
              title="site web"
              icon="/images/screen.svg"
              href={routes.categories.website}
              textColor="text-[#3CB9D1]"
              bgColor="bg-light-pastel-blue/80 hover:bg-light-pastel-blue"
            />
            <NavCard
              title="Application mobile"
              icon="/images/phone.svg"
              href={routes.categories.mobileApp}
              textColor="text-[#23AEEB]"
              bgColor="bg-pastel-blue/80 hover:bg-pastel-blue"
            />
            <NavCard
              title="Développement sur-mesure"
              icon="/images/code.svg"
              href={routes.categories.customDevelopment}
              textColor="text-[#26E6CC]"
              bgColor="bg-pastel-blue/80 hover:bg-pastel-blue"
              specialClassName="col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>
      {/* section des réalisations */}
      <section
        className="bg-white w-full lg:p-[90px]"
        aria-label="Section portfolio - Nos réalisations récentes"
      >
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 container mx-auto">
          <H2Tittle title={capitalyzeString('Nos dernières réalisations')} />
          <H3Titlle title="Pour des clients qui nous font confiance" />
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
            <Link
              href=""
              aria-label="Navigation vers l'article sur le site web de l'hotel Mirabeau"
              className="relative w-full h-[300px] lg:h-[400px] group"
            >
              <Image
                src="/images/hotel.webp"
                alt="Hotel Mirabeau"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h4 className="text-white text-center font-montserrat font-bold text-3xl">
                  {capitalyzeString('Hôtel Mirabeau')}
                </h4>
                <p className="text-white text-center italic font-pt-serif text-xl">
                  Site vitrine
                </p>
              </div>
            </Link>
            <Link
              href=""
              aria-label="Navigation vers l'article sur le site web de la galerie Nea"
              className="relative w-full h-[300px] lg:h-[400px] group"
            >
              <Image
                src="/images/galerie.webp"
                alt="galerie Nea"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h4 className="text-white text-center font-montserrat font-bold text-3xl">
                  {capitalyzeString('Galerie Nea')}
                </h4>
                <p className="text-white text-center italic font-pt-serif text-xl">
                  Site e-commerce
                </p>
              </div>
            </Link>
          </div>
          <ButtonLink
            title={capitalyzeString('Découvrir plus de réalisations')}
            href={routes.contact}
          />
        </div>
      </section>
    </main>
  );
}
