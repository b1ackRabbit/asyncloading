import {createStore} from 'redux';
import {loadingBlockReducer} from "./reducers/loading-block-reducer";

export const store = createStore(loadingBlockReducer);
