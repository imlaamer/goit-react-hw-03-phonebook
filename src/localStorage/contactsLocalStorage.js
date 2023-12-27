const CONTACTS_KEY = 'contacts';

function setContacts(contactsData) {
  try {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contactsData));
  } catch (error) {
    alert(`Oops... ${error.message}`);
  }
}

function getContacts() {
  try {
    const parsedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY)) || [];
    return parsedContacts; //
  } catch (error) {
    alert(`Oops... ${error.message}`);
  }
}
export { setContacts, getContacts };
