import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from "./sign-in.jsx";

it(`Если приложение загрузилось, то компонент SignIn отрисовался`, () => {
  const tree = renderer
    .create(
        <SignIn
          onSubmit={() => {}}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
