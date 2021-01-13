import {
    UserValues,
    LoanCalculatorActionsTypes,
    SET_AMOUNT,
    SET_DEPOSIT,
    SET_DURATION,
    SET_MONTHLY_EMI
} from './calculator.types';

const initialState: UserValues = {
    amount: 0,
    deposit: 0,
    duration: 12,
    monthlyEMI: 0
}

export function loanCalculatorReducer(
    state = initialState,
    action: LoanCalculatorActionsTypes
): UserValues {
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

const calculateMonthlyEMI = (userValues: UserValues): number => {
    const monthlyEMI: number = (userValues.amount - userValues.deposit) / userValues.duration;
    return Math.round(monthlyEMI);
}