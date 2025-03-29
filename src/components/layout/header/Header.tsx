import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="px-7">
      <div className="hidden xl:block">
        <DesktopNav />
      </div>
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
