import React from "react";
import {Main} from "../main/Main.jsx";

export const App = (props) => {
  return <Main countOffers={
    // eslint-disable-next-line react/prop-types
    props.countOffers}/>;
};
