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
    // <form class="input-group rounded m-0" onSubmit={submitHandler}>
    //   <input
    //     onChange={(e) => setInput(e.target.value)}
    //     type="search"
    //     className="form-control rounded text-white"
    //     placeholder="Search"
    //     aria-label="Search"
    //     aria-describedby="search-addon"
    //     value={input}
    //     style={{
    //       backgroundColor: "#313131",
    //       color: "white",
    //       border: "none",
    //       width: 100,
    //       text: "white",
    //     }}
    //   />
    //   <button
    //     style={{
    //       backgroundColor: "#313131",
    //       color: "white",
    //     }}
    //     class="input-group-text border-0"
    //     id="search-addon"
    //     type="submit"
    //   >
    //     <FaSearch />
    //   </button>
    // </form>

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
    // <FormStyle onSubmit={submitHandler}>
    //   <div>
    //     <FaSearch />
    //     <input
    //       onChange={(e) => setInput(e.target.value)}
    //       type="text"
    //       value={input}
    //     />
    //   </div>
    // </FormStyle>
  );
};

const icon = styled.svg`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(100%, -50%);
  color: white;
`;

// const FormStyle = styled.form`
//   margin: 0rem 20rem;
//   div {
//     width: 100%;
//     position: relative;
//   }
//   input {
//     border: none;
//     background: #313131;
//     font-size: 1rem;
//     color: white;
//     padding: 1rem 3rem;
//     border: none;
//     border-radius: 1rem;
//     width: 100%;
//     outline: none;
//   }
//   svg {
//     position: absolute;
//     top: 50%;
//     left: 0%;
//     transform: translate(100%, -50%);
//     color: white;
//   }
// `;

export default Search;
