import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/myContactsSlice';
import { myFilterSlice } from './myFilterSlice';
// import { persistedReducer } from './contacts/myContactsSlice';
// import { myFilterSlice } from './myFilterSlice';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: myFilterSlice.reducer,
  },
});

// reducer: {
//   user: persistedReducer,
//   myFilter: myFilterSlice.reducer,
// },
// middleware: getDefaultMiddleware => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ],
// });

// export const persistor = persistStore(store);
