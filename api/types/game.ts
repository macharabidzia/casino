// lib/types/games.ts

export interface Game {
  name: string;
  identifier: string;
  provider: string;
  categories: string[];
  image: string; // Assuming this is the URL for the game image
  // Add any other properties you observe in the API response's 'data' array
}

export interface Pagination {
  current_page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  next_page: number | null;
  prev_page: number | null;
}

export interface FiltersApplied {
  providers?: string[];
  categories?: string[];
  search?: string;
}

export interface GamesApiResponse {
  data: Game[];
  pagination: Pagination;
  filters_applied: FiltersApplied;
}

export interface FetchGamesParams {
  provider?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}
