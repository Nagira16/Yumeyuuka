import { StaticImageData } from "next/image";

export type HotelIntroItemsType = {
  image: StaticImageData;
  link: string;
  title: string;
};

export type HeaderItemsType = {
  end_point: string;
  title: string;
};
