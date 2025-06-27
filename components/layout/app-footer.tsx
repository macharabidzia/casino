import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import { RevolutImage } from "@/public/images";
import {
  BTCCashSvg,
  BTCSvg,
  LtcSvg,
  EtheriumSvg,
  MasterSvg,
  DiscoverSvg,
  VisaSvg,
  AmexSvg,
  SomePaymentSvg,
} from "@/public/icons";
import Image from "next/image";

const paymentLogos = [
  { src: BTCCashSvg, alt: "Bitcoin Cash" },
  { src: BTCSvg, alt: "Bitcoin" },
  { src: LtcSvg, alt: "Litecoin" },
  { src: EtheriumSvg, alt: "Ethereum" },
  { src: MasterSvg, alt: "MasterCard" },
  { src: DiscoverSvg, alt: "Discover" },
  { src: VisaSvg, alt: "Visa" },
  { src: AmexSvg, alt: "American Express" },
  { src: SomePaymentSvg, alt: "Other Payment" },
];

const footerNavSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Affiliates", href: "/affiliates" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Games",
    links: [
      { name: "Slots", href: "/games/slots" },
      { name: "Table Games", href: "/games/table" },
      { name: "Live Casino", href: "/games/live" },
      { name: "Jackpots", href: "/games/jackpots" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "FAQs", href: "/faqs" },
      { name: "Contact Us", href: "/contact" },
      { name: "Responsible Gaming", href: "/responsible-gaming" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "AML Policy", href: "/aml" },
    ],
  },
];

const AppFooter = () => {
  return (
    <footer className="bg-dark-blue py-8 text-gray-400 md:py-12">
      <div className="container mx-auto mb-14 px-4 md:mb-0 ">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-zinc-700/70 pb-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  2xl:grid-cols-7">
          <div className="col-span-full flex flex-col items-center text-center sm:col-span-3 md:items-start md:text-left lg:col-span-2">
            <h2 className="mb-2 text-3xl font-extrabold tracking-wide text-white">
              CASINO
            </h2>
            <p className="text-sm">
              Your premier online casino platform, offering a world-class gaming
              experience with hundreds of top-tier casino games, exclusive
              bonuses, and lightning-fast payouts.
            </p>
          </div>

          {footerNavSections.map((section, index) => (
            <div
              key={index}
              className="col-span-1 text-center sm:text-left md:col-span-1"
            >
              <h3 className="mb-4 text-lg font-bold text-white">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-1 text-center sm:col-span-1 sm:text-left md:col-span-1 lg:col-span-1 xl:col-span-1">
            <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>
            <p className="text-sm">
              Email:{" "}
              <Link
                href="mailto:support@casino.com"
                className="hover:text-white"
              >
                support@casino.com
              </Link>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <Link href="tel:+1234567890" className="hover:text-white">
                +1 (234) 567-890
              </Link>
            </p>
            <div className="mt-4">
              <Link
                href="#"
                className="flex items-center justify-center text-white transition-colors hover:text-primary sm:justify-start text-sm"
              >
                <Globe className="mr-2 h-4 w-4" /> Language
              </Link>
            </div>
          </div>
          <div className="sm:hidden col-span-1 text-center sm:col-span-1 sm:text-left md:col-span-1 lg:col-span-1 xl:col-span-1 items-center flex flex-col">
            <div>
              <Image src={RevolutImage} alt="Revolut" width={100} height={30} />
            </div>
            <div>
              <Image src={RevolutImage} alt="Revolut" width={100} height={30} />
            </div>
          </div>
        </div>
        <div className="border-b border-zinc-700/70 pb-8">
          <div className="flex flex-wrap justify-center gap-4 py-8">
            {paymentLogos.map((item, i) => (
              <div
                key={i}
                className="relative h-8 w-12 shrink-0 sm:h-10 sm:w-16"
              >
                <item.src className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center justify-between text-center md:flex-row md:text-center">
          <div className="md:order-1 order-2 flex-1 text-wrap sm:py-0 md:ml-45 ml-0 ">
            <p>
              &copy; {new Date().getFullYear()} CASINO.COM. All Rights Reserved.
            </p>
          </div>
          <div className="md:order-2 order-1 md:ml-auto pb-4 mb-4 sm:pb-0 sm:mb-0 border-b border-zinc-700/70 sm:border-0 sm:w-fit w-full">
            <ul className="m-0 flex list-none space-x-4 p-0 mx-auto justify-center">
              <li className="text-gray-400 transition-colors hover:text-white">
                Privacy
              </li>
              <li className="text-gray-400 transition-colors hover:text-white">
                Terms
              </li>
              <li className="text-gray-400 transition-colors hover:text-white">
                Sitemap
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-2 text-center">
          GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!
        </p>
        <p className="mt-2 text-center text-sm leading-relaxed">
          CASINO casino is operated by CASINO B.V., ensuring a secure and fair
          gaming environment for all players. We strictly adhere to all
          regulatory requirements to maintain transparency and fairness. Our
          commitment to integrity and ethical practices is at the core of our
          business. We employ advanced security measures, including SSL
          encryption and robust firewall systems, to protect your personal and
          financial information. Promoting responsible gaming is a priority at
          CASINO Casino. We provide tools and resources to help you gamble
          responsibly. We offer a variety of secure payment methods and ensure
          seamless transactions. All payment processes are encrypted and
          compliant with industry standards. Our customer support team is
          available 24/7 to assist you with any questions or issues you may
          have. Contact us via Live Chat, Email, or Phone for prompt and
          professional assistance.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
