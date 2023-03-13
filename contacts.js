const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join('db', 'contacts.json');


const listContacts = async () => {
try {
  const data = await fs.readFile(contactsPath, "utf-8");

  const contacts = JSON.parse(data);

    return contacts;
} catch (error) {
  console.log(error.message);
  console.log('falarm'.bgRed)
}
}

const getContactById  = async (contactId) => {
  try {
    const contacts = await listContacts();

    const contactToId = contacts.find((contact) => contact.id === String(contactId));

 return contactToId;
} catch (error) {
  console.log(error.message);
  console.log('falarm'.bgRed)
}
}

const removeContact  = async (contactId) => {
  // ...твій код
  const contacts = await listContacts();

  const afterRemoveContact = contacts.filter(contact => contact.id !== String(contactId));
  
  await fs.writeFile(contactsPath, JSON.stringify(afterRemoveContact));

  return contacts;
}

 

const addContact  = async (name, email, phone) => {
  // ...твій код
 try {
    const contacts = await listContacts();

   const newContacts = [...contacts, { id: v4(), name, email, phone }];


   await fs.writeFile(contactsPath, JSON.stringify(newContacts), "utf-8");

 return contacts;
} catch (error) {
  console.log(error.message);
  console.log('falarm'.bgRed)
}


}

module.exports = {addContact, removeContact, getContactById, listContacts};