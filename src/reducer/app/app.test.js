import {ActionCreator, ActionType, reducer} from './reducer.js';
import {getOffers} from './utils';
import {PlaceType} from './enums/place-type.enum';

const offersMock = [
  {
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
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
    price: 120,
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
  {
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `Moscow`,
    },
    name: `Wood and stone place`,
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
    price: 80,
    time: `night`,
    type: PlaceType.Room,
    isPremium: false,
    rating: 4.3,
    countOfBedrooms: `3 Bedrooms`,
    maxCountOfGuests: `Max 4 adults`,
    equipment: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      picture: `https://picsum.photos/74/74`,
      name: `Mika`,
      isSuper: false,
    },
    coords: [52.369553943508, 4.85309666406198],
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

const initialStateMock = {
  city: `Amsterdam`,
  offers: getOffers(`Amsterdam`, offersMock),
};

describe(`Тестирование редьюсера`, () => {
  it(`Если вызываем редьюсер без параметров, то он возвращает начальное состояние`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: `Amsterdam`,
      offers: getOffers(`Amsterdam`, offersMock),
      sort: `Popular`,
    });
  });

  it(`Если вызываем экшен у редьюсера на изменение города, то он возвращает состояние с измененным городом`, () => {
    expect(
      reducer(initialStateMock, {
        type: ActionType.CHANGE_CITY,
        payload: `Moscow`,
      })).toEqual({
      city: `Moscow`,
      offers: getOffers(`Amsterdam`, offersMock),
    });
  });

  it(`Если вызываем экшен у редьюсера на получение предложений по аренде, то он возвращает состояние и предложения в зависимости от города`, () => {
    expect(
      reducer(
        {city: `Moscow`, offers: getOffers(`Amsterdam`, offersMock)},
        {
          type: ActionType.GET_OFFERS,
        })).toEqual({
      city: `Moscow`,
      offers: getOffers(`Moscow`, offersMock),
    });
  });
});

describe(`Тестирование ActionCreator`, () => {
  it(`Action creator для изменения города возвращает корректное действие`, () => {
    expect(ActionCreator.changeCity(`Moscow`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Moscow`,
    });
  });

  it(`Action creator для запроса списка предложений возвращает корректное действие`, () => {
    expect(ActionCreator.getOffers()).toEqual({
      type: ActionType.GET_OFFERS,
    });
  });
});
