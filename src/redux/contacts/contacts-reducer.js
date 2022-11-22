import { createReducer } from '@reduxjs/toolkit';
import { addContats, removeContact } from './contacts-actions';

const contactsReducer = createReducer([], {
  [addContats.type]: (store, { payload }) => {
    store.push(payload);
  },
  [removeContact.type]: (store, { payload }) => {
    store.filter(({ id }) => id !== payload);
  },
});

// const initialState = [];

// const contactsReducer = (store = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       const newContact = [...store.contacts, payload];
//       return { ...store, contacts: newContact };
//     case REMOVE_CONTACT:
//       const result = store.contacts.filter(item => item.id !== payload);
//       return { ...store, contacts: result };
//     default:
//       return store;
//   }
// };
export default contactsReducer;
