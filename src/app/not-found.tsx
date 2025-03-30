import { routes } from '@/components/constants/routes';
import ButtonLink from '@/components/ui/ButtonLink';
import { capitalyzeString } from '@/utils/capitalyse';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-dark-navy p-4"> 
      {/* Contenu central */}
      <div className="flex flex-col items-center justify-center gap-8 text-center z-10">
        <h1 className="text-turquoise font-montserrat font-extrabold text-6xl md:text-8xl">
          404
        </h1>
        <h2 className="text-white font-pt-serif italic text-xl md:text-2xl">
          Page non trouvée
        </h2>
        <p className="text-white/80 font-montserrat text-base md:text-lg max-w-md">
          La page que vous recherchez semble avoir pris le large. Retournez à la page d&apos;accueil pour continuer votre navigation.
        </p>
        <ButtonLink 
          href={routes.home} 
          title={capitalyzeString("Retour à l'accueil")}
        />
      </div>
    </main>
  );
} 