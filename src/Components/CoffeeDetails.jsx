import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { _id, name } = useLoaderData();
  return (
    <div>
      <h1>CoffeDetails will be here</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default CoffeeDetails;
