import React, { useState } from 'react';
import cssStyle from "./InvestmentInputForm.module.css"


const InvestmentInputForm = (props) =>{

const [inputData,setInputData] = useState({
  'current-savings':10000,
  'yearly-contribution':500000,
  'expected-return':9,
  'duration':5
});
const submitForm = (event)=>{
  event.preventDefault();
  props.onSubmitHandler(inputData);

}    
const resetForm = (event) => {
  event.preventDefault();
  setInputData({
    'current-savings':5000,
    'yearly-contribution':100000,
    'expected-return':9,
    'duration':5
});
}

const valueChangeHandler = (type,value) => {

  console.log(" type:"+ type +" value:"+value)
  setInputData((prvState) => {
     let  newState = {...prvState};
     newState[type] = +value;
     return newState;
    })
  //inputData[type] =value;
}

return (<form  onSubmit={submitForm} className={cssStyle["form"]}>
<div className={cssStyle['input-group']}>
  <p>
    <label htmlFor="current-savings">Current Savings (₹)</label>
    <input type="number" value={inputData["current-savings"]} onChange={(e) => {e.preventDefault(); valueChangeHandler("current-savings",e.target.value)}} id="current-savings" />
  </p>
  <p>
    <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
    <input type="number"  value={inputData["yearly-contribution"]} onChange={(e) => { e.preventDefault();valueChangeHandler("yearly-contribution",e.target.value)}}  id="yearly-contribution" />
  </p>
</div>
<div className={cssStyle["input-group"]}>
  <p>
    <label htmlFor="expected-return">
      Expected Interest (%, per year)
    </label>
    <input type="number"  value={inputData["expected-return"]} onChange={(e) => {e.preventDefault();valueChangeHandler("expected-return",e.target.value)}}  id="expected-return" />
  </p>
  <p>
    <label htmlFor="duration">Investment Duration (years)</label>
    <input type="number"  value={inputData["duration"]} onChange={(e) => {e.preventDefault();valueChangeHandler("duration",e.target.value)}} id="duration" />
  </p>
</div>
<p className={cssStyle["actions"]}>
  <button type="reset" onClick={resetForm} className="buttonAlt">
    Reset
  </button>
  <button type="submit"  className="button">
    Calculate
  </button>
</p>
</form>);

}

export default InvestmentInputForm;