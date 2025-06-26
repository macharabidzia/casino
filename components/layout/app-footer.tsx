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
const paymentLogos = [
  { src: BTCCashSvg, alt: "Bitcoin Cash" },
  { src: BTCSvg, alt: "Bitcoin" },
  { src: LtcSvg, alt: "Litecoin" },
  { src: EtheriumSvg, alt: "Ethereum" },
  { src: MasterSvg, alt: "MasterCard" }, // Using MasterSvg for MasterCard
  { src: DiscoverSvg, alt: "Discover" },
  { src: VisaSvg, alt: "Visa" }, // Using VisaSvg for Visa
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
    <footer className="text-gray-400 py-8 md:py-12 bg-dark-blue">
      <div className="container mx-auto px-4 mb-14 md:mb-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-10 border-b border-zinc-700/70 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-8 mb-8 border-zinc-700/70 space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
              <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wide">
                CASINO
              </h2>
              <p className="text-sm">
                Your premier online casino platform, offering a world-class
                gaming experience with hundreds of top-tier casino games,
                exclusive bonuses, and lightning-fast payouts.
              </p>
            </div>
            <div className="flex space-x-5 text-white"></div>
          </div>
          {footerNavSections.map((section, index) => (
            <div key={index} className="text-center sm:text-left">
              <h3 className="font-bold text-white mb-4 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 text-center sm:text-left">
            <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
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
                className="flex items-center justify-center sm:justify-start text-white hover:text-primary text-sm transition-colors"
              >
                <Globe className="mr-2 h-4 w-4" /> Language
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 border-b border-zinc-700/70 pb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {paymentLogos.map((item, i) => (
              <div
                key={i}
                className="relative h-8 w-12 sm:h-10 sm:w-16 shrink-0"
              >
                <item.src className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between w-full mx-auto mt-5">
          <p className="text-center text-wrap flex-1 ">
            &copy; {new Date().getFullYear()} CASINO.COM. All Rights Reserved.
          </p>
          <div className="float-right">
            <ul className="flex space-x-4 list-none p-0 m-0">
              <li className="text-gray-400 hover:text-white transition-colors">
                123
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                123
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                123
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-2 ">
          GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!
        </p>
        <p className="text-center mt-2">
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
