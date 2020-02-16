import React from "react";
import PropTypes from "prop-types";
import {Main} from "../main/main.jsx";

const offerTitleHandler = () => {};

export const App = ({countOffers, offers}) => {
  return <Main countOffers={countOffers}
    offers={offers}
    onOfferTitleClick={offerTitleHandler}
  />;
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
