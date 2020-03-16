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
  price: 120,
  time: `night`,
  type: `Apartment`,
  isPremium: true,
  rating: 3.1,
};

describe(`Тестирование поведения пользователя в карточке отеля`, () => {
  it(`Если пользователь навел курсор на карточку, то передаем информацию о текущей карточке`, () => {
    const offer = mock;
    const onOfferTitleHover = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={offer}
          onOfferTitleClick={() => {}}
          onOfferTitleHover={onOfferTitleHover}
          className={`cities__place-`}
        />
    );

    const element = placeCard.find(`.place-card`).at(0);

    element.simulate(`mouseEnter`);

    expect(onOfferTitleHover).toHaveBeenCalledTimes(1);

    expect(onOfferTitleHover.mock.calls[0][0]).toMatchObject(offer);
  });

  it(`Если пользователь нажал на заголовок карточки, то передаем информацию о текущей карточке`, () => {
    const offer = mock;
    const onOfferTitleClick = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={offer}
          onOfferTitleHover={() => {}}
          onOfferTitleClick={onOfferTitleClick}
          className={`cities__place-`}
        />
    );

    const element = placeCard.find(`.place-card__name`).at(0);

    element.simulate(`click`);

    expect(onOfferTitleClick).toHaveBeenCalledTimes(1);

    expect(onOfferTitleClick.mock.calls[0][0]).toMatchObject(offer);
  });
});
