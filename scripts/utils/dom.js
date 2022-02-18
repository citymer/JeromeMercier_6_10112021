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
      select.setAttribute("class","newselect");
          
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


            let selectElem = document.getElementById('select');
            let popularite = document.getElementById('popularite');
            selectElem.addEventListener('change', function() {
                let index = selectElem.selectedIndex;
                popularite.innerHTML = select.options[select.selectedIndex];
            })
       const newSelect = document.createElement('div');
       divSelect.appendChild(newSelect);
       newSelect.setAttribute("class","newselect"); 

          const chevronDown = document.createElement('i');
          divSelect.appendChild(chevronDown);
          chevronDown.setAttribute("class","fas fa-chevron-down");
          chevronDown.setAttribute("tabindex","0");
     

         const newMenu = document.createElement('div');
         divSelect.appendChild(newMenu);
         newMenu.setAttribute("class","newmenu close");
            
            //donne le contenu de l'option actuellement choisi dans le select
            newSelect.innerHTML = select.options[select.selectedIndex].innerHTML;

            
            const newOptionDate = document.createElement('div');
            newMenu.appendChild(newOptionDate);
            // on copie le contenu de l'option
            newOptionDate.innerHTML = select.options[0].innerHTML;
            newOptionDate.setAttribute("class","new-option-date")
            
            
            
            const newOptionPopularite = document.createElement('div');
            newMenu.appendChild(newOptionPopularite);
             // on copie le contenu de l'option
            newOptionPopularite.innerHTML = select.options[1].innerHTML;
            newOptionPopularite.setAttribute("class","new-option-popularite");
           
            newOptionPopularite.setAttribute("id","popularite");
            
            
            const newOptionTitre = document.createElement('div');
            newMenu.appendChild(newOptionTitre);
            // on copie le contenu de l'option
            newOptionTitre.innerHTML = select.options[2].innerHTML;
            newOptionTitre.setAttribute("class","new-option-titre");
           


          /*  newMenu.addEventListener("click",function(){
                for (let option of select.options){
                    console.log(option);
                    
                    if (option.innerHTML === newMenu.innerText){
                        select.selectedIndex = option.index;
                        console.log(select.selectedIndex);
                        
                        break;
                    }
                }
            })
                */
        

                    
           


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


                     