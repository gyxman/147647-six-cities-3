import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const getOffers = (state) => state[NameSpace.DATA].offers;

const getCity = (state) => state[NameSpace.APP].city;

export const getFilteredOffers = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return offers.filter(({city: {name}}) => name === city);
    }
);

export const getFavorites = (state) => state[NameSpace.DATA].favorites;

export const getCommentError = (state) => state[NameSpace.DATA].commentError;
