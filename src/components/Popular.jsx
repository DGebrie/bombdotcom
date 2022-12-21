import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { Splide } from "@splidejs/react-splide";
import styled from "styled-components";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
    // console.log("Effect");
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <>
      <div className="d-none d-md-block">
        <h3>Popular Picks</h3>
        <Splide
          aria-label="Popular Recipes"
          options={{
            perPage: 4,
            gap: "5rem",
            pagination: false,
            drag: true,
            breakpoints: {
              768: {
                perPage: 2,
              },
              992: {
                perPage: 3,
              },
            },
          }}
        >
          {popular.map((recipe) => {
            return <RecipeCard recipe={recipe} key={recipe.id} />;
          })}
        </Splide>
      </div>
      <div className="d-block d-md-none">
        <h3 className="text-center" style={{ fontWeight: 900 }}>
          Popular Picks
        </h3>
        {popular.map((recipe, i) => {
          if (i < 3) {
            return <RecipeCard recipe={recipe} key={recipe.id} />;
          }
        })}
        {/* <p>
          <Link>See more Popular recipes...</Link>
        </p> */}
      </div>
    </>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
export default Popular;
