import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {PlaceType} from '../../enums/place-type.enum';
import {Provider} from 'react-redux';
import {getOffers} from '../../utils';
import offers from '../../mocks/offers';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const mock = [
  {
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `London`,
    },
    name: `Beautiful & luxurious apartment at great location`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    image: `img`,
    photos: [`img2`, `img3`],
    price: `120`,
    time: `night`,
    type: `Apartment`,
    isPremium: true,
    rating: 3.1,
    countOfBedrooms: `3 Bedrooms`,
    maxCountOfGuests: `Max 4 adults`,
    equipment: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      picture: `img4`,
      name: `Mike`,
      isSuper: true,
    },
    coords: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        name: `Max`,
        image: `https://picsum.photos/54/54`,
        rating: 4.1,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      },
    ],
  },
];

const mockNeighbourhoods = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    image: `https://picsum.photos/260/200`,
    photos: [
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
    ],
    price: `120`,
    time: `night`,
    type: PlaceType.Apartment,
    isPremium: true,
    rating: 3.1,
    countOfBedrooms: `3 Bedrooms`,
    maxCountOfGuests: `Max 4 adults`,
    equipment: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      picture: `https://picsum.photos/74/74`,
      name: `Mike`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        name: `Max`,
        image: `https://picsum.photos/54/54`,
        rating: 4.1,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`,
      },
    ],
  },
];

it(`Если приложение загрузилось, то компонент App отрисовался`, () => {
  const store = mockStore({
    city: `Amsterdam`,
    offers: getOffers(`Amsterdam`, offers), // TODO поправить
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <App offers={mock} neighbourhoods={mockNeighbourhoods} />
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`),
      },
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
