import React, { useRef } from "react";
import useAddSuperHeroOptimisticUpdate from "../hooks/useAddSuperHeroOptimisitcUpdate";

function PostMethodOptimisticUpdate() {
  const { mutate } = useAddSuperHeroOptimisticUpdate();

  const heroName = useRef(null);
  const heroAlterEgo = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = heroName.current.value;
    const alterEgo = heroAlterEgo.current.value;
    mutate({ name, alterEgo });
    console.log("submitted!");
    heroName.current.value = "";
    heroAlterEgo.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={heroName} placeholder="superhero-name" />
      <input type="text" ref={heroAlterEgo} placeholder="superhero-alter-ego" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostMethodOptimisticUpdate;
