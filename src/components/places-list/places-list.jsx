import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {PlaceCard} from "../place-card/place-card.jsx";

export class PlacesList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activePlace: {},
    };
  }

  _hoverHandler(place) {
    this.setState({
      activePlace: place
    });
  }

  _offerTitleClickHandler(offer) {
    this.props.onOfferTitleClick(offer);
  }

  render() {
    const {offers, className, isTabs} = this.props;

    return (<div className={className + `list places__list` + (isTabs ? ` tabs__content` : ``)}>
      {offers.map((offer, i) => (<PlaceCard key={`${i}-${offer.name}`} className={isTabs ? `cities__place-` : `near-places__`} offer={offer} onHover={this._hoverHandler.bind(this)} onOfferTitleClick={this._offerTitleClickHandler.bind(this)} />))}
    </div>);
  }
}

PlacesList.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  isTabs: PropTypes.bool.isRequired,
};
