import React, {PureComponent} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import {PlaceCardDetails} from '../place-card-details/place-card-details.jsx';
import {connect} from "react-redux";
import {getFavorites, getFilteredOffers} from "../../reducer/data/selectors";
import {getCities, getCity, getSort} from "../../reducer/app/selectors";
import {ActionCreator as ActionCreatorApp} from "../../reducer/app/app";
import {ActionCreator as ActionCreatorData, Operation as OperationData} from "../../reducer/data/data";
import PropTypes from "prop-types";
import {SignIn} from "../sign-in/sign-in.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";
import history from "../../history.js";
import {Routes} from "../../enums/routes.enum";
import {Header} from "../header/header.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      place: -1,
    };
  }

  _renderApp() {
    const {cities, offers, city, sort, favorites, onCityLinkClick, onSortButtonClick, onBookmark, addComment} = this.props;
    const {place} = this.state;
    const offer = offers[place];

    if (place === -1 || place >= offers.length) {
      return (
        <Main
          cities={cities}
          city={city}
          offers={offers}
          sort={sort}
          favorites={favorites}
          onCityLinkClick={onCityLinkClick}
          onSortButtonClick={onSortButtonClick}
          onBookmark={onBookmark}
          onOfferTitleClick={this._offerTitleClickHandler.bind(this)}
        />
      );
    }

    if (offer) {
      return (
        <PlaceCardDetails
          offer={offer}
          addComment={addComment}
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

  render() {
    const {authStatus, login} = this.props;

    return (
      <div className="page page--gray page--main">
        <Router
          history={history}
        >
          <Header authStatus={authStatus}/>
          <Switch>
            <Route exact path={Routes.ROOT}>
              {this._renderApp()}
            </Route>
            <Route exact path={Routes.LOGIN}>
              <SignIn onSubmit={login}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: getCities(state),
  city: getCity(state),
  offers: getFilteredOffers(state),
  sort: getSort(state),
  authStatus: getAuthorizationStatus(state),
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  onCityLinkClick(city) {
    dispatch(ActionCreatorApp.changeCity(city));
  },

  onSortButtonClick(sort) {
    dispatch(ActionCreatorApp.changeSort(sort));
  },

  onBookmark(id) {
    dispatch(ActionCreatorData.changeFavorites(id));
  },

  addComment(data) {
    dispatch(OperationData.addComment(data));
  }
});

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  favorites: PropTypes.shape({}).isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
  onSortButtonClick: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  onBookmark: PropTypes.func.isRequired,
};

export {App};
export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
