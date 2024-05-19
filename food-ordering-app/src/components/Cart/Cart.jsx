import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import cssStyle from "./Cart.module.css"
import React,{useContext,useState} from 'react';
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart =(props)=>{
    const cartCtx =  useContext(CartContext);
    const [checkoutState,setCheckoutState] = useState(false);
    const [isOrderSubmitting,setIsOrderSubmitting] = useState(false);
    const [isOrderPlaced,setIsOrderPlaced] = useState(false)
    const total = cartCtx.totalAmount;
    let isItemPresnt = cartCtx.items.length > 0;
    const addItem = (item)=>{
      cartCtx.addItem(item);
    }
    const removeItem = (id) => {
      cartCtx.removeItem(id);
    }
    
    const onOrderClick = () => {
      setCheckoutState(true);
    }
    const onCloseCheckout = () => {
      setCheckoutState(false);
    }

    const onSubmitCheckHandler = async (userData) => {
      setIsOrderSubmitting(true);
      const response =  await fetch("https://react-learning-58a73-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{ method : 'POST',
      body:JSON.stringify({
        user:userData,
        items:cartCtx.items,
        total:cartCtx.totalAmount
      })})
      setIsOrderSubmitting(false)
      setIsOrderPlaced(true);

    }

  const orderAction = (<div className={cssStyle['actions']}>
  <button className={cssStyle['button--alt']} onClick={props.onClose} > Close</button>
 {isItemPresnt && <button className={cssStyle['button']} onClick={onOrderClick} >Order</button>}
</div>)


    const cartModalContent = (<React.Fragment><ul className={cssStyle['cart-items']}>
    {cartCtx.items.map(item => <CartItem  key={item.id} item={item} onAdd={() => addItem(item)} onRemove={ () => removeItem(item.id)}></CartItem> )}
  </ul>
  <div className={cssStyle['total']}>
    {total}
  </div>
  {checkoutState && <Checkout onSubmit={onSubmitCheckHandler} onCloseCheckout={onCloseCheckout}></Checkout>}
  { !checkoutState && orderAction} </React.Fragment>);

  const pendingOrderContent = (<div> placing order !!! </div>)  

  const orderPlacedContent = (<div> !!! Order Placed Successfully  </div>)  

    return (
        <Modal onClose={props.onClose}>
          {isOrderSubmitting && !isOrderPlaced && pendingOrderContent}
          {isOrderPlaced && orderPlacedContent}
          {!isOrderSubmitting && !isOrderPlaced && cartModalContent }
        </Modal>
    );
}
export default Cart;