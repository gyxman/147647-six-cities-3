import React from "react";
import PropTypes from "prop-types";
import {Main} from "../main/main.jsx";

export const App = ({offers}) => {
  return <Main offers={offers}/>;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};
