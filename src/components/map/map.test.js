import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map.jsx";

const mock = [
  [52.3809553943508, 4.939309666406198]
];

it(`Если приложение загрузилось, то компонент Map отрисовался`, () => {
  const tree = renderer
    .create(<Map
      offers={mock}
      className={`cities__map`}
    />, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
