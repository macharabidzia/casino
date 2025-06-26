// @/menu-data.ts
import {
  BlackJackSvg,
  CrashSvg,
  DiceSvg,
  LanguageSvg,
  LiveDealersSvg,
  PromotionsSvg,
  RecentSvg,
  RouletteSvg,
  SlotsSvg,
  SupportsSvg,
  RepoCarrierSvg,
  TableGamesSvg,
  TournamentsSvg,
  VideoPokerSvg,
  VipClubSvg,
} from "@/public/icons";

import { Home, Settings, Inbox, Calendar, Search } from "lucide-react";

export interface MenuItem {
  title?: string;
  url: string;
  icon: React.ElementType;
}

export const items: MenuItem[] = [
  {
    title: "Home",
    url: "home",
    icon: Home,
  },
  {
    title: "Black Jack",
    url: "blackjack",
    icon: BlackJackSvg,
  },
  {
    title: "Crash",
    url: "crash",
    icon: CrashSvg,
  },
  {
    title: "Language",
    url: "language",
    icon: LanguageSvg,
  },
  {
    title: "Dice",
    url: "dice",
    icon: DiceSvg,
  },
  {
    title: "Live Dealers",
    url: "live-dealers",
    icon: LiveDealersSvg,
  },
  {
    title: "Promotions",
    url: "promotions",
    icon: PromotionsSvg,
  },
  {
    title: "Recent Games",
    url: "recent-games",
    icon: RecentSvg,
  },
  {
    title: "Roulette",
    url: "roulette",
    icon: RouletteSvg,
  },
  {
    title: "Slots",
    url: "slots",
    icon: SlotsSvg,
  },
  {
    title: "Support",
    url: "support",
    icon: SupportsSvg,
  },
  {
    title: "Repo Carrier",
    url: "repo-carrier",
    icon: RepoCarrierSvg,
  },
  {
    title: "Table Games",
    url: "table-games",
    icon: TableGamesSvg,
  },
  {
    title: "Tournaments",
    url: "tournaments",
    icon: TournamentsSvg,
  },
  {
    title: "Vip Club",
    url: "vip-club",
    icon: VipClubSvg,
  },
  {
    title: "Video Poker",
    url: "video-poker",
    icon: VideoPokerSvg,
  },
 
];
