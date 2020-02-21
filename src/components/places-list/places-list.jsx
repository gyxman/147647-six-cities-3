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

  render() {
    const {offers} = this.props;

    return (<div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => (<PlaceCard key={`${i}-${offer.name}`} offer={offer} onHover={this._hoverHandler.bind(this)} />))}
    </div>
    );
  }

  _hoverHandler(place) {
    this.setState({
      activePlace: place
    });
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};
