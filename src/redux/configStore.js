import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer, { fetchgreeting } from './Greeting/greeting';

const reducer = combineReducers({
  greetingReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

store.dispatch(fetchgreeting());
export default store;
