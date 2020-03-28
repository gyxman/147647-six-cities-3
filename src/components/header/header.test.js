import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";

const authStatusAuthMock = `AUTH`;
const authStatusNoAuthMock = `NO_AUTH`;

it(`Если приложение загрузилось и пользователь авторизован, то компонент Header отрисовался`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Header
            authStatus={authStatusAuthMock}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Если приложение загрузилось и пользователь не авторизован, то компонент Header отрисовался`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Header
            authStatus={authStatusNoAuthMock}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
