import { useState } from 'react';
import './TipCalculator.css';

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(15);
  const [numPeople, setNumPeople] = useState(1);
  const [customTip, setCustomTip] = useState('');

  const handleTipChange = (percent) => {
    setTipPercent(percent);
    setCustomTip('');
  };

  const handleCustomTipChange = (e) => {
    setTipPercent(parseFloat(e.target.value));
    setCustomTip(e.target.value);
  };

  const reset = () => {
    setBill(0);
    setTipPercent(15);
    setNumPeople(1);
    setCustomTip('');
  };

  const tipAmountPerPerson = ((bill * (tipPercent / 100)) / numPeople).toFixed(2);
  const totalPerPerson = ((bill * (1 + tipPercent / 100)) / numPeople).toFixed(2);
  const finalAmount = (bill * (1 + tipPercent / 100)).toFixed(2);

  return (
    <div className="container">
      <div className="calculator">
        <div className="input-section">
          <div className="input-group">
            <label>Bill</label>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(parseFloat(e.target.value))}
            />
          </div>

          <div className="tip-section">
            <label>Select Tip %</label>
            <div className="tip-buttons">
              {[5, 10, 15, 25, 50].map((percent) => (
                <button
                  key={percent}
                  className={tipPercent === percent ? 'active' : ''}
                  onClick={() => handleTipChange(percent)}
                >
                  {percent}%
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom"
                value={customTip}
                onChange={handleCustomTipChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Number of People</label>
            <input
              type="number"
              value={numPeople}
              onChange={(e) => setNumPeople(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="output-section">
          <div className="output-group">
            <div className="output">
              <span>Tip Amount / person</span>
              <span>${tipAmountPerPerson}</span>
            </div>
            <div className="output">
              <span>Total / person</span>
              <span>${totalPerPerson}</span>
            </div>
            <div className="output">
              <span>Final Amount</span>
              <span>${finalAmount}</span>
            </div>
          </div>
          <button className="reset-button" onClick={reset}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
