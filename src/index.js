import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/App.jsx";
import offers from "./mocks/offers";
import neighbourhoods from "./mocks/neighbourhood";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} neighbourhoods={neighbourhoods} />
    </Provider>,
    document.getElementById(`root`)
);
