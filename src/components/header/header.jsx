import {AuthorizationStatus} from "../../enums/authorization-status.enum";
import {Link} from "react-router-dom";
import {Routes} from "../../enums/routes.enum";
import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
  const {authStatus} = props;

  return (<header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link header__logo-link--active"
            to={Routes.ROOT}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {authStatus === AuthorizationStatus.NO_AUTH && (
                <Link className="header__nav-link header__nav-link--profile"
                  to={Routes.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              )}
              {authStatus === AuthorizationStatus.AUTH && (
                <Link className="header__nav-link header__nav-link--profile"
                  to={Routes.FAVORITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>);
};

Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
};
