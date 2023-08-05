import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import historyReducer from './browsing-history/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  history: historyReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
