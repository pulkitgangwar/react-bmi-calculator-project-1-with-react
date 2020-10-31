import React from "react";
import Toggle from "../components/Toggle";
import WeightForm from "../components/WeightForm";

const Weight = () => {
  return (
    <div className="weight">
      <div className="weight__card">
        <Toggle
          primaryToggle={{
            title: "height",
            link: "/height",
          }}
          secondaryToggle={{
            title: "weight",
            link: "/weight",
          }}
        />

        <WeightForm />
      </div>
    </div>
  );
};

export default Weight;
