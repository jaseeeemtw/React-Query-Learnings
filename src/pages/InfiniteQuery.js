import { Button } from "@mui/material";
import React from "react";
import { useInfiniteQuery } from "react-query";

const getAllColours = async ({ pageParam = 1 }) => {
  const result = await fetch(
    `http://localhost:4000/colors?_limit=2&_page=${pageParam}`
  );
  return result.json();
};

function InfiniteQuery() {
  const { isError, isFetching, isLoading, data, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["colors"], getAllColours, {
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage);
        if (allPages.length < 4) {
          return allPages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  if (isError) {
    return <div>Error ...</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h3>Colors</h3>
      <ul>
        {data.pages.map((group) =>
          group.map((color) => <li key={color.label}>{color.label}</li>)
        )}
      </ul>
      {isFetching && <div> Fetching ... </div>}
      {hasNextPage && (
        <Button
          disabled={!hasNextPage}
          variant="contained"
          onClick={fetchNextPage}
        >
          load more ...
        </Button>
      )}
    </div>
  );
}

export default InfiniteQuery;
