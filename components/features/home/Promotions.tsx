import Image from "next/image";
import React from "react";
import Image1 from "@/public/images/home-1.png";
import Image2 from "@/public/images/home-2.png";
import Image3 from "@/public/images/home-3.png";
import Image4 from "@/public/images/home-4.png";
import Image5 from "@/public/images/home-5.png";

const HomePromotions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8 h-auto">
      <div className="flex-1">
        <Image
          src={Image1}
          alt="Promotional Image 1"
          width={400}
          height={250}
          priority
          className="w-full h-full rounded-lg object-cover shadow-md"
        />
      </div>

      <div className="flex-1">
        <Image
          src={Image2}
          alt="Promotional Image 2"
          width={400}
          priority
          height={250}
          className="w-full h-full rounded-lg object-cover shadow-md"
        />
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4 h-auto">
        <div className="flex-1">
          <Image
            src={Image3}
            alt="Promotional Image 3"
            width={200}
            priority
            height={117}
            className="w-full h-full rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="flex-1">
          <Image
            src={Image4}
            alt="Promotional Image 4"
            width={200}
            priority
            height={117}
            className="w-full h-full rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="flex-1">
          <Image
            src={Image5}
            alt="Promotional Image 5"
            width={200}
            priority
            height={117}
            className="w-full h-full rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="flex-1">
          <Image
            src={Image1}
            alt="Promotional Image 1 (reused)"
            width={200}
            priority
            height={117}
            className="w-full h-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePromotions;
