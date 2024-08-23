import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./Searchbar";
import dynamic from "next/dynamic";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./Navicons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative  bg-black text-white">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/" className="w-1/3 xl:w-1/2 flex items-center gap-5">
          <Image src="/logo.png" alt="" width={24} height={24} />
          <div className="text-2xl tracking-wide">BOIC</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">BOIC</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/list/page.tsx">Žene</Link>
            <Link href="/">Muškarci</Link>
            <Link href="/">Djeca</Link>
            <Link href="/">Sale</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8  bg-black text-white mx-15">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;