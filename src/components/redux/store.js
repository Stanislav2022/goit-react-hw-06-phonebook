import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contactsSlice';
import filter from './filter/filter';

export const store = configureStore({
  contactsSlice,
  filter,
});

export default store;
