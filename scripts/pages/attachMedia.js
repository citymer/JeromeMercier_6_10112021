   // FUNCTION qui affiche les images et textes des photographes  dans la DIV "divphoto" ****************
    
   function attachInformationMedia(media) {

    let imgArticle;
    let videoArticle;
               
    
   
        // <article>
       const articlePhoto = document.createElement('article');
       divPhoto.appendChild(articlePhoto);
       articlePhoto.setAttribute("class","imgphoto");
           
           
           // <a>
           const lienImage = document.createElement('a');
           articlePhoto.appendChild(lienImage);
           lienImage.setAttribute("class","lienimage");
           lienImage.setAttribute("href",media.image);   
           lienImage.setAttribute("title",media.title);
           lienImage.setAttribute("aria-label",media.alt);
     
           if (media.image === undefined) {
                lienImage.setAttribute("href",media.video);
            } 

        
               if (media.video == undefined){
   
                   // <img>
                   imgArticle = document.createElement('img');
                   lienImage.appendChild(imgArticle);
                   imgArticle.setAttribute("class","imgarticle");
                   imgArticle.setAttribute("src",media.image);
                   imgArticle.setAttribute("alt",media.alt);
                   
 
   
                   //ouvre la lightbox au clic de l'article
                      imgArticle.addEventListener('click', (e) => {
                          e.preventDefault();
                
                         const lighboxContent = document.querySelector('.mediacontent');
                         lighboxContent.innerHTML = "";

                          // <img> LIGHBOX
                         const lighboxImg = document.createElement('img');
                         lighboxContent.appendChild(lighboxImg);
                         lighboxImg.setAttribute("class","lightbox__img");
                         lighboxImg.setAttribute("tabindex","0");
                         lighboxImg.setAttribute("alt",media.alt);
                         lighboxImg.setAttribute("src",media.image);
                      
                         //titre img lightbox
                         const titleImg = document.createElement('span');
                         lighboxContent.appendChild(titleImg);
                         titleImg.setAttribute("class","titlemedia");
                         titleImg.textContent = media.title;
                         //ouvre la lightbox
                         document.querySelector('.lightbox').classList.add("show");
                      
                        }) 
              
            
                   
               }else  {
                   
                   // <video>
                   videoArticle = document.createElement('video');
                   lienImage.appendChild(videoArticle); 
                   videoArticle.setAttribute("class","imgarticle");
                   videoArticle.setAttribute("alt",media.alt);
                   videoArticle.setAttribute("src",media.video);
                   videoArticle.setAttribute("type","video/mp4");
                   videoArticle.setAttribute("controls","");
   
                  videoArticle.addEventListener('click', (e) => {
                    e.preventDefault();

                   const lighboxContent = document.querySelector('.mediacontent');

                    lighboxContent.innerHTML ="";

                      // <video>  LIGHTBOX
                     const lighboxVideo = document.createElement('video');
                     lighboxContent.appendChild(lighboxVideo); 
                     lighboxVideo.setAttribute("class","lightbox__img");
                     lighboxVideo.setAttribute("alt",media.alt);
                     lighboxVideo.setAttribute("src",media.video);
                     lighboxVideo.setAttribute("type","video/mp4");
                     lighboxVideo.setAttribute("controls","");
                     lighboxVideo.setAttribute("tabindex","0");
                       //titre video lightbox
                       const titleVideo = document.createElement('span');
                       lighboxContent.appendChild(titleVideo);
                       titleVideo.setAttribute("class","titlemedia");
                       titleVideo.textContent = media.title;
                       //ouvre la lightbox
                       document.querySelector('.lightbox').classList.add("show");
                       
                       
                })
                
               }; 
               
   
   
               // <div>
               const divquantityheart = document.createElement('div');
               divquantityheart.setAttribute("class","quantityHeart");
               articlePhoto.appendChild(divquantityheart);
                   
                  // <h5>
                  const titrePhoto = document.createElement('h6');
                  divquantityheart.appendChild(titrePhoto);
                  titrePhoto.setAttribute("class","titrephoto");
                  titrePhoto.textContent = media.title;
                   
                  // <div>
                  const divspanHeart = document.createElement('div');
                  divquantityheart.appendChild(divspanHeart);
                  divspanHeart.setAttribute("class","divspanheart");
                       // <span>
                       const numberLikes = document.createElement('span');
                       divspanHeart.appendChild(numberLikes);
                       numberLikes.textContent = media.likes;
                       numberLikes.setAttribute("id",media.id);
                       numberLikes.setAttribute("class","nombrelike");
                        
                       // <i>
                       const heart = document.createElement('i');
                       divspanHeart.appendChild(heart);
                       heart.setAttribute("class","fas fa-heart like-button");
                       heart.setAttribute("aria-label","likes");
                       heart.setAttribute("role","button");
                       heart.setAttribute("tabindex","0");

                   
               
                       // COMPTEUR DE LIKES 
                                 
                       heart.addEventListener('click',function(e){
                              e.preventDefault();   
                          const textNumber = document.querySelector('.totalnumber');
                          textNumber.textContent = parseInt(textNumber.textContent)+1;
                       
                          // cible le span qui contient le nombre de like par son id 
                          selectTextNumber = document.getElementById(media.id);
                          selectTextNumber.textContent = parseInt(selectTextNumber.innerText)+1;

                        }) 

                        // compteur de like au clavier
                        heart.addEventListener('keydown', function(e) {
                           if (e.key === "Enter") {
                              const textNumber = document.querySelector('.totalnumber');
                              textNumber.textContent = parseInt(textNumber.textContent)+1;
                           
                              // cible le span qui contient le nombre de like par son id 
                              selectTextNumber = document.getElementById(media.id);
                              selectTextNumber.textContent = parseInt(selectTextNumber.innerText)+1;
                           }
                       
                       })
          
         
                       
}

