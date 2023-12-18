import * as ContactService from 'service/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContact = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      return await ContactService.getContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContacts = createAsyncThunk(
  'contacts/postContact',
  async newContact => {
    try {
      const contact = await ContactService.addContact(newContact);
      return contact.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const contact = await ContactService.deleteContact(id);
      return contact.data;
    } catch (error) {
      console.log(error);
    }
  }
);
