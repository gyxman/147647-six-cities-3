import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/App.jsx";

const COUNT_OFFERS = 312;

ReactDOM.render(
    <App countOffers={COUNT_OFFERS} />,
    document.getElementById(`root`)
);
