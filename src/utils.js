export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffers = (city, offers) => {
  return offers.filter((item) => item.city.name === city);
};
