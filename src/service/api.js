import axios from 'axios';

axios.defaults.baseURL =
  'https://65808a033dfdd1b11c41b4a9.mockapi.io/contacts/';

export const getContacts = async () => {
  try {
    const response = await axios.get('contacts');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const addContact = async contact => {
  return await axios.post('contacts', contact);
};

export const deleteContact = async id => {
  return await axios.delete(`contacts/${id}`);
};
