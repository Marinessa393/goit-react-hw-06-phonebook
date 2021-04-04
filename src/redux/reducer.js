import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, ChangeFilter } from './actions';

const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [ChangeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: items,
  filter: filter,
});
