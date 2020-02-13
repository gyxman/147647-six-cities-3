import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const OFFERS_COUNT = 3;
const OFFERS_MOCK = [{name: `Beautiful & luxurious apartment at great location`, key: `offer1`}, {name: `Wood and stone place`, key: `offer2`}];

it(`Если пользователь кликакет по заголовку карточки, открываем карточку отеля`, () => {
  const offerTitleHandler = jest.fn();

  const main = shallow(
      <Main countOffers={OFFERS_COUNT}
        offers={OFFERS_MOCK}
        onOfferTitleClick={offerTitleHandler}
      />
  );

  const offerTitle = main.find(`.place-card__name a`);

  offerTitle.at(0).simulate(`click`);

  expect(offerTitleHandler.mock.calls.length).toBe(1);
});
