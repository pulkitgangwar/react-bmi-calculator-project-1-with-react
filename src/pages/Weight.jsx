import React from "react";
import Toggle from "../components/Toggle";
import WeightForm from "../components/WeightForm";
import { Helmet } from "react-helmet";

const Weight = () => {
  return (
    <div className="weight">
      <Helmet>
        <title>Weight Unit Converter &ndash; BMI Calculator </title>
        <meta name="description" content="Weight Unit Converter" />
      </Helmet>
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
