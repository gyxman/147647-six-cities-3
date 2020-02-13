import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

const OFFERS_COUNT = 3;
const OFFERS_MOCK = [{name: `Beautiful & luxurious apartment at great location`, key: `offer1`}, {name: `Wood and stone place`, key: `offer2`}];

it(`Если приложение загрузилось, то компонент App отрисовался`, () => {
  const tree = renderer
    .create(<App
      countOffers={OFFERS_COUNT}
      offers={OFFERS_MOCK}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
