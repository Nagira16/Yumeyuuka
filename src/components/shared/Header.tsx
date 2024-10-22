import Image from "next/image";
import navLogo from "@/public/images/logo(white).png";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="flex">
        <div>
          <Link href="/">
            <Image src={navLogo} alt="nav-logo" width={140} />
          </Link>
        </div>
        <div>
          <Link href="/news">News</Link>
          <Link href="/about">About</Link>
          <Link href="/room">Room</Link>
          <Link href="/private_sauna">Private Sauna</Link>
          <Link href="/cuisine">Cuisine</Link>
          <Link href="/bath">Bath</Link>
          <Link href="/access">Access</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Instagram</Link>
          <div>
            <p>Plans / Rooms</p>
            <Link href="plan_list">Look From Plans</Link>
            <Link href="plan_room">Look From Rooms</Link>
          </div>
          <button>Online CheckIn</button>
        </div>
      </nav>
      <nav></nav>
    </header>
  );
};

export default Header;
