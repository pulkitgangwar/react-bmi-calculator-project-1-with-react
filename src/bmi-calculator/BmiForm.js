import React from "react";

export default class BmiForm extends React.Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.handleSubmit}>
        <input
          className="form__input form__input--weight"
          name="weight"
          type="text"
          placeholder="Enter Weight in kg"
          value={this.props.weight}
          onChange={this.props.handleChange}
          autoComplete="off"
        />
        <input
          className="form__input form__input--height"
          name="height"
          type="text"
          placeholder="Enter Height in meter"
          value={this.props.height}
          onChange={this.props.handleChange}
          autoComplete="off"
        />
        <div className="form__btn--wrapper">
          <button className="form__btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
