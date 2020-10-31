import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Back = ({ text, link }) => {
  return (
    <div className="back">
      <Link to={link}>{text}</Link>
    </div>
  );
};

Back.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Back;
