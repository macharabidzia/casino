// actions/home/actions.ts
"use server";

import { appendArrayToSearchParams } from "@/lib/searchParams";
import { redirect } from "next/navigation";

export async function filterGamesAction(
  _previousState: unknown,
  formData: FormData
) {
  const params = new URLSearchParams();

  const search = formData.get("search") as string;
  if (search) {
    params.set("search", search);
  }

  const categories = formData.getAll("category") as string[];
  const providers = formData.getAll("provider") as string[];

  appendArrayToSearchParams(params, "category", categories);
  appendArrayToSearchParams(params, "provider", providers);

  return { redirect: `/home?${params.toString()}` };
}
