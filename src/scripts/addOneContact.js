import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.push(createFakeContact({}));
    // console.log(contacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    console.log('Contact added successfully');
  } catch (error) {
    console.error('Failed to write contact to the file:', error);
  }
};
addOneContact();

export default addOneContact;
