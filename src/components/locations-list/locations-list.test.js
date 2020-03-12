import React from "react";
import renderer from "react-test-renderer";
import {LocationsList} from "./locations-list.jsx";

const locationsMock = [
  `Amsterdam`
];

const cityMock = `Amsterdam`;

it(`Если приложение загрузилось, то компонент LocationsList отрисовался`, () => {
  const tree = renderer
    .create(<LocationsList
      locations={locationsMock}
      currentLocation={cityMock}
      onCityLinkClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
