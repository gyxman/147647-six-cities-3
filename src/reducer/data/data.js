import {dataMapper, extend} from "../../utils";

// TODO написать тесты
const initialState = {
  offers: [],
  favorites: {},
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_FAVORITES: `CHANGE_FAVORITES`,
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  changeFavorites: (favorite) => ({
    type: ActionType.CHANGE_FAVORITES,
    payload: favorite,
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(dataMapper(response.data)));
      });
  },

  addComment: ({id, comment, rating, addError, addSuccess}) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, {
      comment,
      rating
    })
      .then(() => {
        addSuccess();
      }).catch((err) => {
        addError(err.response.data.error);
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.CHANGE_FAVORITES:
    {
      const favorites = extend(state.favorites, {});

      if (state.favorites[action.payload]) {
        delete favorites[action.payload];
      } else {
        favorites[action.payload] = true;
      }

      return extend(state, {
        favorites,
      });
    }
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
