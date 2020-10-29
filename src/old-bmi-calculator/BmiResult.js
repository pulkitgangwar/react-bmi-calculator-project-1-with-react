import React from "react";

export default class BmiResult extends React.Component {
  handleBmiResultValue = () => {
    const result = this.props.bmiResult;
    if (result < 15) {
      return {
        backgroundColor: "#ffb04b",
        problem: "Very severely underweight"
      };
    } else if (result <= 16 && result > 15) {
      return {
        backgroundColor: "#ffb04b",
        problem: "Severely underweight"
      };
    } else if (result <= 18.5 && result > 16) {
      return {
        backgroundColor: "#ffb04b",
        problem: "Underweight"
      };
    } else if (result <= 25 && result > 18.5) {
      return {
        backgroundColor: "#80ff80",
        problem: "	Normal (healthy weight)"
      };
    } else if (result <= 30 && result > 25) {
      return {
        backgroundColor: "#ffb04b",
        problem: "	Overweight"
      };
    } else if (result <= 35 && result > 30) {
      return {
        backgroundColor: "#ff4040",
        problem: "	Moderately obese"
      };
    } else if (result <= 40 && result > 35) {
      return {
        backgroundColor: "#ff4040",
        problem: "Severely obese"
      };
    } else if (result > 40) {
      return {
        backgroundColor: "#ff4040",
        problem: "Very severely obese"
      };
    }
  };

  render() {
    return (
      <div className="result">
        {this.props.bmiResult === 0 ? (
          <h1 className="result__heading">Result Will Be Displayed Here</h1>
        ) : (
          <h1
            className="result__heading"
            style={{
              backgroundColor: this.handleBmiResultValue().backgroundColor
            }}
          >
            Your Body Mass Index Is{" "}
            <span className="result__heading--main">
              {this.props.bmiResult}
            </span>
            <span className="result__heading--sub">
              {this.handleBmiResultValue().problem}
            </span>
          </h1>
        )}
        {/* {this.handleBmiResultValue()} */}
      </div>
    );
  }
}
