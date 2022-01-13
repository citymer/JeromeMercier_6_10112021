function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
const divFormData = document.querySelector('.formdata');

// Label du nom
const labelNom = document.createElement('label');
divFormData.appendChild(labelNom);
labelNom.textContent = "Nom";
// Input du nom
const inputNom = document.createElement('input');
divFormData.appendChild(inputNom);
inputNom.setAttribute("type","text");


// Label de Email
const labelEmail = document.createElement('label');
divFormData.appendChild(labelEmail);
labelEmail.textContent = "Email";

// Input de Email
const inputEmail = document.createElement('input');
divFormData.appendChild(inputEmail);
inputEmail.setAttribute("type","text");

//Label votre message
const labelMessage = document.createElement('label');
divFormData.appendChild(labelMessage);
labelMessage.textContent = "Votre message";
// Input de votre message
const inputMessage = document.createElement('input');
divFormData.appendChild(inputMessage);
inputMessage.setAttribute("type","email");
inputMessage.setAttribute("class","inputmessage");



