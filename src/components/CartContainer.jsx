import React from 'react'
import CartItem from './CartItem'
import {useSelector, useDispatch} from 'react-redux'
import {openModal} from '../features/layout/modalSlice'

const CartContainer = () => {
    // dispatch actions
    const dispatch = useDispatch()
    // get selector from initialState from cartSlice
    const {cartItems, amount, total} = useSelector((state) => state.cart)
    // checking amount < 1 means that there are no items in the cart
    if (amount < 1) {
        return (
            <div className="flex justify-center w-full h-screen mt-[10%]">
                <div className='flex flex-col items-center text-[#035397]'>
                    <div className='uppercase font-bold text-5xl tracking-wider mb-[10%]'> Your Bag</div>
                    <div className='tracking-widest text-xl'> is currently empty</div>
                </div>
            </div>
        )
    }

  return (
        <div className='flex justify-center w-screen h-screen'>
            <div className='flex flex-col items-center w-full h-full mt-[5%] text-[#035397]'>
                {/* Cart Header */}
                <div className='uppercase font-bold text-4xl tracking-wider mb-4'>
                    your bag
                </div>
                {/* Cart Items from CartItems */}
                <div>
                  {cartItems.map((item) => {
                      return <CartItem key={item.id} {...item} />;
                  })}
                </div>
              <footer>
                  <hr className="" />
                  <div className='cart-total'>
                      <h4 className='font-semibold'>
                          Total: <span className='font-semibold'> ${total}</span>
                      </h4>
                  </div>
                  <button 
                        onClick={() =>{
                            // dispatch(clearCart())
                            // console.log('cleared')
                            dispatch(openModal())
                        }}
                        className='btn clear-btn'>clear cart</button>
              </footer>
            </div>
        </div>
  )
}

export default CartContainer



// delete item in an array
// const removeItem = (id) => {
//     const newCart = cartItems.filter((item) => {
//         return item.id !== id
//     }
//     setCart(newCart)
// }
