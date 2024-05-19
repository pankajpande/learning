import React, { useState } from 'react';
import cssStyle from "./InvestmentTable.module.css"

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});


const InvestmentTable = (props) => {

  const createSingleRow = (row) =>{
    return (<tr key={row.year}>
    <td>{row.year}</td>
    <td>{ formatter.format(row.savingsEndOfYear)}</td>
    <td>{formatter.format(row.yearlyInterest)}</td>

    <td>{formatter.format(row.savingsEndOfYear - props.initialInvestment - (row.yearlyContribution * row.year))}</td>
    <td> {formatter.format( props.initialInvestment + row.yearlyContribution * row.year) }</td>
  </tr>);
    

}

const createRowsForInvestmentTable = (listOfInvestment) =>{
    return listOfInvestment.map( row => createSingleRow(row));
}


if(props.investments.length < 1 ){
    return (<div>No data avialable</div>);
}else{
return ( <table className={cssStyle["result"]}>
<thead>
  <tr>
    <th>Year</th>
    <th>Total Savings</th>
    <th>Interest (Year)</th>
    <th>Total Interest</th>
    <th>Invested Capital</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>YEAR NUMBER</td>
    <td>TOTAL SAVINGS END OF YEAR</td>
    <td>INTEREST GAINED IN YEAR</td>
    <td>TOTAL INTEREST GAINED</td>
    <td>TOTAL INVESTED CAPITAL</td>
  </tr>
  {createRowsForInvestmentTable(props.investments)}
</tbody>
</table>);
}

}

export default InvestmentTable;