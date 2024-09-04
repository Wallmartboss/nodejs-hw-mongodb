import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log(contacts);
  } catch (error) {
    console.error('Failed to read contacts from the file:', error);
  }
};

getAllContacts();

export default getAllContacts;
