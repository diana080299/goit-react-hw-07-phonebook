import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const isLoading = ({ contacts }) => contacts.isLoading;
export const getFilter = state => state.filter.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
