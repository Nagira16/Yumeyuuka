import Image from "next/image";
import navLogo from "@/public/images/logo(white).png";
import Link from "next/link";
import OfferDropDown from "../partials/OfferDropDown";
import { Button } from "../ui/button";
import { HEADER_ITEMS } from "../constants";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-around bg-black ">
        <div className="">
          <Link href="/">
            <Image src={navLogo} alt="nav-logo" width={142} />
          </Link>
        </div>
        <div className="flex items-center space-x-8 text-white font-bold text-xs">
          {HEADER_ITEMS.map((item, i) => (
            <Link
              key={i}
              href={item.end_point}
              className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              {item.title}
            </Link>
          ))}
          <OfferDropDown />
          <Button className="bg-cyan-800 w-36 h-10 rounded-none hover:bg-orange-300 duration-500">
            ONLINE CHECKIN
          </Button>
        </div>
      </nav>
      <nav></nav>
    </header>
  );
};

export default Header;
