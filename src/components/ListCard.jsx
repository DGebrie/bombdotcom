import React from "react";

const ListCard = (curRecipe) => {
  return (
    <>
      <div className="card" style={{ width: 18 }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <a href="#" className="btn btn-primary">
              {curRecipe.title}
            </a>
          </h5>
        </div>
      </div>
    </>
  );
};

export default ListCard;
