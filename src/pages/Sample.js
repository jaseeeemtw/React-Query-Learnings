import React from "react";
import useSuperHero from "../hooks/useSuperHero";

function Sample() {
  const {
    isError: isError2,
    error: error2,
    isFetching: isFetching2,
    isLoading: isLoading2,
    data: data2,
    refetch: refetch2,
  } = useSuperHero(2);

  console.log(data2);

  if (isLoading2) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h5>
        Name is: <span>{data2.name}</span>
      </h5>
      <h5>
        alterEgo is: <span>{data2.alterEgo}</span>
      </h5>
    </div>
  );
}

export default Sample;
