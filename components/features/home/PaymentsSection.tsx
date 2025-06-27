import React from "react";
import {
  ApplePayImage,
  MasterCardImage,
  NetellerImage,
  GpayImage,
  RevolutImage,
  SkrillImage,
  VisaImage,
} from "@/public/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const payments = [
  ApplePayImage,
  MasterCardImage,
  NetellerImage,
  GpayImage,
  RevolutImage,
  SkrillImage,
  VisaImage,
];

const PaymentsSection = () => {
  return (
    <div className="bg-dark-blue text-white flex flex-col md:flex-row w-full items-center justify-center md:justify-evenly gap-4 py-4 px-4 sm:px-6 md:px-8 rounded-md">
      <h1 className="text-center text-sm md:text-lg whitespace-nowrap">
        You don&apos;t have Crypto? No problem.
      </h1>
      <div className="flex flex-wrap justify-center gap-4 flex-grow md:flex-grow-0">
        {payments.map((item, i) => (
          <div
            key={i}
            className="relative h-10 w-16 sm:h-12 sm:w-20 lg:h-14 lg:w-24 shrink-0"
          >
            <Image
              src={item}
              alt="payment"
              width={80}
              height={55}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <Button className="bg-light-blue cursor-pointer shrink-0 max-w-[145px] w-full h-full">
        Buy Now
      </Button>
    </div>
  );
};

export default PaymentsSection;
