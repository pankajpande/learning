import React, { useState } from 'react';
import InvestmentInputForm from './components/InvestmentInput/InvestmentInputForm';
import InvestmentTable from './components/InvestmentTable/InvestmentTable';
import Header from './components/header/header';
function App() {
  const [investments,setInvestment] = useState([]);
  const [currentSaving,setCurrentSaving] = useState(0);

const onSubmitHandler = (userInput) => {
  calculateHandler(userInput);
};

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results
    if(userInput){
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    setCurrentSaving(currentSavings);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
    setInvestment(yearlyData);

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header/>
      <InvestmentInputForm  onSubmitHandler={onSubmitHandler} ></InvestmentInputForm>
      <InvestmentTable investments={investments} initialInvestment={currentSaving}></InvestmentTable>
    </div>
  );
}

export default App;
