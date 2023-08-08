import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import historyReducer from './browsing-history/reducer';
import productsReducer from './products/reducer';
import filterReducer from './filter/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  history: historyReducer,
  products: productsReducer,
  filter: filterReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
