import {SortType} from './enums/sort-type.enum';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffers = (city, offers) => {
  return offers.filter((item) => item.city.name === city);
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

// TODO написать тест
export const dataMapper = (offers) => {
  return offers.map((offer) => {
    const target = Object.assign({}, offer);
    target.previewImage = offer.preview_image;
    delete target.preview_image;
    target.isPremium = offer.is_premium;
    delete target.is_premium;
    target.isFavorite = offer.is_favorite;
    delete target.is_favorite;
    target.host.avatarUrl = offer.host.avatar_url;
    delete target.host.avatar_url;
    target.host.isPro = offer.host.is_pro;
    delete target.host.is_pro;
    return target;
  });
};
