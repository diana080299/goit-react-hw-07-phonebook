import { createSlice } from '@reduxjs/toolkit';
import { postContacts, deleteContact, fetchContact } from './operations';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = true;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

const myContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact.fulfilled, handleFulfilled)
      .addCase(fetchContact.rejected, handleRejected)
      .addCase(postContacts.pending, handlePending)
      .addCase(postContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(postContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = myContactSlice.reducer;

// export const myContactSlice = createSlice({
//   name: 'user',
//   initialState: {
//     contacts: [],
//   },
//   reducers: {
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(el => el.id !== action.payload);
//     },
//     addContact: (state, action) => {
//       state.contacts = [...state.contacts, action.payload];
//     },
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   myContactSlice.reducer
// );

// export const { deleteContact, addContact } = myContactSlice.actions;
// export const getContacts = state => state.user.contacts;
