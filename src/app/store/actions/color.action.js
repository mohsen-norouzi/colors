export const GET_COLORS_START = '[PRODUCT APP] GET COLORS START';
export const GET_COLORS_SUCCESS = '[PRODUCT APP] GET COLORS SUCCESS';

export const REQUEST_FAILED = '[GENERAL] REQUEST FAILED';

export const getColors = () => {
  return {
    type: GET_COLORS_SUCCESS,
  };
};
