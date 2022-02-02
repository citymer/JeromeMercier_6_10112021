//*****************************  DOM ********************************************************************

const body = document.querySelector('body');


// DOM   SECTION trier avec menu déroulant  ****************

const main = document.getElementById('main');

const sectionTrier = document.createElement('section');
sectionTrier.id = 'filter';
main.appendChild(sectionTrier);


    const label = document.createElement('label');
    label.textContent = 'Trier par';
    label.setAttribute("for","trier");
    label.setAttribute("class","trierpar"),
    sectionTrier.appendChild(label);

    const nav = document.createElement('nav');
    sectionTrier.appendChild(nav);

       const ul = document.createElement('ul');
       nav.appendChild(ul);
       ul.setAttribute("class" , "menu");

          const liDate = document.createElement('li');
          ul.appendChild(liDate);
          liDate.setAttribute("class","lidate");

              const date = document.createElement('a');
              liDate.appendChild(date);
              date.textContent = "Date";
              date.setAttribute("class","date");

              const chevron = document.createElement('i');
              liDate.appendChild(chevron);
              chevron.setAttribute("class","fas fa-chevron-down");
              chevron.setAttribute("id","chevron");

              const sousMenu = document.createElement('ul');
              liDate.appendChild(sousMenu);
              sousMenu.setAttribute("class","sousmenu");

                    const popularite = document.createElement('li');
                    sousMenu.appendChild(popularite);
                    popularite.setAttribute("class","popularite");

                        const lienPopularite = document.createElement('a');
                        popularite.appendChild(lienPopularite);
                        lienPopularite.textContent = "Popularité";

                    const titre = document.createElement('li');
                    sousMenu.appendChild(titre);
                    titre.setAttribute("class","titre");

                        const lienTitre = document.createElement('a');
                        titre.appendChild(lienTitre);
                        lienTitre.textContent = "Titre";    


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

        const textNumber = document.createElement('p');
        divTotalLikes.appendChild(textNumber);
        textNumber.setAttribute("class","textnumber totalnumber");
        textNumber.textContent = "";

        const iconHeartFooter = document.createElement('i');
        divTotalLikes.appendChild(iconHeartFooter);
        iconHeartFooter.setAttribute("class","fas fa-heart");


                     