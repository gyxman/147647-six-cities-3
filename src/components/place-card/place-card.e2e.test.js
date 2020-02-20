import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  name: `Beautiful & luxurious apartment at great location`,
  image: `img`,
  price: `120`,
  time: `night`,
  type: `Apartment`,
  isPremium: true,
};

it(`Если пользователь навел курсор на карточку, то передаем информацию о текущей карточке`, () => {
  const offer = mock;
  const onHover = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onHover={onHover}
      />
  );

  const element = placeCard.find(`.place-card`).at(0);

  element.simulate(`mouseEnter`);

  expect(onHover).toHaveBeenCalledTimes(1);

  expect(onHover.mock.calls[0][0]).toMatchObject(offer);
});
