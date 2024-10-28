"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const OfferDropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)}>
      <Button className="bg-red-900 w-36 h-10 rounded-none hover:bg-orange-300 duration-500">
        OFFERS
      </Button>

      {isOpen && (
        <div
          className="absolute top-12 w-36 h-full z-20"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/plan-list">
              <Button className="bg-red-900 w-36 h-10 rounded-none hover:bg-orange-300 duration-500">
                BY PLANS
                <ChevronRight />
              </Button>
            </Link>
            <Link href="/plan-room">
              <Button className="bg-red-900 w-36 h-10 rounded-none hover:bg-orange-300 duration-500">
                BY ROOMS
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDropDown;
