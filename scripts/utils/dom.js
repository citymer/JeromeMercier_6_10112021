//*****************************  DOM ********************************************************************

const body = document.querySelector('body');


// DOM   SECTION trier avec menu déroulant  ****************

const main = document.getElementById('main');

const sectionTrier = document.createElement('section');
sectionTrier.id = 'filter';
main.appendChild(sectionTrier);
sectionTrier.setAttribute("role","listbox");


    const label = document.createElement('span');
    label.textContent = 'Trier par';
    label.setAttribute("for","trier les images");
    label.setAttribute("class","trierpar"),
    label.setAttribute("aria-label","trier par");
    sectionTrier.appendChild(label);

    const button = document.createElement('button');
    sectionTrier.appendChild(button);
    button.textContent = "Date";

  

              const chevron = document.createElement('i');
              button.appendChild(chevron);
              chevron.setAttribute("class","fas fa-chevron-down");
              chevron.setAttribute("id","chevron");
              chevron.setAttribute("role","button");
              chevron.setAttribute("tabindex","0");
           

              const sousMenu = document.createElement('ul');
              button.appendChild(sousMenu);
              sousMenu.setAttribute("class","sousmenu");
              console.log(sousMenu);


                    const popularite = document.createElement('li');
                    sousMenu.appendChild(popularite);
                    popularite.setAttribute("class","popularite");
                    popularite.setAttribute("role","option");
                    popularite.setAttribute("tabindex","0");
                    popularite.textContent = "Popularité";


                    const titre = document.createElement('li');
                    sousMenu.appendChild(titre);
                    titre.setAttribute("class","titre");
                    titre.setAttribute("role","option");
                    titre.setAttribute("tabindex","0");
                    titre.textContent = "Titre";    


   // DOM section Divphoto  *******************   
const divPhoto = document.createElement('div');
divPhoto.setAttribute("id","divphoto");
main.appendChild(divPhoto);

// DOM FOOTER    *************************************
const footer = document.createElement('footer');
body.appendChild(footer);

    const divFooterInfo = document.createElement('div');
    footer.appendChild(divFooterInfo);
    divFooterInfo.setAttribute("class","divfooterinfo");

    const divTotalLikes = document.createElement('div');
    divFooterInfo.appendChild(divTotalLikes);
    divTotalLikes.setAttribute("class","divtotallikes");

        const textNumber = document.createElement('span');
        divTotalLikes.appendChild(textNumber);
        textNumber.setAttribute("class","textnumber totalnumber");
        textNumber.setAttribute("aria-label","nombre total de likes");
        textNumber.textContent = "";

        const iconHeartFooter = document.createElement('i');
        divTotalLikes.appendChild(iconHeartFooter);
        iconHeartFooter.setAttribute("class","fas fa-heart");


                     