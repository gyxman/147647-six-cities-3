import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from "./places-list.jsx";

const mock = [
  {
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
  },
  {
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
  },
];

it(`Если приложение загрузилось, то компонент PlacesList отрисовался`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={mock}
      onHover={() => {}}
      onSelect={() => {}}
      className={`cities__places-`}
      isTabs={true}
      favorites={{}}
      onBookmark={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
