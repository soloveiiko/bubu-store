import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
