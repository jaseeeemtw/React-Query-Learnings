import { useQueries } from "react-query";

const getSuperHero = async (id) => {
  const result = await fetch(`http://localhost:4000/superheroes/${id}`);
  if (result.ok) {
    return result.json();
  } else {
    throw new Error("couldn't fetch data");
  }
};

const useMultipleHeroes = (heroIds) => {
  const queryResults = useQueries(
    heroIds.map((heroId) => ({
      queryKey: ["super-hero", heroId],
      queryFn: () => getSuperHero(heroId),
    }))
  );
  return queryResults;
};

export default useMultipleHeroes;
