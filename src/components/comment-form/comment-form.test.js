import React from "react";
import renderer from "react-test-renderer";
import CommentForm from "./comment-form.jsx";

it(`Если приложение загрузилось, то компонент Empty отрисовался`, () => {
  const stateMock = {
    rating: 0,
    comment: ``,
    error: ``,
    success: ``,
    disabled: false,
  };

  const tree = renderer
    .create(<CommentForm state={stateMock} onRatingChange={() => {}} onCommentChange={() => {}} onSubmit={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
