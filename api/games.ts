// lib/api/fetchGames.ts
import { api } from "./config/apiBase";

const DEFAULT_PAGE_LIMIT = Number(
  process.env.NEXT_PUBLIC_DEFAULT_PAGE_LIMIT ?? 20
);
const MAX_PAGE_LIMIT = Number(process.env.NEXT_PUBLIC_MAX_PAGE_LIMIT ?? 100);

export interface FetchGamesParams {
  provider?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}

// TODO: replace `any` with your real API response shape
type GamesApiResponse = any;

/**
 * Fetch casino games (async / await edition).
 * Returns the parsed JSON payload.
 */
export async function fetchGames({
  provider,
  category,
  search,
  page = 1,
  limit = DEFAULT_PAGE_LIMIT,
}: FetchGamesParams = {}): Promise<GamesApiResponse> {
  const clampedLimit = Math.min(Math.max(limit, 1), MAX_PAGE_LIMIT);
  try {
    const response = await api.get<GamesApiResponse>("games/list.php", {
      params: {
        ...(provider && { provider }),
        ...(category && { category }),
        ...(search && search.length >= 3 && { search }),
        page,
        limit: clampedLimit,
        
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response) {
      throw new Error(
        `API error: ${err.response.status} ${err.response.statusText}`
      );
    }
    throw err;
  }
}
