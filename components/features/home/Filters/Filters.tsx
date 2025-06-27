import {
  AVAILABLE_CATEGORIES,
  AVAILABLE_PROVIDERS,
} from "@/constants/gameFilters";
import { parseSearchParamToArray } from "@/lib/searchParams";
import HomeFiltersClient from "./Filters.client";

interface HomeFiltersProps {
  searchParams: Promise<{
    search?: string;
    category?: string | string[];
    provider?: string | string[];
  }>;
}

export default async function HomeFilters({ searchParams }: HomeFiltersProps) {
  const resolvedSearchParams = await searchParams;

  const categories = parseSearchParamToArray(resolvedSearchParams.category);
  const providers = parseSearchParamToArray(resolvedSearchParams.provider);

  const categoryOptions: { value: string; label: string }[] =
    AVAILABLE_CATEGORIES.map((c: string) => ({
      value: c,
      label: c.replace(/-/g, " "),
    }));

  const providerOptions: { value: string; label: string }[] =
    AVAILABLE_PROVIDERS.map((p: string) => ({
      value: p,
      label: p.replace(/-/g, " "),
    }));

  return (
    <HomeFiltersClient
      initialSearch={resolvedSearchParams.search}
      initialCategories={categories}
      initialProviders={providers}
      categoryOptions={categoryOptions}
      providerOptions={providerOptions}
    />
  );
}
