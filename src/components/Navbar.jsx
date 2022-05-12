import React from 'react'
import { useSelector } from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
    const Amount = useSelector(state => state.cart)  // get cart from redux store.js
  return (
      <div className='
         h-[80px] w-screen bg-[#035397] text-white flex items-center justify-between sticky top-0 mx-auto'>
          <div className='px-12 flex w-full items-center justify-between '>
              <div className='text-3xl font-bold leading-12 tracking-wider'>Redux Toolkit</div>
              <div className='relative'>
                  <FaShoppingCart className='text-3xl' />
                  <div className='absolute bg-[#C4DDFF] rounded-full w-[1.5rem] h-[1.5rem] -top-3 left-5
                                flex items-center justify-center'>
                      <div className='text-[#035397] text-sm font-bold'>
                          {Amount.amount} 
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar