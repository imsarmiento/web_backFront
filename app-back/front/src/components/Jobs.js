import React, { useState, useEffect } from "react";
import Job from "./Job";

function Jobs(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    console.log("entra");
    const url = "/offers";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((offers) => {
        setState({ offers });
      });
  }, []);

  return (
    <div>
      {state.offers ? (
        state.offers.map((e, i) => <Job key={i} offer={e} />)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Jobs;
