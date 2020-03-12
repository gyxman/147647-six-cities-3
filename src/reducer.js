import {getOffers, extend} from "./utils";
import offers from "./mocks/offers";

const initialState = {
  city: `Amsterdam`,
  offers: getOffers(`Amsterdam`, offers),
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: getOffers(state.city, offers)});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
