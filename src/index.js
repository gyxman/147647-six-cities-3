import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/App.jsx";

const COUNT_OFFERS = 312;
const OFFERS = [{name: `Beautiful & luxurious apartment at great location`, key: `offer1`}, {name: `Wood and stone place`, key: `offer2`}];

ReactDOM.render(
    <App countOffers={COUNT_OFFERS} offers={OFFERS} />,
    document.getElementById(`root`)
);
