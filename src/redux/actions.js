import actionTypes from './types';

export const addContact = contact => ({
  type: actionTypes.ADD,
  payload: contact,
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const ChangeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
