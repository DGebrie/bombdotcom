import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <>
      <div className="d-none d-xl-block">
        <DetailWrapper>
          <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
          </div>
          <div className="container-fluid mb-4">
            <Button
              className={activeTab === "instructions" ? "active" : ""}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </Button>
            <Button
              className={activeTab === "ingredients" ? "active" : ""}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </Button>
            {activeTab === "instructions" && (
              <div>
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: details.summary }}
                ></p>
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </div>
        </DetailWrapper>
      </div>
      <div className="d-block d-xl-none">
        <MobileWrapper>
          <div>
            <h2 className="text-center mt-5">{details.title}</h2>
            <img
              src={details.image}
              alt={details.title}
              className="rounded img-fluid"
            />
          </div>
          <p
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: details.summary }}
          ></p>
          <div className="d-flex justify-content-center my-4">
            <Button
              className={activeTab === "instructions" ? "active" : ""}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </Button>
            <Button
              className={activeTab === "ingredients" ? "active" : ""}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </Button>
          </div>
          <div>
            {activeTab === "instructions" && (
              <div>
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </div>
        </MobileWrapper>
      </div>
    </>
  );
};
const MobileWrapper = styled.div`
  .active {
    background: #313131;
    color: white;
  }
`;

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: #313131;
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
    font-weight: bold;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;
`;

export default Recipe;
