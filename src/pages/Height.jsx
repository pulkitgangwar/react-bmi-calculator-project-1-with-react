import React from "react";
import Toggle from "../components/Toggle";
import HeightForm from "../components/HeightForm";

const Height = () => {
  return (
    <div className="height">
      <div className="height__card">
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

        <HeightForm />
      </div>
    </div>
  );
};

export default Height;
