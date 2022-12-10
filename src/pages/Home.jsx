import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

import React from "react";

function Home() {
  return (
    <div>
      <Veggie />
      <div className="m-5 center">
        <Popular />
      </div>
    </div>
  );
}

export default Home;
