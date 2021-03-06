
  
  
  const modal = document.querySelector('#contact_modal');
  
  
  function displayModal() {
    
    modal.style.display = "block";
    document.querySelector('#main').style.display = "none";
  }
  
  function closeModal() {
    
    modal.style.display = "none";
    document.querySelector('#main').style.display = "block";
  }
  
  // ferme le formulaire avec boutton "ESC"
  window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      closeModal(e);
    };
  })
  //ferme le formulaire avec "ENTER " quand button close est selectionn√© avec TAB
  document.querySelector('div header img').addEventListener('keydown',function(e){
    if (e.key === "Enter" ) {
      closeModal(e);
    };
  })

  
  
  //            DOM DU FORMULAIRE            //
  
  function domModul() {
  

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
labelPrenom.setAttribute("tabindex","0");
labelPrenom.setAttribute("id","labelprenom");
// Input du prenom
const inputPrenom = document.querySelector('input');
inputPrenom.setAttribute("name","first_name");
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
labelNom.setAttribute("for","last_name");
labelNom.setAttribute("tabindex","0");
labelNom.setAttribute("id","labelnom");
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
labelEmail.setAttribute("for","email");
labelEmail.setAttribute("tabindex","0");
labelEmail.setAttribute("id","labelemail");
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
labelMessage.setAttribute("for","your_message");
labelMessage.setAttribute("tabindex","0");
labelMessage.setAttribute("id","labelmessage");
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
  


// annule la fonction par d√©faut du bouton d'envoi
document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault();})

// controle l'input du pr√©nom 2 caract√®res minimum
inputPrenom.addEventListener('change', (e) => {
       prenom(inputPrenom);
})  

function prenom() {
  
  if (inputPrenom.value.trim().length > 1) {
    errorPrenom.style.display = "none";
    console.log(inputPrenom.value);
    return true;
  } else {
    errorPrenom.textContent = "Vous devez entrer 2 caract√®res minimum";
    return false;
  }
}


// controle l'input du pr√©nom 2 caract√®res minimum
inputNom.addEventListener('change', (e) => {
     nom(inputNom);
})  

function nom() {

    if (inputNom.value.trim().length > 1) {
      errorNom.style.display = "none";
      console.log(inputNom.value);
      return true;
    } else {
      errorNom.textContent = "Vous devez entrer 2 caract√®res minimum";
      return false;
    }
}

inputEmail.addEventListener('change', (e) => {

  email(inputEmail);
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

    message(textMessage);
  })  

// controle l'espace texte  avec caract√®res minimum
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

// validation de tous les champs
  function inputValid() {

    prenom();nom();email();message();

  }

  function verifAllTrue() {

    if (prenom() === true 
    && nom() === true
    && email() === true
    && message() === true) {

      return true
    }
    return false
  }


envoyez.addEventListener('click',function() {

  inputValid();

     if (verifAllTrue() === true) {
       modal.style.display = "none";
       document.querySelector('#main').style.display = "block";
      }
    });  

}

   //   GARDE LE FOCUS A L'INTERIEUR DU MODAL   //

// selectionne la modale
const selectModal = document.querySelector('#contact_modal');

//selectionne "X" 
const closeModale = document.querySelector('.closemodal');

//selectionne LABEL et INPUT
const firstName = document.querySelector('#labelprenom');
const inputFirstName = document.querySelector('#first_name');
const lastName = document.querySelector('#labelnom');
const inputLastName = document.querySelector('#last_name');
const emailLabel = document.querySelector('#labelemail');
const emailInput = document.querySelector('#email');
const yourMessage = document.querySelector('#labelmessage');
const messageText = document.querySelector('#your_message');

//selectionne le bouton "envoyez"
const buttonSend = document.querySelector('#send');

//selectionne tous les elements focusables
const allFocusableElements = `${closeModale},${firstName},${inputFirstName},
${lastName},${inputLastName},${emailLabel},${emailInput},${yourMessage},
${messageText}, ${buttonSend},[tabindex]:not([tabindex="-1"])`;

//premier √©lement focusable
const firstFocusableElememt = closeModale;

//contenu de tous
const focusableContent = allFocusableElements;

//dernier √©lement focusable
const lastFocusableElement = buttonSend;

document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab';
  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElememt) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElememt.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElememt.focus(); 



async function init(){
  const photographers = await getPhotographers();
  domModul();
};

init();