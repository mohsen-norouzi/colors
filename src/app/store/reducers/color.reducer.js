import * as Actions from '../actions';

const initialState = {
  entities: [],
};

const colorReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_COLORS_SUCCESS: {
      return { ...state, entities: action.entities };
    }

    default:
      return state;
  }
};

export default colorReducer;
