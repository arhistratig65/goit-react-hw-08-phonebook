
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// ===== Contacts operations ========

// GET
export const getContacts = createAsyncThunk('contacts/fetchAll',
  async (_, thunkAPI) => {

    // const state = thunkAPI.getState();
    // if (state.auth.token === null) {
    //   return thunkAPI.rejectWithValue('No token');
    // }

      try {
          const response = await axios.get('/contacts');
          console.log('GET contacts');
          return  response.data;
      } catch (error) {
           return  thunkAPI.rejectWithValue(error.message);
      }
  }
)


export const addContact = createAsyncThunk( 'contacts/addContact',
  async (contact, thunkAPI) => {

      try {
          const response = await axios.post('/contacts', contact );
          console.log('added succesfull');
          return  response.data;
      } catch (error) {
        return  thunkAPI.rejectWithValue(error.message)
      }
  }
)


export const deleteContact = createAsyncThunk('contacts/deleteContact',
  async (id, thunkAPI) => {
      try {
          const response = await axios.delete(`/contacts/${id}`)
          console.log('Сontact was deleted');
          return  response.data;
      } catch (error) {
        return  thunkAPI.rejectWithValue(error.message)
      }
  }
)


export const updateContact = createAsyncThunk('contacts/updateContact',
  async ({ itemId, contact }, thunkAPI) => {
      try {
          const response = await axios.patch(`/contacts/${itemId}`, contact)
          console.log('Сontact was updated');
          return  response.data;
      } catch (error) {
        console.log('Не могу обновить');
        return  thunkAPI.rejectWithValue(error.message)
      }
  }
)



