import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list.jsx";

const mock = [
  {
    name: `Max`,
    image: `https://picsum.photos/54/54`,
    rating: 4.1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`
  }
];

it(`Если приложение загрузилось, то компонент ReviewsList отрисовался`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
