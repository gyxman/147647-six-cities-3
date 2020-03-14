import {extend, getOffers, getSortedOffers} from './utils';
import {SortType} from './enums/sort-type.enum';

const offers = [
  {
    price: 1,
    rating: 2,
    city: {
      name: 'Moscow',
    },
  },
  {
    price: 2,
    rating: 1,
    city: {
      name: 'Amsterdam',
    },
  },
];

describe('Тестирование вспомогательных функций', () => {
  it(`Если мы вызываем функцию extend и передаем в нее 2 обьекта, то получаем на выходе объект, в который скопированы все свойства переданных объектов`, () => {
    expect(extend({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
  });

  it(`Если мы вызываем функцию getOffers и передаем в нее название города и список предложений, то получаем на выходе список предложений по этому городу`, () => {
    expect(getOffers(`Moscow`, offers)).toEqual([
      {
        price: 1,
        rating: 2,
        city: {
          name: 'Moscow',
        },
      },
    ]);
  });

  it(`Если мы вызываем функцию getSortedOffers и передаем в нее сортировку (Популярные) и список предложений, то получаем на выходе отсортированный список предложений`, () => {
    expect(getSortedOffers(SortType.Popular, offers)).toEqual([
      {
        price: 1,
        rating: 2,
        city: {
          name: 'Moscow',
        },
      },
      {
        price: 2,
        rating: 1,
        city: {
          name: 'Amsterdam',
        },
      },
    ]);
  });

  it(`Если мы вызываем функцию getSortedOffers и передаем в нее сортировку (По цене - сначала дешевые) и список предложений, то получаем на выходе отсортированный список предложений`, () => {
    expect(getSortedOffers(SortType.ToHigh, offers)).toEqual([
      {
        price: 1,
        rating: 2,
        city: {
          name: 'Moscow',
        },
      },
      {
        price: 2,
        rating: 1,
        city: {
          name: 'Amsterdam',
        },
      },
    ]);
  });

  it(`Если мы вызываем функцию getSortedOffers и передаем в нее сортировку (По цене - сначала дорогие) и список предложений, то получаем на выходе отсортированный список предложений`, () => {
    expect(getSortedOffers(SortType.ToLow, offers)).toEqual([
      {
        price: 2,
        rating: 1,
        city: {
          name: 'Amsterdam',
        },
      },
      {
        price: 1,
        rating: 2,
        city: {
          name: 'Moscow',
        },
      },
    ]);
  });

  it(`Если мы вызываем функцию getSortedOffers и передаем в нее сортировку (По рейтингу) и список предложений, то получаем на выходе отсортированный список предложений`, () => {
    expect(getSortedOffers(SortType.TopRated, offers)).toEqual([
      {
        price: 1,
        rating: 2,
        city: {
          name: 'Moscow',
        },
      },
      {
        price: 2,
        rating: 1,
        city: {
          name: 'Amsterdam',
        },
      },
    ]);
  });
});
