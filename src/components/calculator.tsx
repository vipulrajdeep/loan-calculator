import React, {Dispatch} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IUserValues } from './../redux/calculator/calculator'; 
import { IApplicationState } from './../redux/application-store-state';
import { LoanCalculatorActionsTypes } from './../redux/calculator/calculator.types';


const Calculator = () => {
    const { amount, duration, deposit, monthlyEMI } = useSelector((state: IApplicationState) => state.userValues);
    const calculatorDispatch = useDispatch<Dispatch<LoanCalculatorActionsTypes>>();

    const handleSubmitValues = (e: any): void => {
        calculatorDispatch({type: 'SET_MONTHLY_EMI'})
        e.preventDefault();
    }

    const handleInputChange = (e: any) => {
        calculatorDispatch({type: e.target.name, payload: e.target.value});
    }

    return (
        <div>
            <h1>Loan Calculator</h1>
            <form onSubmit={handleSubmitValues}>
                <div className='form-items'>
                    <div>
                        <label>Amount:</label>
                        <input
                            type='text'
                            name='SET_AMOUNT'
                            placeholder='Loan amount'
                            value={amount}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div>
                        <label>Deposit:</label>
                        <input
                            type='text'
                            name='SET_DEPOSIT'
                            placeholder='Deposit amount'
                            value={deposit}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div>
                        <label id='label'>Months:</label>
                        <input
                            type='radio'
                            name='SET_DURATION'
                            value={12}
                            checked={duration == 12}
                            onChange={handleInputChange}
                            /> 12
                        <input
                            type='radio'
                            name='SET_DURATION'
                            value={24}
                            checked={duration == 24}
                            onChange={handleInputChange}
                            /> 24
                        <input
                            type='radio'
                            name='SET_DURATION'
                            value={36}
                            checked={duration == 36}
                            onChange={handleInputChange}
                            /> 36
                    </div>
                    <input type='submit' className='button' />
                </div>
            </form>
            <div>
                {
                    amount ? <p>Loan amount: {amount}</p> : null
                }
            </div>
            <div>
                {
                    deposit ? <p>Deposit: {deposit}</p> : null
                }
            </div>
            <div>
                {
                    duration ? <p>Duration: {duration}</p> : null
                }
            </div>
            <div className="result">
                {
                    monthlyEMI ? <p>Monthly EMI: {monthlyEMI}</p> : null
                }
            </div>
        </div>
    )
}

export default Calculator;
