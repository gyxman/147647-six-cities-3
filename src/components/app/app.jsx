import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import {PlaceCardDetails} from '../place-card-details/place-card-details.jsx';
import {connect} from "react-redux";
import {getFilteredOffers} from "../../reducer/data/selectors";
import {getCities, getCity, getSort} from "../../reducer/app/selectors";
import {ActionCreator} from "../../reducer/app/app";
import PropTypes from "prop-types";
import {SignIn} from "../sign-in/sign-in.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../enums/authorization-status.enum";
import {Operation as UserOperation} from "../../reducer/user/user";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      place: -1,
      isLogin: false,
    };
  }

  _renderApp() {
    const {cities, offers, city, sort, onCityLinkClick, onSortButtonClick, login, authStatus} = this.props;
    const {place, isLogin} = this.state;
    const offer = offers[place];

    if (isLogin && authStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <SignIn onSubmit={login} />
      );
    }

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
      return (
        <PlaceCardDetails
          offer={offer}
          onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
        />
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

  _signInClickHandler() {
    this.setState({
      isLogin: true,
    });
  }

  render() {
    const {authStatus} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="page page--gray page--main">
              <header className="header">
                <div className="container">
                  <div className="header__wrapper">
                    <div className="header__left">
                      <a className="header__logo-link header__logo-link--active">
                        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                      </a>
                    </div>
                    <nav className="header__nav">
                      <ul className="header__nav-list">
                        <li className="header__nav-item user">
                          {authStatus === AuthorizationStatus.NO_AUTH && (
                            <a className="header__nav-link header__nav-link--profile" href="#" onClick={this._signInClickHandler.bind(this)}>
                              <div className="header__avatar-wrapper user__avatar-wrapper">
                              </div>
                              <span className="header__login">Sign in</span>
                            </a>
                          )}
                          {authStatus === AuthorizationStatus.AUTH && (
                            <a className="header__nav-link header__nav-link--profile" href="#">
                              <div className="header__avatar-wrapper user__avatar-wrapper">
                              </div>
                              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                            </a>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </header>
              {this._renderApp()}
            </div>
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
  authStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  onCityLinkClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },

  onSortButtonClick(sort) {
    dispatch(ActionCreator.changeSort(sort));
  },
});

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
  onSortButtonClick: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

export {App};
export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
