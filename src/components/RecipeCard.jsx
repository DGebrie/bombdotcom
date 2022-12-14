import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Gradient = styled.div`
z-index:3;
position: absolute;
width:100%
height: 100%
backgorund: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))

`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
img {
  border-radius: 2rem;
  position: absolute;
  left:0;
  height: 100%
  width: 100%;
  object-fit: cover
}
p {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  height: 40%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  algin-items: center;

}
`;
const RecipeCard = (recipe) => {
  return (
    <>
      <SplideSlide>
        <Card className="">
          <Link to={"/recipe/" + recipe.recipe.id}>
            <p>{recipe.recipe.title}</p>
            <img src={recipe.recipe.image} alt={recipe.recipe.title} />
            <Gradient />
          </Link>
        </Card>
      </SplideSlide>
    </>
  );
};

export default RecipeCard;
