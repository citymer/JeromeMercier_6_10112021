            
            
async function displayData(filterMedia) {
                
    
    attachInformationPhotograph();
    
    
                // créer un article pour chaque photo
                filterMedia.forEach((media) => {
                    
                    attachInformationMedia(media);     
                    
                });


               

          
                
            
    
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
                        lightbox.innerHTML = `<button class="lightbox__close" role="button" aria-label="close"></button>
                        <button class="lightbox__next" role="button" aria-label="next"></button>
                        <button class="lightbox__prev" role="button" aria-label="prev"></button>
                        <div class="lightbox__container"><div class="mediacontent"></div>
                        </div>`;
                
                    
                
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
                        function setImg(filterMedia) {

                     
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




            // classement des likes décroissant   
    
           newOptionPopularite.addEventListener('click', () => {
                document.getElementById('divphoto').innerHTML = "";
                     
                let rangementLikes = filterMedia.sort((a, b) => {
                     return b.likes - a.likes;

                }); 
            
                rangementLikes.forEach((media) => {
                    attachInformationMedia(media);
                })

                newSelect.innerHTML = "Popularite";
                newMenu.style.display = "none";
                newSelect.style.display = "block";
                chevronDown.style.display = "block";

            })

            // classement alphabethique des titres
                 
           newOptionTitre.addEventListener('click', () => {
               document.getElementById('divphoto').innerHTML = "";

             let classementAlphabethique = filterMedia.sort((a, b) => {
                    if (a.title < b.title) { return -1;}
                    if (a.title > b.title) {return 1;}
                    return 0;
                });
                
                classementAlphabethique.forEach((media) => {
                    attachInformationMedia(media);
                })

                newSelect.innerHTML = "Titre";
                newMenu.style.display = "none";
                newSelect.style.display = "block";
                chevronDown.style.display = "block";
                
            });
                             
            // classement par date
            
          newOptionDate.addEventListener('click', () => {
               
                 document.getElementById('divphoto').innerHTML= "";
   
             let classementParDate = filterMedia.sort((a, b) => {
                 let aDate = a.date;
                 let bDate = b.date;

                 if (aDate < bDate) {
                    return -1;
                } else if (aDate == bDate) {
                    return 0;
                } else {
                    return 1;
                }
                
               });
               classementParDate.forEach((media) => {
                   attachInformationMedia(media);
               })

               newSelect.innerHTML = "Date";
               newMenu.style.display = "none";
               newSelect.style.display = "block";
               chevronDown.style.display = "block";
             
           })   


// apparition du sous-menu
chevronDown.addEventListener('click', () => {

        newMenu.style.display = "block";
        newSelect.style.display = "none";
        chevronDown.style.display = "none";   
 
}) 

// fermeture du sous-menu en cliquant sur le chevron
chevronUp.addEventListener('click', () => {

    newMenu.style.display = "none";
    newSelect.style.display = "block";
    chevronDown.style.display = "block";
    
})

/*
// ouvre le sous-menu en valider avec la touche ENTER du clavier
window.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            sousMenu.style.display = "block";
            button.style.display = "none";

        }
    })


})
*/
        
 
 