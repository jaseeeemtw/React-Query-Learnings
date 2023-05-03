import React from "react";
import useDependentQueries from "../hooks/useDependentQueries";
import useMultipleHeroes from "../hooks/useMultipleHeroes";

function Home() {
  const queryResults = useMultipleHeroes([1, 3]);
  const channelDetails = useDependentQueries("abc@example.com");
  // console.log(channelDetails);

  // console.log(queryResults);

  return (
    <div>
      <h3>Home</h3>
      {queryResults.map((result, index) => {
        const { isLoading, data } = result;
        if (isLoading) {
          return <p key={index}>Loading ...</p>;
        }
        return <p key={index}>{data.name}</p>;
      })}
      {channelDetails ? <h5>Channel Details Fetched</h5> : <h5>Loading...</h5>}
    </div>
  );
}

export default Home;
