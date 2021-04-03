import { createAction } from '@reduxjs/toolkit';
import actionTypes from './types';

export const addContact = createAction(actionTypes.ADD);

export const deleteContact = createAction(actionTypes.DELETE);

export const ChangeFilter = createAction(actionTypes.CHANGE_FILTER);
