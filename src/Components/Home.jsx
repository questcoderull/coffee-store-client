import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeCard from "./CoffeCard";

const Home = () => {
  const initialCoffes = useLoaderData();
  // console.log(coffes);

  const [coffees, setCoffees] = useState(initialCoffes);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
