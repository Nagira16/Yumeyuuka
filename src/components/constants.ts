import b1 from "@/public/images/b1.jpg";
import b2 from "@/public/images/b2.jpg";
import b3 from "@/public/images/b3.jpg";
import b4 from "@/public/images/b4.jpg";
import { HeaderItemsType, HotelIntroItemsType } from "@/types/constants.types";

export const HOTEL_INTRO_ITEMS: HotelIntroItemsType[] = [
  {
    image: b1,
    link: "/room",
    title: "All rooms with open-air baths",
  },
  {
    image: b2,
    link: "/cuisine",
    title: "Savoring delicious seasonal ingredients",
  },
  {
    image: b3,
    link: "/bath",
    title: "Bath with Sakakibara hot spring",
  },
  {
    image: b4,
    link: "/plan_list",
    title: "Plan List & Reservations",
  },
];

export const HEADER_ITEMS: HeaderItemsType[] = [
  {
    end_point: "/news",
    title: "NEWS",
  },
  {
    end_point: "/about",
    title: "HOTEL",
  },
  {
    end_point: "/room",
    title: "ROOMS",
  },
  {
    end_point: "/private_sauna",
    title: "PRIVATE SAUNA",
  },
  {
    end_point: "/cuisine",
    title: "CUISINE",
  },
  {
    end_point: "/bath",
    title: "YUME-YU",
  },
  {
    end_point: "/access",
    title: "ACCESS",
  },
  {
    end_point: "/contact",
    title: "CONTACT",
  },
  {
    end_point: "/https://www.instagram.com/yume_yuuka7177/",
    title: "INSTAGRAM",
  },
];
