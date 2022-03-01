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

    const divSelect = document.createElement('div');
    sectionTrier.appendChild(divSelect);
    divSelect.setAttribute("class","divselect");

      const select = document.createElement('select');
      divSelect.appendChild(select);
      select.setAttribute("id","select");
      
          
           const optiondate = document.createElement('option');
           select.appendChild(optiondate);
           optiondate.setAttribute("value","date");
           optiondate.setAttribute("class","new-option-date")
           optiondate.setAttribute("selected","");
           optiondate.textContent = "Date";

           const optionPopularite = document.createElement('option');
           select.appendChild(optionPopularite);
           optionPopularite.setAttribute("value","popularite");
           optionPopularite.setAttribute("id","popularite");
           optionPopularite.setAttribute("class","new-option-popularite");
           optionPopularite.textContent = "Popularite";

           const optionTitre = document.createElement('option');
           select.appendChild(optionTitre);
           optionTitre.setAttribute("value","titre");
           optionTitre.setAttribute("class","new-option-titre");
           optionTitre.setAttribute("id","titre");
           optionTitre.textContent = "Titre";



                    
           


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


                     