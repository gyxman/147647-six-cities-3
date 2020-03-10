import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/App.jsx";
import offers from "./mocks/offers";
import neighbourhoods from "./mocks/neighbourhood";

ReactDOM.render(
    <App offers={offers} neighbourhoods={neighbourhoods} />,
    document.getElementById(`root`)
);
