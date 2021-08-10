import {createStore} from "redux";
 import rootReducer from '../reducer/rootReducer.js';
 import { composeWithDevTools } from "redux-devtools-extension";
export const store=createStore(rootReducer,composeWithDevTools());