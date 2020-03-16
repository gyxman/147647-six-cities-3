import React from 'react';
import renderer from 'react-test-renderer';
import {Sort} from "./sort.jsx";

it(`Если приложение загрузилось, то компонент Sort отрисовался`, () => {
  const tree = renderer
    .create(
        <Sort
          onSortButtonClick={() => {}}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
