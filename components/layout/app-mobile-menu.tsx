"use client";
import React from "react";
import BlackJackSvg from "@/public/icons/blackjack_image.svg";
import PromotionsSvg from "@/public/icons/promotions_image.svg";
import SupportsSvg from "@/public/icons/support_image.svg";
import HomeSvg from "@/public/icons/home_icon.svg";
import { MenuIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

interface MobileMenuItem {
  title: string;
  url: string;
  icon: React.ElementType;
}

const mobileNavItems: MobileMenuItem[] = [
  {
    title: "Home",
    url: "#home",
    icon: () => <HomeSvg fill="currentColor" stroke="currentColor" />,
  },
  {
    title: "Games",
    url: "#games",
    icon: () => <BlackJackSvg fill="currentColor" stroke="currentColor" />,
  },
  {
    title: "Promotions",
    url: "#promotions",
    icon: () => <PromotionsSvg fill="currentColor" stroke="currentColor" />,
  },
  {
    title: "Support",
    url: "#support",
    icon: () => <SupportsSvg fill="currentColor" stroke="currentColor" />,
  },
];

export function AppMobileMenu() {
  const { toggleSidebar } = useSidebar();
  return (
    <div
      className="
      fixed bottom-0 left-0 right-0 z-50
      bg-background border-t border-border shadow-lg
      py-2 px-4 md:hidden
    "
    >
      <nav className="flex justify-around items-center h-full">
        {mobileNavItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="
              flex flex-col items-center justify-center
              p-2 text-white/70 hover:text-red-300 transition-colors
              w-1/5 sm:w-auto flex-grow
            "
          >
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="text-xs font-medium whitespace-nowrap text-center">
              {item.title}
            </span>
          </a>
        ))}
        <a
          onClick={toggleSidebar}
          className="
              flex flex-col items-center justify-center
              p-2 text-white/70 hover:text-red-300 transition-colors
              w-1/5 sm:w-auto flex-grow cursor-pointer
            "
        >
          <MenuIcon width={16} height={16} className="h-5 w-5 shrink-0" />
          <span className="text-xs font-medium whitespace-nowrap text-center">
            Menu
          </span>
        </a>
      </nav>
    </div>
  );
}
