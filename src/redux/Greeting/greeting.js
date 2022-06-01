const initState = {
  message: '',
};

const greetingReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_GREETING':
      return {
        ...state,
        loaded: true,
      };
    case 'COMPLETE_GREETING':
      return {
        ...state,
        loaded: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
export const fetchgreeting = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_GREETING' });
  await fetch('https://peaceful-mesa-19380.herokuapp.com/api/greetings')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_GREETING', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_GREETING' }));
};

export default greetingReducer;
