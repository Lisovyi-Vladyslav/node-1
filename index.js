require('colors');

const argv = require("yargs").argv;

const {
    addContact,
    removeContact,
    getContactById,
    listContacts
} = require('./contacts');


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
          console.table(await listContacts());
      
      break;

    case "get":
      // ... id
      console.log(await getContactById(id));
      
      break;

    case "add":
      // ... name email phone
      await addContact(name, email, phone);
      console.table(await listContacts());
      break;

    case "remove":
      // ... id
      await removeContact(id);
      console.table(await listContacts());
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
