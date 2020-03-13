import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import {PlaceCardDetails} from '../place-card-details/place-card-details.jsx';

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      place: -1,
    };
  }

  _renderApp() {
    const {offers, neighbourhoods} = this.props;
    const {place} = this.state;
    const offer = offers[place];

    if (place === -1 || place >= offers.length) {
      return (
        <Main
          offers={offers}
          onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
        />
      );
    }

    if (offer) {
      return (
        <PlaceCardDetails
          offer={offer}
          neighbourhoods={neighbourhoods}
          onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
        />
      );
    }

    return null;
  }

  _offerTitleClickHandler(offer) {
    const {offers} = this.props;
    const offerIndex = offers.findIndex(item => item.name === offer.name);

    this.setState({
      place: offerIndex,
    });
  }

  render() {
    const {offers, neighbourhoods} = this.props;
    const offer = offers[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <PlaceCardDetails
              offer={offer}
              neighbourhoods={neighbourhoods}
              onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  neighbourhoods: PropTypes.array.isRequired,
};
