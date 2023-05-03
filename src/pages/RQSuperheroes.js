import React from "react";
import useCustomQuery from "../hooks/useCustomQuery";

function RQSuperheroes() {
  const onSuccess = (data) => {
    console.log("successfully fetched the data");
  };

  const onError = (error) => {
    console.log("Error while fetching the data");
  };

  const { isError, error, isFetching, isLoading, data } = useCustomQuery(
    onSuccess,
    onError
  );

  // console.log(isFetching + " " + isLoading);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return (
      <div>
        <h2>Error Occured == {error.message}</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Superheroes</h2>
      <ul>{data && data.map((name) => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}

export default RQSuperheroes;
