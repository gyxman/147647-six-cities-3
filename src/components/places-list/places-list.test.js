import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from "./places-list.jsx";

const mock = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    image: `img`,
    price: `120`,
    time: `night`,
    type: `Apartment`,
    isPremium: true,
    rating: 3.1,
  }
];

it(`Если приложение загрузилось, то компонент PlacesList отрисовался`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={mock}
      onOfferTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
