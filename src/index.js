import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {createAPI} from "./api";
import {ActionCreator, AuthorizationStatus, Operation as UserOperation} from "./reducer/user/user";
import {Operation as DataOperation} from "./reducer/data/data";
import reducer from "./reducer/reducer";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`));
