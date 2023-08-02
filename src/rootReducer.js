const INITIAL_STATE = {
  memeUrl: 0,
  topText: 0,
  bottomText: 0,
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "IMG_ONE":
      return {
        ...state,
        memeUrl: state.memeUrl === 2 ? 0 : state.memeUrl + 1,
      };
    case "TOPTEXT_ONE":
      return { ...state, topText: state.topText === 2 ? 0 : state.topText + 1 };
    case "BOTTOMTEXT_ONE":
      return {
        ...state,
        bottomText: state.bottomText === 2 ? 0 : state.bottomText + 1,
      };
    default:
      return state;
  }
}

export default rootReducer;
