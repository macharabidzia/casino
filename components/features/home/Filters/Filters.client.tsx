"use client";

import {
  useEffect,
  useRef,
  useState,
  useTransition,
  useActionState,
} from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { filterGamesAction } from "@/actions/home/actions";
import { items } from "@/lib/menu-data";
import useDebounce from "@/hooks/use-debounce";
import MultiSelectFilter from "@/components/common/MultiSelectComponent";

export default function HomeFiltersClient({
  initialSearch = "",
  initialCategories = [],
  initialProviders = [],
  categoryOptions,
  providerOptions,
}: {
  initialSearch?: string;
  initialCategories?: string[];
  initialProviders?: string[];
  categoryOptions: Option[];
  providerOptions: Option[];
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);
  const [selectedProviders, setSelectedProviders] = useState(initialProviders);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [actionResult, runAction] = useActionState(
    async (_: unknown, formData: FormData) => filterGamesAction(_, formData),
    null as { redirect: string } | null
  );

  useEffect(() => {
    if (actionResult?.redirect) {
      startTransition(() =>
        router.replace(actionResult.redirect, { scroll: false })
      );
    }
  }, [actionResult, router, startTransition]);

  const submitSilently = () =>
    setTimeout(() => formRef.current?.requestSubmit());

  useEffect(() => {
    if (debouncedSearchTerm !== initialSearch) submitSilently();
  }, [debouncedSearchTerm, initialSearch]);

  return (
    <form ref={formRef} action={runAction} className="flex flex-col gap-4">
      {selectedCategories.map((c) => (
        <input key={c} type="hidden" name="category" value={c} />
      ))}
      {selectedProviders.map((p) => (
        <input key={p} type="hidden" name="provider" value={p} />
      ))}

      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          name="search"
          placeholder="Search your game"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-col gap-4 sm:flex-row">
          <MultiSelectFilter
            title="Collections"
            options={categoryOptions}
            selectedValues={selectedCategories}
            onSelectionChange={(val) => {
              setSelectedCategories(val);
              submitSilently();
            }}
          />
          <MultiSelectFilter
            title="Providers"
            options={providerOptions}
            selectedValues={selectedProviders}
            onSelectionChange={(val) => {
              setSelectedProviders(val);
              submitSilently();
            }}
          />
        </div>
      </div>

      <div className="flex flex-row flex-nowrap gap-2 overflow-x-auto whitespace-nowrap no-scrollbar md:flex-wrap md:overflow-visible">
        {items.map((m) => (
          <Button
            key={m.title}
            type="submit"
            name="search"
            value={m.url}
            variant="outline"
            size="sm"
            className="flex-none gap-1 h-[40px]"
          >
            <m.icon className="h-4 w-4" />
            {m.title}
          </Button>
        ))}
      </div>
    </form>
  );
}
