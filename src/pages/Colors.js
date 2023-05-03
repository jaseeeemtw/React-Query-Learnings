import { Button } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";

const getAllColours = async (limit, pageNumber) => {
  const result = await fetch(
    `http://localhost:4000/colors?_limit=${limit}&_page=${pageNumber}`
  );
  return result.json();
};

function Colors() {
  const [pageNumber, setPageNumber] = useState(1);

  const limit = 2;

  const { isError, isLoading, data, isFetching } = useQuery(
    ["get-colors", pageNumber],
    () => getAllColours(limit, pageNumber)
  );

  const handlePageDecrease = () => {
    setPageNumber((prevPage) => prevPage - 1);
  };

  const handlePageIncrease = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error ...</div>;
  }

  return (
    <div>
      <h3>Colors</h3>
      <ul>
        {data.map((color) => (
          <li>{color.label}</li>
        ))}
      </ul>
      {pageNumber > 1 && (
        <Button onClick={handlePageDecrease} variant="contained">
          Back
        </Button>
      )}
      {pageNumber < 4 && (
        <Button onClick={handlePageIncrease} variant="contained">
          Next
        </Button>
      )}
    </div>
  );
}

export default Colors;
