import { ADD_CONTACT, DELETE_CONTACT, UPLOAD_CONTACT_LIST } from "../types";

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id
});

export const uploadContactList = contacts => ({
  type: UPLOAD_CONTACT_LIST,
  payload: contacts
});
