import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/Add');

export const deleteContact = createAction('phonebook/Delete');

export const changeFilter = createAction('phonebook/ChangeFilter');
