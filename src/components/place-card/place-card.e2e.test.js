import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  city: {
    name: `Brussels`,
    location: {latitude: 50.846557, longitude: 4.351697, zoom: 13}
  },
  images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`],
  title: `Amazing and Extremely Central Flat`,
  rating: 2.2,
  type: `apartment`,
  bedrooms: 4,
  maxAdults: 7,
  price: 348,
  goods: [`Breakfast`, `Washer`, `Laptop friendly workspace`],
  host: {id: 25, name: `Angelina`, avatarUrl: `img/avatar-angelina.jpg`, isPro: true},
  description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
  location: {latitude: 50.828556999999996, longitude: 4.362697, zoom: 16},
  id: 1,
  previewImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
  isPremium: true,
  isFavorite: false
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
          isFavorite={false}
          onBookmarkButtonClick={() => {}}
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
          isFavorite={true}
          onBookmarkButtonClick={() => {}}
        />
    );

    const element = placeCard.find(`.place-card__name`).at(0);

    element.simulate(`click`);

    expect(onOfferTitleClick).toHaveBeenCalledTimes(1);

    expect(onOfferTitleClick.mock.calls[0][0]).toMatchObject(offer);
  });
});
