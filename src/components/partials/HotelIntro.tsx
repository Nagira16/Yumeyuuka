import bgBlack from "@/public/images/bg-black.png";
import Image from "next/image";

import { Button } from "../ui/button";
import { HOTEL_INTRO_ITEMS } from "../constants";
import Link from "next/link";

const HotelIntro = () => {
  return (
    <div className="relative w-full">
      <Image
        src={bgBlack}
        alt="Background image of a serene landscape"
        className="w-full h-[850px] object-cover"
      />
      <div className="absolute top-20 w-full">
        <section className="text-center text-white grid place-content-center">
          <div className="w-[900px] mx-auto space-y-5">
            <h5 className="text-3xl font-serif font-bold">
              Hidden Inn of Ise-Shima: Yumeyuuka
            </h5>
            <h6 className="font-bold font-serif">
              All Rooms with Private Open-Air Hot Spring Baths Overlooking the
              Pacific Ocean
            </h6>
            <div>
              <hr className="mt-14 mb-4" />
              <p className="text-left text-sm">
                Yumeyuuka, located in Osatsu, Toba City, Mie Prefecture, offers
                a dining experience where the fisherman owner, who realized his
                long-held dream of running an inn, serves highly acclaimed
                seasonal delicacies. All rooms feature private open-air hot
                spring baths, and the large bath utilizes high-quality water
                from the renowned Sakakibara Hot Spring. You can relax in the
                breathtaking open-air rooms that offer magnificent views of the
                expansive Pacific Ocean.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-8 mt-20 w-full">
            {HOTEL_INTRO_ITEMS.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="w-[250px] h-[50px] text-center break-words mb-3 font-semibold">
                  {item.title}
                </p>
                <Image
                  src={item.image}
                  alt={`image-${i}`}
                  width={250}
                  className="rounded-full mb-10"
                />
                <Button className=" bg-cyan-800 rounded-none w-[250px] py-6 border border-cyan-800 hover:bg-white hover:text-cyan-800">
                  <Link href={item.link}>{item.title}</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HotelIntro;
