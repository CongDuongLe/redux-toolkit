import React from 'react'
import { ChevronDown, ChevronUp } from '../icons';
import { increaseAmount, removeItem, decreaseAmount} from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'



const CartItem = ({
    id,
    img,
    title,
    price,
    amount
}) => {

    const dispatch = useDispatch();

  return (
    <div className="my-6 w-full h-auto">
    <div className='grid grid-flow-col auto-cols-auto gap-[1.5rem] my-5 w-screen justify-center items-align '>
      {/* Image Phone */}
        <div className='grid grid-cols-1 items-center justify-center'>
          <img src={img} alt={title} className='w-[5rem] h-[5rem] object-cover'/>
        </div>
        {/* Tittle, Price and Button Remove */}
        <div className='grid grid-cols-1 items-center place-content-evenly w-[300px]'>
          <div className='flex flex-col items-center'>
            <div className='uppercase font-semibold text-lg tracking-widest'>
              {title}
            </div>
            <div className='text-md tracking-wide text-[#8D8DAA] font-bold'>
              ${price}
              </div>
            <button 
              onClick={() => {
                dispatch(removeItem(id))
                console.log('removed')
              }}
              className='hover:text-[#EB5353] transition-all ease-in-out duration-300 '>
              Remove
            </button>
          </div>
        </div>
        {/* Button up and down amount */}
        <div className='grid grid-cols-1 items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <button 
              onClick={() => {
                // increase amount
                dispatch(increaseAmount(id))
              }}
              className='hover:text-[#645cff] transition-all ease-in-out duration-300'>
              <ChevronUp />
            </button>
            <span className='text-xl'>{amount}</span>
            <button 
              onClick={() => {
                // decrease amount
                dispatch(decreaseAmount(id))
              }}
              className='hover:text-[#645cff] transition-all ease-in-out duration-300'>
              <ChevronDown />
            </button>
          </div>
        </div>
        </div>
      </div>
        
  )
}

export default CartItem