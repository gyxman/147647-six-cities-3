import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";

it(`Если приложение загрузилось, то компонент Main отрисовался`, () => {
  const tree = renderer
    .create(<Main
      offers={[{}]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
