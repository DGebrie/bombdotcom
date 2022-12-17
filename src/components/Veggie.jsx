import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Splide } from "@splidejs/react-splide";
import styled from "styled-components";
import "@splidejs/react-splide/css";

function Veggie(recipe) {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
    console.log("Effect");
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <div className="">
      <Wrapper>
        <h3 style={{ fontWeight: 900 }}>Our Vegetarian Picks</h3>
        <Splide
          aria-label="Popular Recipes"
          options={{
            perPage: 3,
            gap: "5rem",
            // arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {veggie.map((recipe) => {
            return <RecipeCard recipe={recipe} key={recipe.id} />;
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Veggie;
