import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PlacesList} from '../places-list/places-list.jsx';
import {Map} from '../map/map.jsx';
import {LocationsList} from '../locations-list/locations-list.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import {Sort} from '../sort/sort.jsx';

class Main extends PureComponent {
  _offerTitleClickHandler(offer) {
    this.props.onOfferTitleClick(offer);
  }

  render() {
    const {city, offers, offersByCity, onCityLinkClick} = this.props;

    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList
            locations={offers.map(offer => offer.city.name)}
            currentLocation={city}
            onCityLinkClick={onCityLinkClick}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersByCity.length} places to stay in {city}
              </b>
              <Sort />
              <PlacesList
                className={`cities__places-`}
                isTabs={true}
                offers={offersByCity}
                onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
              />
            </section>
            <div className="cities__right-section">
              <Map className={`cities__map`} offers={offers.map(offer => offer.coords)} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  city: PropTypes.string.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  offersByCity: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  city: state.city,
  offersByCity: state.offers,
});

const mapDispatchToProps = dispatch => ({
  onCityLinkClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers());
  },
});

export {Main};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main); // TODO может перенести в app
