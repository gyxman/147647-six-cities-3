import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from "./places-list.jsx";

it(`Если приложение загрузилось, то компонент PlacesList отрисовался`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={[{}]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
