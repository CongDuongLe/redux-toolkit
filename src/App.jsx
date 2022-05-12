import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import {calculateTotal } from './features/cart/cartSlice';
import React, {useEffect} from 'react'
import Modals from './components/Modal';



function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  // modal selectors 
  const { isOpen } = useSelector((state) => state.modal);


  // useEffect dispatch cartItems to get calculated total
  useEffect(() => {
    dispatch(calculateTotal());
   }, [cartItems])

  return (
    <div>
      {
        isOpen && <Modals />
      }
       <Navbar />
       <CartContainer/>
    </div>
  
  );
}
export default App;
