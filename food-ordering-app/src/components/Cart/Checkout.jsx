import React,{useState,useRef} from 'react';
import cssStyle from './Checkout.module.css'
const Checkout = (props)=>{



    const nameRef = useRef('')
    const postalRef = useRef('')
    const streetRef = useRef('')
    const cityRef = useRef('') 

    const [formInputsValidity,setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
      })

     const isNotEmpty = (val) => val && val.trim().length > 0;
     const hasChar = (val) => val && val.trim().length > 3

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const nameValue = nameRef.current.value;
        const postalValue = postalRef.current.value;
        const streetValue = streetRef.current.value;
        const cityValue = cityRef.current.value;

        const isNameValid =  isNotEmpty(nameValue)
        const isCityValid =  isNotEmpty(cityValue)
        const isStreetValid =  isNotEmpty(streetValue)
        const ispostalValid =  hasChar(postalValue)

       const isFormValid =  isNameValid && isCityValid && isStreetValid && ispostalValid;
       
       setFormInputsValidity({
        name: isNameValid,
        street: isStreetValid,
        city: isCityValid,
        postalCode: ispostalValid,
      });
  
       if(isFormValid){
        props.onSubmit({name: nameValue,
             postal: postalValue,
            city:cityValue,
            street: streetValue
        });
       }

    }

    const nameControlClasses = `${cssStyle.control} ${
        formInputsValidity.name ? '' : cssStyle.invalid
      }`;
      const streetControlClasses = `${cssStyle.control} ${
        formInputsValidity.street ? '' : cssStyle.invalid
      }`;
      const postalCodeControlClasses = `${cssStyle.control} ${
        formInputsValidity.postalCode ? '' : cssStyle.invalid
      }`;
      const cityControlClasses = `${cssStyle.control} ${
        formInputsValidity.city ? '' : cssStyle.invalid
      }`;


    return (<form onSubmit={onSubmitHandler} className={cssStyle['form']}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>name</label>
            <input ref={nameRef} type='text' id='name'></input>
            {!formInputsValidity.name && <p> enter valid name</p>}
        </div>
        <div className={streetControlClasses} >
            <label htmlFor='street'>street</label>
            <input ref={streetRef} type='text' id='street'></input>
            {!formInputsValidity.street && <p> enter valid street</p>}
        </div>
        <div className={postalCodeControlClasses} >
            <label htmlFor='postal'>postal</label>
            <input  ref={postalRef} type='text' id='postal'></input>
            {!formInputsValidity.postal && <p> enter valid postal code</p>}
        </div>
        <div className={cityControlClasses} >
            <label htmlFor='city'>city</label>
            <input ref={cityRef} type='text' id='city'></input>
            {!formInputsValidity.city && <p> enter valid city</p>}
        </div>
        <div className={cssStyle['actions']}>
             <button type='submit' className={cssStyle['submit']}>Submit</button>
             <button onClick={props.onCloseCheckout}>Close</button>
             
        </div>    
    </form>);

}

export default Checkout;