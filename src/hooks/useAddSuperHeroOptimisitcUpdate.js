import { useMutation, useQueryClient } from "react-query";

const addHeroData = async (hero) => {
  const response = await fetch("http://localhost:4000/superheroes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hero),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("cannot add the hero");
  }
};

const useAddSuperHeroOptimisticUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation(addHeroData, {
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("superheroes");
      const previousData = queryClient.getQueryData("superheroes");
      queryClient.setQueryData("superheroes", (oldData) => {
        return [...oldData, { ...newHero, id: oldData.length + 1 }];
      });
      return { previousData };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("superheroes", (oldData) => {
        return context.previousData;
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries("superheroes");
    },
  });
};

export default useAddSuperHeroOptimisticUpdate;
