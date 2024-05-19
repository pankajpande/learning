import react ,{useReducer}from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items:[],
    totalAmount:0
}
const cartReducer = (state,action) =>{
    if(action.type === "ADD"){
       
        let updatedTotalAmount = state.items.amount + action.item.amount * action.item.price; 
        
        const existingItemIndex = state.items.findIndex( (item) => {return item.id === action.item.id});
        
        const existingItem = state.items[existingItemIndex];
        let updatedItems ;
        if(existingItem){
            let updatedItem = {...existingItem, amount: action.item.amount +1 }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        
        return {items:updatedItems,totalAmount:updatedTotalAmount}
    }
    if(action.type === "REMOVE"){

        
        
        const existingItemIndex = state.items.findIndex( (item) => {return item.id === action.id});
        

        const existingItem = state.items[existingItemIndex];

        let updatedTotalAmount = state.totalAmount -  existingItem.price; 
        let updatedItems ;
        if(existingItem){
            if(existingItem.amount <= 1){
                updatedItems = [...state.items];
                updatedItems.splice(existingItemIndex,1);     
            }else{
            let updatedItem = {...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem;
            }
            return {items:updatedItems,totalAmount:updatedTotalAmount}
        }
    }
    return defaultCartState;
}

const CartContextProvider = (props) =>{

   const [cartState,dispatchAction] = useReducer(cartReducer,defaultCartState);

    const addCartItem = (item)=>{
        dispatchAction({type:"ADD", item:item});
    }

    const removeCartItem = (id) =>{
        dispatchAction({type:"REMOVE", id:id});
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.amount,
        addItem:addCartItem,
        removeItem:removeCartItem
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartContextProvider;