import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import {PlaceCardDetails} from '../place-card-details/place-card-details.jsx';
import {connect} from "react-redux";
import {getFilteredOffers, getOffers, getOffers2} from "../../reducer/data/selectors";
import {getCities, getCity, getSort} from "../../reducer/app/selectors";
import {ActionCreator} from "../../reducer/app/app";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      place: -1,
    };
  }

  _renderApp() {
    const {cities, offers, city, sort, onCityLinkClick, onSortButtonClick} = this.props;
    const {place} = this.state;
    const offer = offers[place];

    if (place === -1 || place >= offers.length) {
      return (
        <Main
          cities={cities}
          city={city}
          offers={offers}
          sort={sort}
          onCityLinkClick={onCityLinkClick}
          onSortButtonClick={onSortButtonClick}
          onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
        />
      );
    }

    if (offer) {
      return (<div />
        /*<PlaceCardDetails
          offer={offer}
          neighbourhoods={neighbourhoods}
          onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
        />*/
      );
    }

    return null;
  }

  _offerTitleClickHandler(offer) {
    const {offers} = this.props;
    const offerIndex = offers.findIndex((item) => item.name === offer.name);

    this.setState({
      place: offerIndex,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: getCities(state),
  city: getCity(state),
  offers: getFilteredOffers(state),
  sort: getSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityLinkClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },

  onSortButtonClick(sort) {
    dispatch(ActionCreator.changeSort(sort));
  },
});

export {App};
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
