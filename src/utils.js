import {SortType} from './enums/sort-type.enum';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffers = (city, offers) => {
  return offers.filter(item => item.city.name === city);
};

export const getSortedOffers = (sort, offers) => {
  switch (sort) {
    case SortType.Popular:
      return offers;
    case SortType.ToHigh:
      return offers.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }

        if (a.price < b.price) {
          return -1;
        }

        return 0;
      });
    case SortType.ToLow:
      return offers.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }

        if (a.price < b.price) {
          return 1;
        }

        return 0;
      });
    case SortType.TopRated:
      return offers.sort((a, b) => {
        if (a.rating < b.rating) {
          return 1;
        }

        if (a.rating > b.rating) {
          return -1;
        }

        return 0;
      });
  }

  return offers;
};
