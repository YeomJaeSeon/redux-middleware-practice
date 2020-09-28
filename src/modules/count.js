// Actions
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// Action creators
export const increaseAction = () => {
  return {
    type: INCREASE,
  };
};
export const decreaseAction = () => {
  return {
    type: DECREASE,
  };
};

// Async Action creators
export const increaseActionAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increaseAction());
  }, 1000);
};
export const decreaseActionAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decreaseAction());
  }, 1000);
};

const initialState = {
  count: 1,
};

// reducer
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
