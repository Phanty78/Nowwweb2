import { routes } from "@constants/routes";
import Link from "next/link";
import Image from "next/image";

export default function DesktopNav() {
  return (
    <nav className="flex flex-col xl:flex-row justify-between items-center my-7 " aria-label="Navigation principale">
      <Link href={routes.home} aria-label="Navigation vers la page d'accueil" className="hidden xl:block">
        <Image src="/images/logo.svg" alt="logo de l'agence Nowwweb" width={150} height={27} />
      </Link>
      <ul className="flex flex-col xl:flex-row  justify-between items-center gap-10 " aria-label="Liste des liens de navigation">
        <li className="font-montserrat font-semibold text-lg  text-black/70 active:text-black hover:text-black" aria-label="Lien vers la page des expertises">
          <Link href={routes.categories.consulting}>Expertises</Link>
        </li>
        <li className="font-montserrat font-semibold text-lg  text-black/70 active:text-black hover:text-black" aria-label="Lien vers la page des réalisations">
          <Link href={routes.categories.portfolio}>Réalisations</Link>
        </li>
        <li className="font-montserrat font-semibold text-lg  text-black/70 active:text-black hover:text-black" aria-label="Lien vers la page de l'agence">
          <Link href={routes.categories.agency}>Agence</Link>
        </li>
        <li className="font-montserrat font-semibold text-lg  text-black/70 active:text-black hover:text-black" aria-label="Lien vers la page des questions fréquentes">
          <Link href={routes.categories.faq}>Questions</Link>
        </li>
        <li className="font-montserrat font-semibold text-lg text-black/70 active:text-black hover:text-black " aria-label="Lien vers la page de contact">
          <Link href={routes.contact}>Contact</Link>
        </li> 
      </ul>
    </nav>
  );
}
