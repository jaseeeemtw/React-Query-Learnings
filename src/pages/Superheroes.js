import { Button } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import useSuperHero from "../hooks/useSuperHero";

function Superheroes() {
  const { isError, error, isFetching, isLoading, data, refetch } = useQuery(
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
      staleTime: 10000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      //  refetchInterval: 2000,
      //  refetchIntervalInBackground: true,
      // enabled: false,
    }
  );

  /*const {
    isError: isError2,
    error: error2,
    isFetching: isFetching2,
    isLoading: isLoading2,
    data: data2,
    refetch: refetch2,
  } = useSuperHero(2);*/

  // console.log("fetched => " + isFetching + " loading => " + isLoading);

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return (
      <div>
        <h2>Error Occured</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Superheroes</h2>
      <Button variant="contained" onClick={refetch}>
        Click to fetch data
      </Button>
      {/* <Button variant="contained" onClick={refetch2}>
        single hero data
      </Button> */}
      <ul>
        {data && data.map((hero) => <li key={hero.name}>{hero.name}</li>)}
      </ul>
      {/* {data2 && <h5>{data2}</h5>} */}
    </div>
  );
}

export default Superheroes;
