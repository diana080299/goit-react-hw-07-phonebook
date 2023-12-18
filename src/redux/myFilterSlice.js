import { createSlice } from '@reduxjs/toolkit';

export const myFilterSlice = createSlice({
  name: 'myFilter',
  initialState: { filter: '' },
  reducers: {
    searchFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { searchFilter } = myFilterSlice.actions;
export const getFilter = state => state.myFilter.filter;
