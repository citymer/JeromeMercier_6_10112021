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

   /* const select = document.createElement('select');
    sectionTrier.appendChild(select);
    select.setAttribute("id","select");
          
           const optiondate = document.createElement('option');
           select.appendChild(optiondate);
           optiondate.setAttribute("value","date");
           optiondate.setAttribute("selected","");
           optiondate.textContent = "Date";

           const optionPopularite = document.createElement('option');
           select.appendChild(optionPopularite);
           optionPopularite.setAttribute("value","popularite");
           optionPopularite.textContent = "Popularite";

           const optionTitre = document.createElement('option');
           select.appendChild(optionTitre);
           optionTitre.setAttribute("value","titre");
           optionTitre.textContent = "Titre";*/

    const divButton = document.createElement('div');
    sectionTrier.appendChild(divButton);
    divButton.setAttribute("class","divbutton");

    const button = document.createElement('button');
    divButton.appendChild(button);
    button.setAttribute("class","boutontrie");
               
              const textButton = document.createElement('div');
              button.appendChild(textButton);
              textButton.textContent = "Date";
              textButton.setAttribute("tabindex","0");
              textButton.setAttribute("class","textbutton");

              const chevron = document.createElement('i');
              button.appendChild(chevron);
              chevron.setAttribute("class","fas fa-chevron-down");
              chevron.setAttribute("id","chevron");
              chevron.setAttribute("role","button");
              chevron.setAttribute("tabindex","0");
           

     const sousMenu = document.createElement('ul');
     divButton.appendChild(sousMenu);
     sousMenu.setAttribute("class","sousmenu");
    
            
            const divDateChevron = document.createElement('div');
            sousMenu.appendChild(divDateChevron);
            divDateChevron.setAttribute("class","divdatechevron");

                    const date = document.createElement('li');
                    divDateChevron.appendChild(date);
                    date.setAttribute("class","date");
                    date.setAttribute("role","option");
                    date.setAttribute("tabindex","0");
                    date.textContent = "Date";

                    const chevronUp = document.createElement('i');
                    divDateChevron.appendChild(chevronUp);
                    chevronUp.setAttribute("class","fas fa-chevron-up");
                    chevronUp.setAttribute("role","button");
                    chevronUp.setAttribute("tabindex","0");
                    
                    const lineUp = document.createElement('div');
                    sousMenu.appendChild(lineUp);
                    lineUp.setAttribute("class","lineup");

                    const popularite = document.createElement('li');
                    sousMenu.appendChild(popularite);
                    popularite.setAttribute("class","popularite");
                    popularite.setAttribute("role","option");
                    popularite.setAttribute("tabindex","0");
                    popularite.textContent = "Popularité";

                    const lineDown = document.createElement('div');
                    sousMenu.appendChild(lineDown);
                    lineDown.setAttribute("class","linedown");

                    const titres = document.createElement('li');
                    sousMenu.appendChild(titres);
                    titres.setAttribute("class","titre");
                    titres.setAttribute("role","option");
                    titres.setAttribute("tabindex","0");
                    titres.textContent = "Titre"; 

                    
           


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


                     