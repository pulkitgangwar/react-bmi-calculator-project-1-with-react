import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Main = () => {
  return (
    <div className="main">
      <div className="main__card">
        <div className="main__toggle">
          <div tabIndex={0} className="main__toggle--su main__toggle__menu">
            STANDARD UNIT
          </div>
          <div
            tabIndex={0}
            className="main__toggle--mu main__toggle__menu main__toggle--active"
          >
            METRIC UNIT
          </div>
        </div>

        <div className="main__form">
          <div className="main__input--wrapper">
            <Input
              type="text"
              placeholder="ENTER YOUR HEIGHT IN FEET"
              label="HEIGHT(FEET)"
              onChange={() => {}}
              value=""
              error=""
            />
          </div>
          <div className="main__input--wrapper">
            <Input
              type="text"
              placeholder="INCHES"
              label="INCHES"
              onChange={() => {}}
              value=""
              error=""
            />
          </div>

          <div className="main__input--wrapper">
            <Input
              type="text"
              placeholder="ENTER YOUR WEIGHT IN POUNDS"
              label="WEIGHT(POUNDS)"
              onChange={() => {}}
              value=""
              error=""
            />
          </div>

          <Button text="CALCULATE" onButtonClick={() => {}} disabled={false} />
        </div>
      </div>
    </div>
  );
};

export default Main;
