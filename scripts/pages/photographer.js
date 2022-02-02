            
            
async function displayData(filterMedia) {
                
    
    attachInformationPhotograph();
    
    
                // créer un article pour chaque photo
                filterMedia.forEach((media) => {
                    
                    attachInformationMedia(media);     
                    
                });



                      // classement des likes décroissant    
                popularite.addEventListener('click', (e) => {
                     
                    let rangementLikes = filterMedia.sort((a, b) => {
                         return b.likes - a.likes;

                    }); 
                
                    document.getElementById('divphoto').innerHTML = "";
                    rangementLikes.forEach((media) => {
                        attachInformationMedia(media);
                    })
                })

                // classement alphabethique des titres
                     
               titre.addEventListener('click', (e) => {

                 let classementAlphabethique = filterMedia.sort((a, b) => {
                        if (a.title < b.title) { return -1;}
                        if (a.title > b.title) {return 1;}
                        if (a.title === b.title) {return 0;}
                    });
                    
                    document.getElementById('divphoto').innerHTML ="";
                    classementAlphabethique.forEach((media) => {
                        attachInformationMedia(media);
                    })
                });
                                 
                // classement par date
                
               liDate.addEventListener('click', (e) => {
       
                 let classementParDate = filterMedia.sort((a, b) => {
                     return a.date - b.date;
                   });

                   document.getElementById('divphoto').innerHTML="";
                   classementParDate.forEach((media) => {
                       attachInformationMedia(media);
                   })
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
                        <div class="lightbox__container"><div class="mediacontent"></div>
                        </div>`;
                
                       // const lighboxContent = document.querySelector('.lightbox__container');
                    
                
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
                        const selectImg = document.querySelectorAll('.imgarticle');
                        // tableau qui regroupe les src des images
                        let allImg = [];
                        console.log(allImg);
                        for (let src of selectImg) {
                            allImg.push(src)
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


    

        
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        // récupère les medias des photographes
        const media = await getPhotographers();
        
        displayData(filterMedia);
     
         
};
    
    init();





// appartion sous-menu

ul.addEventListener('click', (e) => {
    if ( sousMenu.style.display == "none") {
        sousMenu.style.display = "block";
       
        
    }else {

        sousMenu.style.display = "none";
    } 
})                      










