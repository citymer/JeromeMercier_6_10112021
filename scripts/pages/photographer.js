            
            
async function displayData(filterMedia) {
                
    
    attachInformationPhotograph();
    
    
                // créer un article pour chaque photo
                filterMedia.forEach((media) => {
                    
                    attachInformationMedia(media); 
                       
                    
                    
                    
                });

                      // classement des likes décroissant    
                popularite.addEventListener('click', (e) => {

                   console.log( filterMedia.sort((a, b) => {
                        return b.likes - a.likes;
                    })); 
                })

                // classement alphabethique des titres
                     
               titre.addEventListener('click', (e) => {

                 console.log(filterMedia.sort((a, b) => {
                        if (a.title < b.title) { return -1;}
                        if (a.title > b.title) {return 1;}
                        if (a.title === b.title) {return 0;}
                    }));
                              
                });
                                 
                // classement par date
                
               liDate.addEventListener('click', (e) => {
       
                 console.log(filterMedia.sort((a, b) => {
                     return a.date - b.date;
                   }));
               })   
                
            
    
                // COMPTEUR total de likes  //
                
                const selectSpan = document.querySelectorAll('.nombrelike'); 
                
                
                let somme = 0;
                this.filterMedia.forEach(function(media) {
                    somme += media.likes;
                })
                
                textNumber.textContent = somme;




        



  //LIGHTBOX //******************************* */
     
        
        const contactModal = document.querySelector('#contact_modal');
        const lightbox = document.createElement('div');
        body.appendChild(lightbox);

        lightbox.setAttribute("class","lightbox");
        lightbox.innerHTML = `<button class="lightbox__close" ></button>
        <button class="lightbox__next" ></button>
        <button class="lightbox__prev"  ></button>
        <div class="lightbox__container">
        </div>`;

        const lighboxContent = document.querySelector('.lightbox__container');
    

         // replace les balise FOOTER et DIV Lightbox dans le DOM
        document.body.insertBefore(lightbox,main);
        document.body.insertBefore(footer,contactModal);

        const buttonNext = document.querySelector('.lightbox__next');
        const buttonPrev = document.querySelector('.lightbox__prev');
        const buttonClose = document.querySelector('.lightbox__close');
        const lienphoto = document.querySelectorAll('.lienimage');
        
        //on ajoute l'ecouteur click sur les liens
        for(let link of lienphoto) {
            link.addEventListener("click",function(e){
                
                // désactive le comportement des liens
                e.preventDefault();
                
                // affiche la lightbox
                lightbox.classList.add("show");
                
                // Ferme la lighbox avec boutton "Escape"
                window.addEventListener('keydown', function (e) {
                    if (e.key === "Escape" || e.key === "Esc") {
                        lightbox.classList.remove("show");
                    };
                })
            })
        }
        
        // active le bouton close 
        buttonClose.addEventListener("click",function() {
            lightbox.classList.remove("show");

        }) 

        //selection des images 
        const selectImg = document.querySelectorAll('article img');
        // tableau qui regroupe les src des images
        let allImg = [];
    
        for (let img of selectImg) {
            allImg.push(img.src)
        }
        // emplacement de l'image dans la lighbox
        const imgBox = document.querySelector('.lightbox__img');

        let i = 0;

        // function qui fait défiler les photos au click du bouton PREV
        buttonPrev.addEventListener('click', () => {

            if(i <= 0) i = allImg.length;
            i--;
            return setImg();
        });
        
        // fait défiler les photos avec le bouton du clavier "<--"
        window.addEventListener('keydown', function (e) {
            if (e.key === "ArrowLeft") {
                if(i <= 0) i = allImg.length;
                i--;
                return setImg();
            }
        })
        
        // function qui fait défiler les photos au click du bouton NEXT
        buttonNext.addEventListener('click', () => {
            if(i >= allImg.length - 1) i = -1;
            i++;
            return setImg();
        })
        
        // fait défiler les photos avec le bouton du clavier "-->"
        window.addEventListener('keydown', function (e) {
            if (e.key === "ArrowRight") {
                if(i >= allImg.length - 1) i = -1;
                i++;
                return setImg();
            }
        })
        
     // function qui attribut l'image a la lighbox
        function setImg() {
            return imgBox.setAttribute('src',allImg[i]);
        }
        
};

    


   
  
    
async function init() {


    const body = document.querySelector('body');
    const lightbox = document.createElement('div');
    body.appendChild(lightbox);

    lightbox.setAttribute("class","lightbox");
    lightbox.innerHTML = `<button class="lightbox__close" ></button>
    <button class="lightbox__next" ></button>
    <button class="lightbox__prev"  ></button>
    <div class="lightbox__container">
    </div>`;


        
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        // récupère les medias des photographes
        const media = await getPhotographers();
        
        displayData(filterMedia);
     
         
};
    
    init();


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


// appartion sous-menu

ul.addEventListener('click', (e) => {
    if ( sousMenu.style.display == "none") {
        sousMenu.style.display = "block";
       
        
    }else {

        sousMenu.style.display = "none";
    } 
})                      




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








