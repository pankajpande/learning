import React ,{Fragment,useContext}from 'react';
import cssStyle from "./Header.module.css"
import mealImg from "../../../assets/meals.jpg"
import CartButton from '../CartButton/CartButton';
import CartContext from '../../../store/cart-context';


const Header = (props) => {
 const cartContext = useContext(CartContext);
  const uniqueIds= cartContext.items.map((item) => {return item.id}).filter((x, i, a) => a.indexOf(x) === i)
 const badgeVal = uniqueIds.length;
 return (<Fragment>
    <header className={cssStyle["header"]}>
        <h1> Meal Ordering System</h1>
        <CartButton onCartClick={props.onCartClick} badge={badgeVal} onClose={props.onClose}></CartButton>
    </header>
    <div className={cssStyle["main-image"]}>
        <img src={mealImg}></img>
    </div>
 </Fragment>);
}

export default Header;
