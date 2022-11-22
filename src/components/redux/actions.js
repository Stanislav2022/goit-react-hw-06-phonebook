import { nanoid } from 'nanoid';
import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

export const addContats = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const removeContact = payload => {
  return {
    type: REMOVE_CONTACT,
    payload,
  };
};

export const getFiltereContacts = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
