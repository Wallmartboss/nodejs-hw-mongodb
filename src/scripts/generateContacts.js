import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact({}));
    }
    // console.log(contacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    console.log('File created successfully');
  } catch (error) {
    console.error('Failed to write contacts to the file:', error);
  }
};
generateContacts(2);
export default generateContacts;
