import bgBlack from "@/public/images/bg-black.png";
import Image from "next/image";

const HotelIntro = () => {
  return (
    <div>
      <Image src={bgBlack} alt="bg-white" className="w-full h-[850px] " />
    </div>
  );
};

export default HotelIntro;
