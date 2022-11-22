import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContats = createAction('contact/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});

export const removeContact = createAction('contact/remove');
