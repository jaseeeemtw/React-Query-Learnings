import { useQuery, useQueryClient } from "react-query";

const fetchSuperHeroById = async ({ queryKey }) => {
  const id = queryKey[1];
  const result = await fetch(`http://localhost:4000/superheroes/${id}`);
  return result.json();
};

const useSuperHero = (heroId) => {
  const queryClient = useQueryClient();

  return useQuery(["super-hero", heroId], fetchSuperHeroById, {
    // enabled: false,
   // select: (data) => data.name,
    initialData: () => {
      const hero = queryClient
        .getQueryData("superheroes")
        ?.find((hero) => parseInt(hero.id) === heroId);
    //   console.log(hero);
      if (hero) {
        return hero;
      } else {
        return undefined;
      }
    },
  });
};

export default useSuperHero;
