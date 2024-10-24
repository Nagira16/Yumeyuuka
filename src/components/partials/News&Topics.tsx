import bgWhite from "@/public/images/bg-white.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Cake, Lightbulb, Phone, Search } from "lucide-react";

const NewsTopics = () => {
  return (
    <div className=" relative">
      <Image src={bgWhite} alt="bg-white" className="w-full h-[560px] " />
      <div className=" absolute top-32 w-full">
        <section className=" grid grid-cols-3 w-full h-full">
          <div className=" text-center flex justify-end mr-12">
            <h5 className=" text-cyan-700 text-2xl font-serif">
              News & Topics
              <hr className="border-cyan-700 mb-[3px]" />
              <hr className="border-cyan-700" />
            </h5>
          </div>

          <div className=" flex justify-center mt-6">
            <ul className=" space-y-6 text-xs">
              <li>
                <Link href="">
                  <p className="text-cyan-700 mb-2"> 2024年10月15日</p>
                  <p>【まだまだイベント満載！】１０月後半の鳥羽イベント情報</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p className="text-cyan-700 mb-2">2024年10月9日</p>
                  <p>【牡蠣づくしの旅】周辺オススメ飲食店のご紹介</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p className="text-cyan-700 mb-2">2024年10月3日</p>
                  <p>【合言葉はオクトバ！】１０月は鳥羽の月 イベント満載！</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p className="text-cyan-700 mb-2">2024年9月25日</p>
                  <p>【今年も開催！】夢遊華 ハロウィンを探そうキャンペーン</p>
                </Link>
              </li>

              <li>
                <Link href="">
                  <p className="text-cyan-700 mb-2">2024年9月24日</p>
                  <p>
                    【自由気ままに！おひとり様ステイ】マイカープランのご紹介
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  more
                </Link>
              </li>
            </ul>
          </div>
          <div className=" flex justify-start mt-6">
            <ul className="w-[350px]  space-y-8">
              <li>
                <Button className="w-full py-5 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
                  Rooms With Private Sauna Now Open!!!
                </Button>
              </li>
              <li>
                <Button className="w-full py-5 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
                  Measures Against Coronavirus
                  <Lightbulb />
                </Button>
              </li>
              <li>
                <Button className="w-full py-5 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
                  Hotel Plans
                  <Search />
                </Button>
              </li>
              <li>
                <Button className="w-full py-5 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
                  Reservations / Contact
                  <Phone />
                </Button>
              </li>
              <li>
                <Button className="w-full py-5 bg-cyan-800 rounded-none border border-cyan-800 hover:bg-white hover:text-cyan-800">
                  Cake.jp
                  <Cake />
                </Button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsTopics;
