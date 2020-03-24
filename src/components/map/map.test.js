import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map.jsx";

const mock = [
  {latitude: 50.846557, longitude: 4.351697, zoom: 13}
];

it(`Если приложение загрузилось, то компонент Map отрисовался`, () => {
  const tree = renderer
    .create(<Map
      offers={mock}
      className={`cities__map`}
    />, {
      createNodeMock: () => document.createElement(`div`)
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
