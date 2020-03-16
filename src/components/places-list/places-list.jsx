import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';

export class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  _hoverHandler(offer) {
    this.props.onOfferTitleHover(offer);
  }

  _offerTitleClickHandler(offer) {
    this.props.onOfferTitleClick(offer);
  }

  render() {
    const {offers, className, isTabs} = this.props;

    // переделать классы
    return (
      <div className={className + `list places__list` + (isTabs ? ` tabs__content` : ``)}>
        {offers.map((offer, i) => (
          <PlaceCard
            key={`${i}-${offer.name}`}
            className={isTabs ? `cities__place-` : `near-places__`}
            offer={offer}
            onOfferTitleHover={this._hoverHandler.bind(this)}
            onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  onOfferTitleHover: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  isTabs: PropTypes.bool.isRequired,
};
