import React, { useState } from "react";
import Input from "./Input";

const WeightForm = () => {
  const [pound, setPound] = useState("");
  const [kilogram, setKilogram] = useState("");
  const [errors, setErrors] = useState({
    pound: "",
    kilogram: "",
  });

  const onPoundChange = (event) => {
    const value = event.target.value;
    setPound(value);
    if (isNaN(value) || parseFloat(value) >= 9999) {
      setErrors({
        pound: "*please enter valid value",
        kilogram: "",
      });
      return;
    }

    setKilogram(value / 2.205);
    setErrors({
      pound: "",
      kilogram: "",
    });
  };

  const onKilogramChange = (event) => {
    const value = event.target.value;
    setKilogram(value);
    if (isNaN(value) || parseFloat(value) >= 9999) {
      setErrors({
        pound: "",
        kilogram: "*please enter valid value",
      });
      return;
    }

    setPound(value * 2.205);
    setErrors({
      pound: "",
      kilogram: "",
    });
  };

  return (
    <div className="heightform__form">
      <div className="heightform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER VALUE IN POUND(LB)"
          label="POUND(LB)"
          onChange={onPoundChange}
          value={pound}
          error={errors.pound}
        />
      </div>

      <div className="heightform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER VALUE IN KILOGRAM(KG)"
          label="KILOGRAM(KG)"
          onChange={onKilogramChange}
          value={kilogram}
          error={errors.kilogram}
        />
      </div>
    </div>
  );
};

export default WeightForm;
