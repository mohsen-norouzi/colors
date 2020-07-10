import * as Actions from '../actions';

const initialState = {
  entities: [],
  loading: true,
};

const colorReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_COLORS_START: {
      return { ...state, loading: true };
    }

    case Actions.GET_COLORS_SUCCESS: {
      return { ...state, entities: action.entities, loading: false };
    }

    default:
      return state;
  }
};

export default colorReducer;
