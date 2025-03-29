import Image from "next/image";
import Link from "next/link";
import { routes } from "@constants/routes";
import Dot from "./Dot";
import BotBanner from "./BotBanner";

export default function Footer() {
  return (

    <footer>
    <BotBanner />
    <div className="bg-dark-blue p-7 text-white flex flex-col md:flex-row items-center justify-start gap-4 font-montserrat text-sm line-height-6 ">
      <Link href={routes.home} aria-label="Navigation vers la page d'accueil">
        <Image src="/images/logo_footer.svg" loading="lazy" alt="logo de l'agence Nowwweb" width={55} height={22} />
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <p>&copy; {new Date().getFullYear()}  NWB</p>
        <Dot />
        <Link href={routes.legalsmentions} aria-label="Navigation vers la page des mentions légales">Mentions légales</Link>
        <Dot />
        <Link href={routes.rgpdcookies} aria-label="Navigation vers la page de la politique de confidentialité">Cookies</Link>
        <Dot />
        <p>Mantes-la-Jolie</p>
        <Dot />
        <a href="mailto:contact@nwb.fr" aria-label="Envoyer un email à l'agence Nowwweb">contact@nwb.fr</a>
        </div>
      </div>
    </footer>

  );
}
