import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

const initialState = [];

const contactsRreducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContact = [...store.contacts, payload];
      return { ...store, contacts: newContact };
    case REMOVE_CONTACT:
      const result = store.contacts.filter(item => item.id !== payload);
      return { ...store, contacts: result };
    default:
      return store;
  }
};
export default contactsRreducer;
