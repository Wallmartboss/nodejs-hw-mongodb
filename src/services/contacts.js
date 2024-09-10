import { contactsCollection } from '../db/contacts.js';

export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await contactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactsCollection.create(payload);
  return contact;
};
export const deleteContact = async (contactId) => {
  const contact = await contactsCollection.findByIdAndDelete(contactId);
  return contact;
};
export const updateContact = async (contactId, payload, option = {}) => {
  const result = await contactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...option,
    },
  );
  if (!result || !result.value) return null;

  return {
    contact: result.value,
    isNew: Boolean(result?.lastErrorObject?.upserted),
  };
};

// export const patchContact = async (contactId, payload) => {
//   const contact = await contactsCollection.findByIdAndUpdate(contactId, payload, {
//     new: true,
//   });
//   return contact;
// };
