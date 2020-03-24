import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const getOffers = (state) => state[NameSpace.DATA].offers;

export const getCity = (state) => state[NameSpace.APP].city;

export const getSort = (state) => state[NameSpace.APP].sort;

export const getCities = createSelector(
    getOffers,
    (offers) => {
      const uniqCities = new Set();

      offers.forEach(({city: {name}}) => uniqCities.add(name));

      return Array.from(uniqCities);
    }
);


