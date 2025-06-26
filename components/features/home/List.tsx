import { fetchGames } from "@/api/games";

export type ListProps = {
  title: string;
  category?: string;
  limit?: number;
  search?: string;
  provider?: string;
};

const List = async ({
  title,
  category,
  limit,
  search,
  provider,
}: ListProps) => {
  console.log(category);
  const { data: games } = await fetchGames({
    category,
    provider,
    search,
    page: 1,
    limit,
  });

  console.log(games);
  if (!games?.length) return null;

  return (
    <section className="space-y-2">
      <h2 className="my-4 text-lg font-semibold capitalize">{title}</h2>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {games.map((g: { id: string; name: string; image: any }) => (
          <div
            key={g.id}
            className="rounded-lg flex-none w-[112px] h-[150px] md:w-[150px] md:h-[200px] overflow-hidden"
          >
            <img
              className="h-full w-full object-cover rounded-lg"
              alt={g.name}
              src={g.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;

/**
 * Re-validate each section once a minute.
 * (Change this or omit it to use Next.js’s default caching.)
 */
export const revalidate = 60;
