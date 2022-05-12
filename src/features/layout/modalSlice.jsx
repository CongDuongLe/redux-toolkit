import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false,
}

// create Slice reducer for modal state
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        // open modal
        openModal: (state, action) => {
            state.isOpen = true;
        },
        // close modal
        closeModal: (state, action) => {
            state.isOpen = false;
        }
    }
})
// export all modal action
export const { openModal, closeModal } = modalSlice.actions;

// export modalSlice.reducer
export default modalSlice.reducer;
