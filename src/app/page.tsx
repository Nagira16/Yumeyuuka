import HotelAbout from "@/components/partials/HotelAbout";
import HotelIntro from "@/components/partials/HotelIntro";
import NewsTopics from "@/components/partials/News&Topics";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center">
        <video
          src="https://www.yumeyuuka.com/wp/wp-content/uploads/2024/06/web_top.mp4"
          muted
          autoPlay
          loop
        />
        <a
          href="https://www.youtube.com/watch?v=FLbQ41iQG2k"
          className="absolute bottom-5 right-24 text-white"
        >
          <p className="flex font-semibold">
            watch full movie <ChevronRight />
          </p>
        </a>
      </div>
      <NewsTopics />
      <HotelIntro />
      <HotelAbout />
    </div>
  );
};

export default Home;
