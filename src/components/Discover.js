import React, { useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Discover = () => {
  // console.log(history);
  const history = useHistory();
  const [fruit, setFruit] = useState(null);
  const [country, setCountry] = useState(null);
  const location = useLocation();
  const queries = queryString.parse(location.search);

  const handleClick = () => {
    const params = `${fruit ? `/${fruit}` : ""}${
      fruit && country ? `/${country}` : ""
    }`;
    history.push(`/fruits${params}`);
  };
  // console.log(queries);
  return (
    <>
      <h1>Discover our fruits selection page</h1>
      <input
        type="text"
        placeholder="Search for a fruit"
        onChange={(e) => setFruit(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search for a country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={() => handleClick()}>Go!</button>
    </>
  );
};

export default Discover;
