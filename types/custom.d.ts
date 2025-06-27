type Game = {
  id: string;
  name: string;
  image: string;
};

type Pagination = {
  current_page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  next_page: number | null;
  prev_page: number | null;
};
