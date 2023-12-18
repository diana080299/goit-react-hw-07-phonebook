import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const myContactSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: [],
  },
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  myContactSlice.reducer
);

export const { deleteContact, addContact } = myContactSlice.actions;
export const getContacts = state => state.user.contacts;
