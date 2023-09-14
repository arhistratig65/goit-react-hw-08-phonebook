import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact, updateContact } from "./operations";


const initContactsState = {
  items: [],
  isLoading: false,
  error: null,
};



const handlePending = (state) => {
  state.isLoading = true;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
}

const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
  handleFulfilled(state);
}
      
const handleFulfilledAdd = (state, action) => {
  state.items.push(action.payload);
  handleFulfilled(state);
}
    
const handleFulfilledDel = (state, action) => {
  state.items=state.items.filter(({id})=>id!==action.payload.id);
  handleFulfilled(state);
};

const handleFulfilledUp = (state, action) => {
  state.items.map(item => {
    if (item.id !== action.payload.id) {
    return item
    } 
    item.name = action.payload.name;
    item.number = action.payload.number;
    return item
  })
  handleFulfilled(state);
};





// === contactSlice ===
export const contactSlice = createSlice({
  name: "contacts",
  initialState: initContactsState,
  
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, handleFulfilledGet)
      .addCase(getContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, handleFulfilledUp)
      .addCase(updateContact.rejected, handleRejected)
  }
});
