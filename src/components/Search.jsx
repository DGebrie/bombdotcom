import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form class="row mt-5" onSubmit={submitHandler}>
      <div class="col-md-5 mx-auto">
        <div class="input-group">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="search"
            className="form-control rounded text-white"
            placeholder="Recipes"
            aria-label="Search"
            aria-describedby="search-addon"
            value={input}
            style={{
              backgroundColor: "#313131",
              color: "white",
              borderRadius: 1,
              width: 100,
              text: "white",
            }}
          />
          <span className="input-group-append">
            <button className="btn border-start-0 " type="submit">
              <FaSearch />
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Search;
