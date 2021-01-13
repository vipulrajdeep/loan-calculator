import { createStore } from 'redux';
import { IApplicationState } from './application-store-state';
import { rootReducer } from './root-reducer';

export function configureStore(initialState?: IApplicationState) {
    return createStore(rootReducer, initialState)
}