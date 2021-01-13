import {combineReducers, Dispatch, Reducer} from 'redux';

import { IApplicationState } from './application-store-state';
import { IUserValues } from './calculator/calculator';
import { loanCalculatorReducer } from './calculator/calculator.reducer';

export const rootReducer = combineReducers<IApplicationState>({
    userValues: loanCalculatorReducer
});