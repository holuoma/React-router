import React from "react";
import { useParams } from "react-router-dom";

// const OurFruits = ({ match }) => {
// console.log(props.match.params);
const OurFruits = () => {
  const { name, country } = useParams();
  return (
    <>
      <h1>Our fruits page</h1>
      {name && (
        <p>
          This is the section about {name}s {country && `from ${country}`}!
        </p>
      )}
    </>
  );
};

export default OurFruits;
