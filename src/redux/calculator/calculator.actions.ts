import { LoanCalculatorActionsTypes, SET_AMOUNT, SET_DEPOSIT, SET_DURATION, SET_MONTHLY_EMI } from './calculator.types'

export function setAmount(amount: number): LoanCalculatorActionsTypes {
  return {
    type: SET_AMOUNT,
    payload: amount
  }
}

export function setDeposit(deposit: number): LoanCalculatorActionsTypes {
  return {
    type: SET_DEPOSIT,
    payload: deposit
  }
}

export function setDuration(duration: number): LoanCalculatorActionsTypes {
  return {
    type: SET_DURATION,
    payload: duration
  }
}

export function setMonthlyEMI(): LoanCalculatorActionsTypes {
  return {
    type: SET_DURATION
  }
}
