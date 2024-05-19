import react from "react";

const CartContext = react.createContext({
    items: [],
    totalAmount:0,
    addItem:()=>{},
    removeItem: ()=>{}
});

export default CartContext;