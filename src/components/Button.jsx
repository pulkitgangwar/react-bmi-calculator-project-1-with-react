import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onButtonClick, disabled }) => {
  return (
    <button className="button" onClick={onButtonClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
