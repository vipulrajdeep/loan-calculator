import {
    LoanCalculatorActionsTypes,
    SET_AMOUNT,
    SET_DEPOSIT,
    SET_DURATION,
    SET_MONTHLY_EMI
} from './calculator.types';
import { IUserValues } from './calculator';

const initialState: IUserValues = {
    amount: 0,
    deposit: 0,
    duration: 12,
    monthlyEMI: 0
}

export function loanCalculatorReducer(
    state = initialState,
    action: LoanCalculatorActionsTypes
): IUserValues {
    switch (action.type) {
        case SET_AMOUNT:
            return {
                ...state,
                amount: action.payload
            }
        case SET_DEPOSIT:
            return {
                ...state,
                deposit: action.payload
            }
        case SET_DURATION:
            return {
                ...state,
                duration: action.payload
            }
        case SET_MONTHLY_EMI:
            return {
                ...state,
                monthlyEMI: calculateMonthlyEMI(state)
            }
        default:
            return state
    }
}

const calculateMonthlyEMI = (userValues: IUserValues): number => {
    const monthlyEMI: number = (userValues.amount - userValues.deposit) / userValues.duration;
    return Math.round(monthlyEMI);
}