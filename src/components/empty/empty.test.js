import React from "react";
import renderer from "react-test-renderer";
import Empty from "./empty.jsx";

it(`Если приложение загрузилось, то компонент Empty отрисовался`, () => {
  const tree = renderer
    .create(<Empty />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
