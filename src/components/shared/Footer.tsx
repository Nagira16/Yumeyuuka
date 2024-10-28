import navLogo from "@/public/images/logo(white).png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black grid grid-cols-4 p-32 space-x-5 place-content-center">
      <div className="text-white text-sm space-y-3 w-60">
        <Image src={navLogo} alt="footer-logo" width={142} />
        <p>2269-16 Osatsucho, Toba City, Mie Prefecture, 517-0032</p>
        <p>TEL: 0599-33-7177</p>
        <p>FAX: 0599-33-6967</p>
      </div>
      <div className="text-white text-sm space-y-3 w-60">
        <p>Check-in: 14:00～</p>
        <p>Check-out: 10:00</p>
        <p>Parking available (free)</p>
        <p>Parking: 10 cars</p>
        <p>Number of rooms: 9</p>
        <p>VISA, MASTER, DC available on site</p>
        <p>Credit card payment available</p>
        <p>Shuttle available from Toba Station (reservation required)</p>
        <p>Please contact us for details</p>
      </div>
      <div className="text-white text-sm space-y-10 w-60">
        <div>
          <p>[Child fees]</p>
          <p className=" leading-7">
            Children under 0 years old are free of charge, so please let us know
            when making your reservation that you have a baby under 0 years old.
            Please note that if your child is between 1 and 6 years old and does
            not require meals or bedding, a facility usage fee of 1,500 yen per
            person will be charged.
          </p>
        </div>
        <div className="space-y-2">
          <p>[Cancellation]</p>
          <p>On the day: 100% of the accommodation fee</p>
          <p>The day before: 50% of the accommodation fee</p>
          <p>5 days before: 30% of the accommodation fee</p>
          <p>The following applies to no-shows</p>
          <p>No-show without notice</p>
          <p>Failure to arrive: 100% of the accommodation fee</p>
        </div>
      </div>
      <div>
        <ul className="w-[350px]  space-y-8">
          <li>
            <Button className="w-[250px] py-8 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
              <Link href={"/plan_list"}>Hotel Offers / Reservations</Link>
            </Button>
          </li>
          <li>
            <Button className="w-[250px] py-8 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
              Measures Against Coronavirus
            </Button>
          </li>
          <li>
            <Button className="w-[250px] py-8 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
              <Link href={""}>Privacy Policy</Link>
            </Button>
          </li>
          <li>
            <Button className="w-[250px] py-8 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
              Cake.jp
            </Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
