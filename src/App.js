import Cart from "./component/Cart.js";
import Checkout from "./component/Checkout.js";
import Header from "./component/Header";
import Meals from "./component/Meals";
import { CartContextProvider } from "./component/store/CartContext.js";
import { UserProgressContextProvider } from "./component/store/UserProgressContext.js";


function App() {
  return (
    <UserProgressContextProvider>
<CartContextProvider>
  <Header/>
  <Meals/>
  <Cart/>
  <Checkout/>
</CartContextProvider>
</UserProgressContextProvider>
  );
}

export default App;
