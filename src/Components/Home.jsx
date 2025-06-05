import React from "react";
import { useLoaderData } from "react-router";
import CoffeCard from "./CoffeCard";

const Home = () => {
  const coffes = useLoaderData();
  console.log(coffes);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {coffes.map((coffee) => (
          <CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
