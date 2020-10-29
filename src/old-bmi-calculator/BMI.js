import React from "react";
import "./BMI.css";

import BmiForm from "./BmiForm";
import BmiResult from "./BmiResult";

export default class BMI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: 0,
      height: 0,
      bmiResult: 0
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (isNaN(this.state.height) || isNaN(this.state.weight)) {
      this.setState({ height: 0, weight: 0 });
      return console.log("invalid input");
    }

    this.setState({
      bmiResult: this.state.weight / this.state.height ** 2,
      weight: 0,
      height: 0
    });
    return console.log("valid input");
  };

  render() {
    return (
      <div className="container">
        <h1 className="container__heading">BMI Calculator</h1>
        <BmiForm
          height={this.state.height}
          weight={this.state.weight}
          bmiResult={this.state.bmiResult}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <BmiResult bmiResult={this.state.bmiResult} />
      </div>
    );
  }
}
