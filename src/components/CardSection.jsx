import React from "react";
import GraphCard from "./GraphCard";
import Card from "../ui/CardUI";

const CardSection = () => {
  return (
    <div className="mt-5 mx-14 ">
      <div className="flex gap-2">
        <div>
          <GraphCard />
        </div>
        <div className="flex gap-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
