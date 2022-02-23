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


 /*     

       const newSelect = document.createElement('div');
       divSelect.appendChild(newSelect);
       newSelect.setAttribute("class","newselect"); 

       //donne le contenu de l'option actuellement choisi dans le select
       newSelect.innerHTML = select.options[select.selectedIndex].innerHTML;
       console.log(newSelect.innerHTML);

          const chevronDown = document.createElement('i');
          divSelect.appendChild(chevronDown);
          chevronDown.setAttribute("class","fas fa-chevron-down");
          chevronDown.setAttribute("tabindex","0");
     

         const newMenu = document.createElement('div');
         divSelect.appendChild(newMenu);
         newMenu.setAttribute("class","newmenu close");
            

            
            const newOptionDate = document.createElement('div');
            newMenu.appendChild(newOptionDate);
            // on copie le contenu de l'option
            newOptionDate.innerHTML = select.options[0].innerHTML;
            newOptionDate.setAttribute("class","new-option date");

            newOptionDate.addEventListener("click",function(){

             
             
                if(newOptionDate.innerHTML === optiondate.innerHTML) {
                    select.selectedIndex = optiondate.index;
                    newSelect.innerHTML = optiondate.innerHTML;
                    newSelect.click();
                    optiondate.click();
                
                }
               
            })
            
            
            
            
            const newOptionPopularite = document.createElement('div');
            newMenu.appendChild(newOptionPopularite);
             // on copie le contenu de l'option
            newOptionPopularite.innerHTML = select.options[1].innerHTML;
            newOptionPopularite.setAttribute("class","new-option popularite");
            newOptionPopularite.setAttribute("id","popularite");

            newOptionPopularite.addEventListener("click",function(){

                if(newOptionPopularite.innerHTML === optionPopularite.innerHTML) {
                    select.selectedIndex = optionPopularite.index;
                    newSelect.innerHTML = optionPopularite.innerHTML;
                    newSelect.click();
                    optionPopularite.click();
                    
                }
               
            })
            
            
            const newOptionTitre = document.createElement('div');
            newMenu.appendChild(newOptionTitre);
            // on copie le contenu de l'option
            newOptionTitre.innerHTML = select.options[2].innerHTML;
            newOptionTitre.setAttribute("class","new-option titre");

            newOptionTitre.addEventListener("click",function(){

                if(newOptionTitre.innerHTML === optionTitre.innerHTML) {
                    select.selectedIndex = optionTitre.index;
                    newSelect.innerHTML = optionTitre.innerHTML;
                    newSelect.click();
                    optionTitre.click();
                
                }
            })
            


          //ouvre le sous-menu
           newSelect.addEventListener("click",function(e) {
                // empeche la propagation du click
                e.stopPropagation();
                //retire la class "close" au newmenu
                newMenu.classList.toggle("close");
                //rotation du chevron
                chevronDown.classList.toggle("rotate");
                select.click();
                
                
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


                     