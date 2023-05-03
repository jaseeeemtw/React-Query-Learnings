import { useQuery } from "react-query";

const useCustomQuery = (onSuccess, onError) => {
  const { isError, error, isFetching, isLoading, data } = useQuery(
    "superheroes",
    async () => {
      const result = await fetch("http://localhost:4000/superheroes");
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("data not fetched");
      }
    },
    {
      cacheTime: 30000,
      staleTime: 5000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchInterval: 2000,
      refetchIntervalInBackground: true,
      onSuccess,
      onError,
      select: (data) => {
        const namesOnly = data.map((hero) => hero.name);
        return namesOnly;
      },
    }
  );
  return { isError, error, isFetching, isLoading, data };
};

export default useCustomQuery;
