
  
  
  const modal = document.getElementById("contact_modal");
  
  function displayModal() {
    
    modal.style.display = "block";
  }
  
  function closeModal() {
    
    modal.style.display = "none";
  }
  
  // ferme le formulaire avec boutton "esc"
  window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      closeModal(e);
    };
  })
  
  

  
  
  //            DOM DU FORMULAIRE            //
  
  function domModul(photographers) {
  

const divFormData = document.querySelector('.formdata');

const envoyez = document.querySelector('#send');

// header du formulaire
const header = document.querySelector('.modal header');

  const {name} = this.filterPhotographer[0];

const namePhotograph = document.createElement('span');
header.appendChild(namePhotograph);
namePhotograph.textContent = `${name}`;
namePhotograph.setAttribute("class","namephotograph");


// PRENOM *
//Label du prenom
const labelPrenom = document.querySelector('.formdata label');
labelPrenom.setAttribute("form","first_name");
labelPrenom.setAttribute("tabindex","0");
// Input du prenom
const inputPrenom = document.querySelector('input');
inputPrenom.setAttribute("name","first_name");
inputPrenom.setAttribute("id","first_name");
inputPrenom.setAttribute("aria-required","true");
inputPrenom.setAttribute("minlenght","2");
inputPrenom.setAttribute("tabindex","0");
inputPrenom.setAttribute("aria-labelledby","first_name");
// message d'erreur prenom
const errorPrenom = document.createElement('p');
divFormData.appendChild(errorPrenom);
errorPrenom.setAttribute("class","first_name_error");


//NOM **
// Label du nom
const labelNom = document.createElement('label');
divFormData.appendChild(labelNom);
labelNom.textContent = "Nom";
labelNom.setAttribute("form","last_name");
labelNom.setAttribute("tabindex","0");
// Input du nom
const inputNom = document.createElement('input');
divFormData.appendChild(inputNom);
inputNom.setAttribute("type","text");
inputNom.setAttribute("id","last_name");
inputNom.setAttribute("name","last_name");
inputNom.setAttribute("aria-requiered","true");
inputNom.setAttribute("minlenght","2");
inputNom.setAttribute("tabindex","0");
inputNom.setAttribute("aria-labelledby","last_name");
// message d'erreur nom
const errorNom = document.createElement('p');
divFormData.appendChild(errorNom);
errorNom.setAttribute("class","last_name_error");

// EMAIL ***
// Label de Email
const labelEmail = document.createElement('label');
divFormData.appendChild(labelEmail);
labelEmail.textContent = "Email";
labelEmail.setAttribute("form","email");
labelEmail.setAttribute("tabindex","0");
// Input de Email
const inputEmail = document.createElement('input');
divFormData.appendChild(inputEmail);
inputEmail.setAttribute("type","email");
inputEmail.setAttribute("name","email");
inputEmail.setAttribute("id","email");
inputEmail.setAttribute("aria-requiered","true");
inputEmail.setAttribute("tabindex","0");
inputEmail.setAttribute("aria-labelledby","email");
// message d'erreur email
const errorEmail = document.createElement('p');
divFormData.appendChild(errorEmail);
errorEmail.setAttribute("class","email_error");

//* MESSAGE
//Label votre message
const labelMessage = document.createElement('label');
divFormData.appendChild(labelMessage);
labelMessage.textContent = "Votre message";
labelMessage.setAttribute("form","your_message");
labelMessage.setAttribute("tabindex","0");
// texte de votre message
const textMessage = document.createElement('textarea');
divFormData.appendChild(textMessage);
textMessage.setAttribute("id","your_message");
textMessage.setAttribute("name","your_message");
textMessage.setAttribute("aria-requiered","true");
textMessage.setAttribute("tabindex","0");
textMessage.setAttribute("maxlenght","150");
textMessage.setAttribute("aria-labelledby","your_message");
// message d'erreur de votre message
const errorMessage = document.createElement('p');
divFormData.appendChild(errorMessage);
errorMessage.setAttribute("class","your_message_error");
  


// annule la fonction par défaut du bouton d'envoi
document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault();})

// controle l'input du prénom 2 caractères minimum
inputPrenom.addEventListener('change', (e) => {
       prenom();
})  

function prenom() {
  
  if (inputPrenom.value.trim().length > 1) {
    errorPrenom.style.display = "none";
    console.log(inputPrenom.value);
    return true;
  } else {
    errorPrenom.textContent = "Vous devez entrer 2 caractères minimum";
    return false;
  }
}


// controle l'input du prénom 2 caractères minimum
inputNom.addEventListener('change', (e) => {
     nom();
})  

function nom() {

    if (inputNom.value.trim().length > 1) {
      errorNom.style.display = "none";
      console.log(inputNom.value);
      return true;
    } else {
      errorNom.textContent = "Vous devez entrer 2 caractères minimum";
      return false;
    }
}

inputEmail.addEventListener('change', (e) => {

  email();
})  

// controle que l'email soit valide
function email() {

    const regex = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';
    if (inputEmail.value.trim().match(regex)) {
      errorEmail.style.display = "none";
      console.log(inputEmail.value);
      return true;
    } else {
      errorEmail.textContent = "Vous devez renseigner un email valide";
      return false;
    }
  }

  textMessage.addEventListener('change', (e) => {

    message();
  })  

// controle l'espace texte  avec caractères minimum
function message() {

    if (textMessage.value.trim().length > 1) {
      errorMessage.style.display = "none";
      console.log(textMessage.value);
      return true;
    } else {
      errorMessage.textContent = "Vous devez laisser un message";
      return false;
    }
}


  function inputValid() {

    prenom();nom();email();message();

  }

  function verifAllTrue() {

    if (prenom() === true 
    && nom() === true
    && email() === true
    && message() === true) {

      return true
    }else {
       inputValid();
      return false
    }
  }


envoyez.addEventListener('click',function() {

  inputValid();

  if (verifAllTrue() === true) {
    modal.style.display = "none";
  }else {
    inpu();
  }
});  

  }

async function init()
{
  const photographers = await getPhotographers();
  domModul();
};

init();