import React from "react";
import renderer from "react-test-renderer";
import {ReviewsItem} from "./reviews-item.jsx";

const mock = {
  name: `Max`,
  image: `https://picsum.photos/54/54`,
  rating: 4.1,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-04-24`
};

it(`Если приложение загрузилось, то компонент ReviewsItem отрисовался`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review={mock}
    />, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
