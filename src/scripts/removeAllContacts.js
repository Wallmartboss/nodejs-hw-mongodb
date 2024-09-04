import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]');
    console.log('Contacts deleted successfully');
  } catch (error) {
    console.error('Failed to delete contacts:', error);
  }
};

removeAllContacts();
export default removeAllContacts;
