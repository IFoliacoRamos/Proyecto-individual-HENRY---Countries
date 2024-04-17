// Redux
import { createStore, applyMiddleware, compose } from 'redux';
// Reducer
import rootReducer from './reducer';
// Thunk
import thunkMiddleware from 'redux-thunk';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(  
  rootReducer,
  composerEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;