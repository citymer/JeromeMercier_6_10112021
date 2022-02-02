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
           
                
               if (media.video == undefined){
   
                   // <img>
                   imgArticle = document.createElement('img');
                   lienImage.appendChild(imgArticle);
                   imgArticle.setAttribute("class","imgarticle");
                   imgArticle.setAttribute("src",media.image);
                   imgArticle.setAttribute("alt",media.alt);
                   
                   
                      imgArticle.addEventListener('click', () => {
                       
                       const lighboxContent = document.querySelector('.mediacontent');
                        lighboxContent.innerHTML = "";
                       // <img> LIGHBOX
                       const lighboxImg = document.createElement('img');
                       lighboxContent.appendChild(lighboxImg);
                       lighboxImg.setAttribute("class","lightbox__img");
                       lighboxImg.setAttribute("alt",media.alt);
                      lighboxImg.setAttribute("src",media.image);
                      //titre img lightbox
                      const titleImg = document.createElement('h6');
                      lighboxContent.appendChild(titleImg);
                      titleImg.textContent = media.title;
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
   
                   videoArticle.addEventListener('click', () => {
   
                   const lighboxContent = document.querySelector('.mediacontent');
                 lighboxContent.innerHTML ="";
                      // <video>  LIGHTBOX
                     const lighboxVideo = document.createElement('video');
                     lighboxContent.appendChild(lighboxVideo); 
                     lighboxVideo.setAttribute("class","lightbox__video");
                     lighboxVideo.setAttribute("alt",media.alt);
                     lighboxVideo.setAttribute("src",media.video);
                     lighboxVideo.setAttribute("type","video/mp4");
                     lighboxVideo.setAttribute("controls","");
                       //titre video lightbox
                       const titleVideo = document.createElement('h6');
                       lighboxContent.appendChild(titleVideo);
                       titleVideo.textContent = media.title;
   
                })
               
               }; 
               
   
   
               // <div>
               const divquantityheart = document.createElement('div');
               divquantityheart.setAttribute("class","quantityHeart");
               articlePhoto.appendChild(divquantityheart);
                   
                  // <h5>
                  const titrePhoto = document.createElement('h5');
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
                       heart.setAttribute("data-value",media.likes);
                       heart.setAttribute("role","button");
                       
   
   
               
               // COMPTEUR DE LIKES 
               
               heart.addEventListener('click',function(){
               
                   const textNumber = document.querySelector('.totalnumber');
                   textNumber.textContent = parseInt(textNumber.textContent)+1;
       
                   // cible le span qui contient le nombre de like par son id 
                   selectTextNumber = document.getElementById(media.id);
                   selectTextNumber.textContent = parseInt(selectTextNumber.innerText)+1;
     
               })

              
         
            
                    
               
   }