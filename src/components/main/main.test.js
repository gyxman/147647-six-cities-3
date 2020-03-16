import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

const offers = [
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

it(`Если приложение загрузилось, то компонент Main отрисовался`, () => {
  const tree = renderer
    .create(
        <Main
          city={`Amsterdam`}
          offers={offers}
          onOfferTitleClick={() => {}}
          onCityLinkClick={() => {}}
          offersByCity={offers}
        />,
        {
          createNodeMock: () => document.createElement(`div`),
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
