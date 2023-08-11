import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './auth/reducer';
import historyReducer from './browsing-history/reducer';
import productsReducer from './products/reducer';
import filterReducer from './filter/reducer';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  history: historyReducer,
  products: productsReducer,
  filter: filterReducer,
  comments: commentsReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
