import {getOffers, extend} from './utils';
import offers from './mocks/offers';

const initialState = {
  city: `Amsterdam`,
  offers: getOffers(`Amsterdam`, offers),
  sort: `Popular`,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
};

const ActionCreator = {
  changeCity: city => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
  changeSort: sort => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: getOffers(state.city, offers)});
    case ActionType.CHANGE_SORT:
      return extend(state, {sort: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
