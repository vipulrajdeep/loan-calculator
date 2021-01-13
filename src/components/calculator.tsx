import * as React from 'react';

interface UserValues {
    amount: number;
    deposit: number;
    duration: number;
    monthlyEMI: number;
}

const Calculator: React.FC = () => {
    // Below will change to use proper type definitions
    const [userValues, setUserValues] = React.useState<UserValues>({
        amount: 0,
        deposit: 0,
        duration: 12,
        monthlyEMI: 0
    })

    const handleSubmitValues = (e: any): void => {
        setUserValues({
            ...userValues, 
            monthlyEMI: calculateMonthlyEMI(userValues)
        });     
        e.preventDefault();
    }

    const handleInputChange = (e: any) => {
        setUserValues({ 
            ...userValues, 
            [e.target.name]: e.target.value 
        });
    }

    const calculateMonthlyEMI = (userValues: UserValues): number => {
        const monthlyEMI: number = (userValues.amount - userValues.deposit)/userValues.duration;
        return Math.round(monthlyEMI);
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
                            name='amount'
                            placeholder='Loan amount'
                            value={userValues.amount}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div>
                        <label>Deposit:</label>
                        <input
                            type='text'
                            name='deposit'
                            placeholder='Deposit amount'
                            value={userValues.deposit}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div>
                        <label id='label'>Months:</label>
                        <input
                            type='radio'
                            name='duration'
                            value={12}
                            checked={userValues.duration == 12}
                            onChange={handleInputChange}
                            /> 12
                        <input
                            type='radio'
                            name='duration'
                            value={24}
                            checked={userValues.duration == 24}
                            onChange={handleInputChange}
                            /> 24
                        <input
                            type='radio'
                            name='duration'
                            value={36}
                            checked={userValues.duration == 36}
                            onChange={handleInputChange}
                            /> 36
                    </div>
                    <input type='submit' className='button' />
                </div>
            </form>
            <div>
                {
                    userValues.amount ? <p>Loan amount: {userValues.amount}</p> : null
                }
            </div>
            <div>
                {
                    userValues.deposit ? <p>Deposit: {userValues.deposit}</p> : null
                }
            </div>
            <div>
                {
                    userValues.duration ? <p>Duration: {userValues.duration}</p> : null
                }
            </div>
            <div className="result">
                {
                    userValues.monthlyEMI ? <p>Monthly EMI: {userValues.monthlyEMI}</p> : null
                }
            </div>
        </div>
    )
}

export default Calculator;
