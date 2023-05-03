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

const useAddSuperHero = () => {
  const queryClient = useQueryClient();

  return useMutation(addHeroData, {
    onSuccess: (heroData) => {
      //queryClient.invalidateQueries("superheroes");
      queryClient.setQueryData("superheroes", (oldData) => {
        return [...oldData, heroData];
      });
    },
  });
};

export default useAddSuperHero;
