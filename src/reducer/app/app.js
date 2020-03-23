import {extend} from '../../utils';

const initialState = {
  cities: [],
  city: `Amsterdam`,
  sort: `Popular`,
};

const ActionType = {
  ADD_CITIES: `ADD_CITIES`,
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
};

const ActionCreator = {
  addCities: (cities) => ({
    type: ActionType.ADD_CITIES,
    payload: cities,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_CITIES:
      return extend(state, {cities: action.payload});
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.CHANGE_SORT:
      return extend(state, {sort: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
