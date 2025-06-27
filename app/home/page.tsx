import { Metadata } from "next";
import { Suspense } from "react";

import {
  AVAILABLE_CATEGORIES,
  DEFAULT_PAGE_LIMIT,
} from "@/constants/gameFilters";
import HomePromotions from "@/components/features/home/Promotions";
import HomeFilters from "@/components/features/home/Filters/Filters";
import List from "@/components/features/home/List/List";
import ProvidersSection from "@/components/features/home/ProvidersSection";
import { parseSearchParamToArray } from "@/lib/searchParams";
import PaymentsSection from "@/components/features/home/PaymentsSection";
import CollapsibleSection from "@/components/features/home/CollapsibleSection";
import Heading from "@/components/features/home/Heading";

export const metadata: Metadata = {
  title: "Play the Best Games Online",
  description:
    "Thousands of casino, arcade and skill games — no download, totally free.",
};

type PageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string | string[];
    provider?: string | string[];
    page: number;
    limit: number;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const {
    search,
    category,
    provider,
    page = 1,
    limit = DEFAULT_PAGE_LIMIT,
  } = await searchParams;

  const activeCategories: string[] = parseSearchParamToArray(category);
  const activeProviders: string[] = parseSearchParamToArray(provider);
  const categoriesToDisplay =
    activeCategories.length > 0
      ? AVAILABLE_CATEGORIES.filter((cat) => activeCategories.includes(cat))
      : AVAILABLE_CATEGORIES;

  return (
    <div className="container mx-auto my-4 space-y-8 text-white">
      <Heading />
      <HomePromotions />
      <HomeFilters searchParams={searchParams} />
      {categoriesToDisplay.map((cat) => (
        <Suspense
          key={cat}
          fallback={
            <div className="h-[240px] w-full animate-pulse rounded-lg bg-zinc-800/60" />
          }
        >
          <List
            title={cat.replace(/-/g, " ")}
            category={cat}
            search={search}
            provider={activeProviders.join(",")}
            limit={limit}
            page={page}
          />
        </Suspense>
      ))}
      <ProvidersSection />
      <PaymentsSection />
      <CollapsibleSection />
    </div>
  );
}
