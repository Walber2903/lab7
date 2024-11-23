const contactList = [
  { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
  { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
  { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" },
];

const contactTableBody = document.querySelector("#contact-list tbody");
const addContactForm = document.getElementById("add-contact-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

function displayContacts() {
  contactTableBody.innerHTML = "";

  contactList.forEach(contact => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${contact.name}</td>
      <td>${contact.phone}</td>
      <td>${contact.email}</td>
    `;
    contactTableBody.appendChild(row);
  });
}

function addContact(event) {
  event.preventDefault(); 

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !phone || !email) {
    alert("Please fill out all fields.");
    return;
  }

  const newContact = { name, phone, email };

  contactList.push(newContact);

  displayContacts();

  addContactForm.reset();
}

addContactForm.addEventListener("submit", addContact);

displayContacts();
