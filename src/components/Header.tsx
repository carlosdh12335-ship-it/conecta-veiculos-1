import logo from "@/assets/logo.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <div className="container flex h-20 items-center justify-between px-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Conecta Brasil Autopeças" className="h-28 md:h-32" />
        </a>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
