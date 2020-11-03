import React from "react";
import { Helmet } from "react-helmet";
import Toggle from "../components/Toggle";
import HeightForm from "../components/HeightForm";

const Height = () => {
  return (
    <div className="height">
      <Helmet>
        <title>Height Unit Converter &ndash; BMI Calculator </title>
        <meta name="description" content="Height Unit Converter" />
      </Helmet>
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
