import React, { useState } from 'react'
import './Calculator.css';

const Calculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const n = parseInt(years) * 12; // total number of monthly payments
    const r = annualRate / 100 / 12; // monthly interest rate

    if (P > 0 && r > 0 && n > 0) {
      const numerator = r * Math.pow(1 + r, n);
      const denominator = Math.pow(1 + r, n) - 1;
      const monthlyPayment = P * (numerator / denominator);
      setResult(monthlyPayment.toFixed(2));
    } else {
      alert('Please enter valid positive numbers for all fields.');
    }
  }

  return (
    <>
      <div className='calculator-container'>
        <label htmlFor="num1">Principal Loan Amount</label>
        <span>
          <input
            type="number"
            id="num1"
            value={principal}
            onChange={e => setPrincipal(e.target.value)}
          />
        </span>
        <label htmlFor="num2">Interest Rate</label>
        <span>
          <input
            type="number"
            id="num2"
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
          <span>%</span>
        </span>
        <label htmlFor="num3">Length of Loan</label>
        <span>
          <input
            type="number"
            id="num3"
            value={years}
            onChange={e => setYears(e.target.value)}
          />
          <span>years</span>
        </span>
        <button onClick={handleCalculate}>Calculate</button>
        {result && (
          <div className="result">
            Your Monthly mortgage Payment will be: ${result}
          </div>
        )}
      </div>
    </>
  )
}

export default Calculator