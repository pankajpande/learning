import MealItemForm from "./MealItemForm";
import cssStyle from "./MealItem.module.css";
import React ,{useContext}from 'react';
import CartContext from "../../store/cart-context";

const MealItem = (props) => {

    const cartContext = useContext(CartContext);
    const onAddToCartHandler = (updatedAmount) => {
       let item =  {
        id: props.mealItem.id,
        description: props.mealItem.description,
        price:props.mealItem.price,
        name:props.mealItem.name,
        amount: updatedAmount
    }
        cartContext.addItem(item);
    }

    return (
            <li className={cssStyle["meal"]}>
                <h3>{props.mealItem.name}</h3>
                <div className={cssStyle["description"]}>{props.mealItem.description}</div>
                <div className={cssStyle["price"]}>{props.mealItem.price}</div>
                <div>
                <MealItemForm onAddToCart={onAddToCartHandler} mealItem={props.mealItem}></MealItemForm>
                </div>
            </li>
            
        
    );
}

export default MealItem