import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";

it(`Если приложение загрузилось, то компонент PlaceCard отрисовался`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={{}}
      onHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
