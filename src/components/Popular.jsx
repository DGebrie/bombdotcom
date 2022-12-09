import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <>
            <div
              className="card"
              // style={width: 18rem}
            >
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  {/* {recipe.instructions} */}
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </>

          // <div>
          //   <p>{recipe.title}</p>
          // </div>
        );
      })}
    </div>
  );
}

export default Popular;
