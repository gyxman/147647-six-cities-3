import React from "react";
import PropTypes from "prop-types";

export const LocationsList = (props) => {
  const {locations, currentLocation, onCityLinkClick} = props;

  return (<section className="locations container">
    <ul className="locations__list tabs__list">
      {locations.map((city, i) => (<li key={`${i}-${city}`} className="locations__item">
        <a className={`locations__item-link tabs__item` + (currentLocation === city ? ` tabs__item--active` : ``)} href="#" onClick={(event) => {
          event.persist();
          event.preventDefault();
          onCityLinkClick(event.target.text || event.target.innerText);
        }}>
          <span>{city}</span>
        </a>
      </li>))}
    </ul>
  </section>);
};

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentLocation: PropTypes.string.isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
};
