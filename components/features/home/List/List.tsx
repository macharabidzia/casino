import { fetchGames } from "@/api/games";
import { ListCarousel } from "./ListCarousel";

export type ListProps = {
  title: string;
  category?: string;
  limit?: number;
  search?: string;
  provider?: string;
  page: any;
};

const List = async ({
  title,
  category,
  limit,
  search,
  provider,
  page,
}: ListProps) => {
  const { data: games } = await fetchGames({
    category,
    provider,
    search,
    page: page,
    limit,
  });

  if (!games?.length) return null;

  return (
    <section className="space-y-2">
      <h2 className="my-4 text-lg font-semibold capitalize">{title}</h2>
      <div className="relative">
        <ListCarousel games={games} />
      </div>
    </section>
  );
};

export default List;

export const revalidate = 60;
