import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/myContactsSlice';
import { myFilterSlice } from './myFilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: myFilterSlice.reducer,
  },
});
