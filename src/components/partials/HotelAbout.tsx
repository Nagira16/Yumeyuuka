import bgWhite from "@/public/images/bg-white.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import about1 from "@/public/images/about1.jpg";
import {
  ChevronDown,
  Clock10,
  Clock2,
  MapPin,
  Phone,
  SquareParking,
} from "lucide-react";

const HotelAbout = () => {
  return (
    <div className="relative">
      <Image src={bgWhite} alt="Background" className="w-full h-[2150px]" />
      <div className="absolute top-20 w-full space-y-28">
        <section className="flex items-start justify-between ">
          <div className="w-[500px] mx-auto space-y-7">
            <h4 className="text-3xl font-serif font-bold text-cyan-800">
              Private sauna
            </h4>
            <div className="space-y-1">
              <hr className="border-cyan-800" />
              <hr className="border-cyan-800" />
            </div>
            <h6 className="font-bold font-serif">
              Traditional Finnish sauna "Loyly"
            </h6>

            <p className="text-xs text-gray-700">
              In the Japanese-style room with bed "Kinu" in the Kumo no Wing and
              the Japanese-style room "Umi-Umi" in the Umitori Wing, you can now
              enjoy two private saunas using Finnish "natural sauna stones" next
              to the open-air baths.
            </p>

            <Button className=" rounded-none bg-cyan-800 border border-cyan-800 hover:bg-white hover:text-cyan-800 w-full">
              <Link href="/about" className="flex items-center gap-2">
                About Yumeyuka <ChevronDown />
              </Link>
            </Button>
          </div>

          <Image
            src={about1}
            alt="About Yumeyuka"
            width={700}
            className="ml-auto slide-in-right "
          />
        </section>

        <section className="flex items-start justify-between ">
          <video
            src="https://www.yumeyuuka.com/wp/wp-content/uploads/2024/06/sauna2.mp4?_=1"
            className="w-[700]"
            controls
          />
          <div className="w-[500px] mx-auto space-y-7">
            <h4 className="text-3xl font-serif font-bold text-cyan-800">
              Asaumi Yutsuki Yumeyuka
            </h4>
            <div className="space-y-1">
              <hr className="border-cyan-800" />
              <hr className="border-cyan-800" />
            </div>
            <h6 className="font-bold font-serif">
              All rooms are equipped with an open-air hot spring bath.
              <br />
              Enjoy the spectacular view of the ever-changing sky and sea all to
              yourself.
            </h6>

            <p className="text-xs text-gray-700">
              As the owner, a fisherman, realized his long-held dream, the food
              is also highly rated. The menu depends on the catch of the day!
              <br />
              This is an inn in Osatsu, Toba City, Mie Prefecture, where you can
              enjoy seasonal produce.
            </p>

            <Button className=" rounded-none bg-cyan-800 border border-cyan-800 hover:bg-white hover:text-cyan-800 w-full">
              <Link href="/about" className="flex items-center gap-2">
                Rooms with Private Sauna <ChevronDown />
              </Link>
            </Button>
            <Button className=" rounded-none bg-cyan-800 border border-cyan-800 hover:bg-white hover:text-cyan-800 w-full">
              <Link href="/about" className="flex items-center gap-2">
                Only 2 Rooms Available! List of Accommodation Plans with Sauna
                <ChevronDown />
              </Link>
            </Button>
          </div>
        </section>

        <section className="flex items-start justify-between ">
          <div className="w-[500px] mx-auto">
            <h4 className="text-3xl font-serif font-bold text-cyan-800 mb-7">
              Yumeyuka Information
            </h4>
            <div className="space-y-1">
              <hr className="border-cyan-800" />
              <hr className="border-cyan-800" />
            </div>
            <div className="space-y-2 my-5 font-serif ">
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <p>2269-16 Ejiri, Osatsu-cho, Toba-shi, Mie</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} />
                <p>0599-33-7177</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock2 size={20} />
                <p>Check-in: 14:00</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock10 size={20} />
                <p>Check-out: 10:00</p>
              </div>
              <div className="flex items-center space-x-2">
                <SquareParking size={20} />
                <p>10 parking spaces available (free)</p>
              </div>
              <div>
                Shuttle service available from Toba Station (reservation
                required) Please contact us for more information
              </div>
            </div>

            <Button className=" rounded-none bg-cyan-800 border border-cyan-800 hover:bg-white hover:text-cyan-800 w-full ">
              <Link href="/about" className="flex items-center gap-8">
                View on Google Maps
                <ChevronDown />
              </Link>
            </Button>
          </div>

          <Image
            src={about1}
            alt="About Yumeyuka"
            width={700}
            className="ml-auto slide-in-right "
          />
        </section>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.084225287115!2d136.90772887578026!3d34.39920507302833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60050226737829e3%3A0xbadc7513118b7a8b!2z5aSi6YGK6I-v!5e0!3m2!1sja!2sca!4v1730095777265!5m2!1sja!2sca"
            className="w-full h-[450px]"
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default HotelAbout;
