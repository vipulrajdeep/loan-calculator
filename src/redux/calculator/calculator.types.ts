export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_DEPOSIT = 'SET_DEPOSIT';
export const SET_DURATION = 'SET_DURATION';
export const SET_MONTHLY_EMI = 'SET_MONTHLY_EMI';

interface SetAmountAction {
  type: typeof SET_AMOUNT
  payload: number
}

interface SetDepositAction {
  type: typeof SET_DEPOSIT
  payload: number
}

interface SetDurationAction {
  type: typeof SET_DURATION
  payload: number
}

interface SetMonthlyEmiAction {
  type: typeof SET_MONTHLY_EMI
}

export type LoanCalculatorActionsTypes = SetAmountAction | SetDepositAction | SetDurationAction | SetMonthlyEmiAction;
