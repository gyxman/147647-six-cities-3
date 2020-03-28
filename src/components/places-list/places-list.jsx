import React from 'react';
import PropTypes from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';

export const PlacesList = (props) => {
  const {onHover, onSelect, offers, favorites, className, isTabs, onBookmark} = props;

  // переделать классы
  return (
    <div className={className + `list places__list` + (isTabs ? ` tabs__content` : ``)}>
      {offers.map((offer, i) => (
        <PlaceCard
          key={`${i}-${offer.name}`}
          className={isTabs ? `cities__place-` : `near-places__`}
          offer={offer}
          isFavorite={!!favorites[offer.id]}
          onOfferTitleHover={onHover}
          onOfferTitleClick={onSelect}
          onBookmarkButtonClick={onBookmark}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  onHover: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onBookmark: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  favorites: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
  isTabs: PropTypes.bool.isRequired,
};
