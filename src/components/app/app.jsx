import React from "react";
import PropTypes from "prop-types";
import {Main} from "../main/Main.jsx";

export const App = ({countOffers, offers}) => {
  return <Main countOffers={
    countOffers} offers={offers}/>;
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired
      })
  ).isRequired,
};
