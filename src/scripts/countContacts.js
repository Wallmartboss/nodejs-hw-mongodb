import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log(contacts.length);
  } catch (error) {
    console.error('Failed to read contacts from the file:', error);
  }
};

countContacts();
export default countContacts;
