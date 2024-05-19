import React ,{Fragment}from 'react';
import CartIcon from './CartIcon';
import cssStyle from "./CartButton.module.css"


const CartButton = (props) => {

 return (<button onClick={props.onCartClick} className={cssStyle["button"]}>
    <span className={cssStyle["icon"]}><CartIcon></CartIcon></span>
    <span>Your Cart</span>
    <span className={cssStyle["badge"]}>{props.badge}</span>
 </button>);
}

export default CartButton;
