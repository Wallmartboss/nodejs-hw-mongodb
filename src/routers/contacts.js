import { Router } from 'express';
import { getAllContacts, getContactById } from './services/contacts.js';
import {
  getAllContactsController,
  getContactByIdController,
} from './controllers/contacts.js';
const router = Router();

router.get('/contacts', async (req, res) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
});

router.get('/contacts/:contactId', async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  // Відповідь, якщо контакт не знайдено
  if (!contact) {
    res.status(404).json({
      message: 'Contact not found',
    });
    return;
  }
  // Відповідь, якщо контакт знайдено
  res.json({
    status: 200,
    message: 'Successfully found contact with id {contactId}!',
    data: contact,
  });
});

router.get('/contacts', getAllContactsController);
router.get('/contacts/:contactId', getContactByIdController);

export default router;
