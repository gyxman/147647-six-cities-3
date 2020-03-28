import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PlacesList} from '../places-list/places-list.jsx';
import {Map} from '../map/map.jsx';
import {LocationsList} from '../locations-list/locations-list.jsx';
import {Sort} from '../sort/sort.jsx';
import {getSortedOffers} from '../../utils';
import withActiveItem from "../../hocs/withActiveItem/with-active-item";
import Empty from "../empty/empty.jsx";

const PlacesListWrapped = withActiveItem(PlacesList);

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  _offerTitleClickHandler(offer) {
    this.props.onOfferTitleClick(offer);
  }

  _offerTitleHoverHandler(offer) {
    this.setState({activeOffer: offer});
  }

  _renderApp() {
    const {
      city,
      offers,
      onSortButtonClick,
      sort,
      favorites,
      onBookmark
    } = this.props;

    const {activeOffer} = this.state;

    if (offers.length) {
      return (<div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {city}
          </b>
          <Sort onSortButtonClick={onSortButtonClick}/>
          <PlacesListWrapped className={`cities__places-`}
            isTabs={true}
            offers={getSortedOffers(sort, offers)}
            favorites={favorites}
            onHover={this._offerTitleHoverHandler.bind(this)}
            onSelect={this._offerTitleClickHandler.bind(this)}
            onBookmark={onBookmark} />
        </section>
        <div className="cities__right-section">
          <Map
            className={`cities__map`}
            offers={offers.map((offer) => offer.location)}
            activeOffer={activeOffer ? activeOffer.location : activeOffer}
          />
        </div>
      </div>);
    }

    return <Empty/>;
  }

  render() {
    const {
      cities,
      city,
      onCityLinkClick,
    } = this.props;

    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList
            locations={cities}
            currentLocation={city}
            onCityLinkClick={onCityLinkClick}
          />
        </div>
        <div className="cities">
          {this._renderApp()}
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  favorites: PropTypes.shape({}).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
  onSortButtonClick: PropTypes.func.isRequired,
  onBookmark: PropTypes.func.isRequired,
};

export default Main;
