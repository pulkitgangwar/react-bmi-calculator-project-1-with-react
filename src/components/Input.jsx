import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type,
  label,
  placeholder,
  onChange,
  value,
  error,
  required,
}) => {
  return (
    <div className="input">
      <label htmlFor={`input__element--${label}`} className="input__label">
        {label}
      </label>
      <input
        className="input__input"
        id={`input__element--${label}`}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && (
        <div className="input__error-box">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
