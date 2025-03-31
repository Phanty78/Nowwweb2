import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react" 
import Image from "next/image";
import Link from "next/link";
import { routes } from "@constants/routes";


import DesktopNav from "./DesktopNav";
export default function MobileNav() {
  return (
    <nav className="flex justify-between items-center py-4">
      <Link href={routes.home} aria-label="Navigation vers la page d'accueil">
        <Image src="/images/logo.svg" alt="logo de l'agence Nowwweb" className="w-[98px] h-[18px] xl:w-[150px] xl:h-[27px]" width={150} height={27} />
      </Link>
      
      <Sheet>
        <SheetTrigger asChild>
            <Menu size={48} className="text-black" aria-hidden="true"/>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-dark-blue text-white font-montserrat text-xl flex flex-col gap-4 justify-center items-center">
          <DesktopNav />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
