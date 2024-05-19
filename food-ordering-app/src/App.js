import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import react,{ useState} from "react";
import CartContextProvider from "./store/CartContextProvider";
function App() {
  const [cartShown,setCartShown] = useState(false);
const onCartClickHandler = ()=>{
  setCartShown(true);
}
const onClose = () => {
  setCartShown(false);
}

  return (
    <CartContextProvider>
      {cartShown && <Cart onClose={onClose}/>}
      <Header onCartClick={onCartClickHandler}></Header>
      <Meals></Meals>
    </CartContextProvider>
  );
}

export default App;
