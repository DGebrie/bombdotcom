import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import ListCard from "./ListCard";

function Popular() {
  // const [popular, setPopular] = useState([]);

  // useEffect(() => {
  //   getPopular();
  // }, []);

  // const getPopular = async () => {
  //   const api = await fetch(
  //     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
  //   );
  //   const data = await api.json();
  //   setPopular(data.recipes);
  //   console.log(data.recipes);
  // };

  return (
    <div className="justify-content-between row">
      {/* {popular.map((recipe) => {
        return ( */}
          <div className="col">
            {/* <ListCard curRecipe={recipe} /> */}

            <div className="card m-3" style={{ width: 300, height: 300 }}>
              <img src=""
              // {recipe.image} 
              className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#" className="black">
                    {/* {recipe.title} */}
                    TITLE
                  </a>
                </h5>
              </div>
            </div>
          </div>
        {/* );
      })} */}
    </div>
  );
}

export default Popular;
