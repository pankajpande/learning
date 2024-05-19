import Input from "../UI/Input";
import cssStyle from "./MealItemForm.module.css";
import React, { useRef,useState } from 'react';

const MealItemForm = (props)=>{
    const [isValidAmount,setValidAmount] = useState(true);
    const inputAmountRef = useRef();
    const onSubmitHandler = (event)=>{
        event.preventDefault();

        if(inputAmountRef.current.value){
           const amountInNumber =  +inputAmountRef.current.value;
           if(amountInNumber > 0 && amountInNumber <10){
            props.onAddToCart(amountInNumber);
            return;
           }
        }
        setValidAmount(false);
         
        
    }

    return (<form onSubmit={onSubmitHandler} className={cssStyle['form']}>
            <Input ref={inputAmountRef} label={"QTY"} input={{ id:'amount_'+props.mealItem.id,min:'1',max:'5',type:'number',step:'1',defaultValue:'1'}}  ></Input>
            <button>add</button>
            {!isValidAmount && <p>Please enter valid amount</p> }
        </form>);
}

export default MealItemForm;