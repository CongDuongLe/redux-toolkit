import React from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/layout/modalSlice'
import {clearCart} from '../features/cart/cartSlice'

Modal.setAppElement('#root')

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        border: '1px solid #7FB5FF',
        borderRadius: '10px',
        outline: 'none',
        padding: '20px',
        width: '50%',
        height: '50%',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderBottom: 'none',
        borderRight: 'none',
        borderTop: 'none',
        borderLeft: 'none',

    },
  };


const Modals = () => {

    const dispatch = useDispatch();
  return (
    <div>
        <Modal
            isOpen={true}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="flex justify-center content-center text-4xl text-[#001D6E] pt-[10%]"> Do you want to remove all your items</div>
            <div className="flex justify-around items-center pt-[10%]">
             {/* button cancel clear cart */}
             <button className="px-10 py-4 bg-[#7FB5FF] font-bold tracking-wider text-white rounded-xl mr-2 hover:scale-110 transition-all duration-200 ease-in-out"
                onClick={() => { 
                    dispatch(closeModal())
                }}
             >
                 Cancel
             </button>
            <button 
                className="px-10 py-4 bg-red-500 text-white rounded-xl mr-2 font-bold tracking-wider hover:bg-red-400 hover:scale-110 transition-all duration-200 ease-in-out"
                onClick={() => {
                // close modal
                dispatch(clearCart())
                dispatch(closeModal())
            }}>Clear</button>

            </div>
        </Modal>

    </div>
  )
}

export default Modals