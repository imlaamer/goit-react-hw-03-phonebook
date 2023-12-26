const CONTACTS_KEY = 'contacts';

function getContacts() {
  try {
    const parsedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY)) || [];
    return parsedContacts; //
  } catch (error) {
    alert(`Oops... ${error.message}`);
  }
}
export { getContacts, CONTACTS_KEY };
