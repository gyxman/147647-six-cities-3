import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";

const mock = {
  name: `Beautiful & luxurious apartment at great location`,
  image: `img`,
  price: `120`,
  time: `night`,
  type: `Apartment`,
  isPremium: true,
  rating: 3.1,
};

it(`Если приложение загрузилось, то компонент PlaceCard отрисовался`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={mock}
      onHover={() => {}}
      onOfferTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
