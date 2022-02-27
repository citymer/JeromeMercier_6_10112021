function sortMedia(filterMedia) {
    
   
    const selectMenu = document.getElementById('select');

    selectMenu.addEventListener('change', function() {


     document.getElementById('divphoto').innerHTML = "";
     // classement alphabethique des titres
   //  const selectImg = document.querySelectorAll('.imgarticle');
   //  let allImg = [];
    // console.log(allImg);
        if (this.value == "titre") {

            filterMedia = filterMedia.sort((a, b) => {
               if (a.title < b.title) { return -1;}
               else {return 1;};
               
            });

            filterMedia.forEach((media) => {
            
                attachInformationMedia(media);
              /*  allImg.push(media)
                console.log(media);
                if (media.video === undefined) {
                    allImg.push(media.image);

                }else {
                    allImg.push(media.video);
                }*/
                
            })
     

         // classement des likes décroissant  
        } else if (this.value == "popularite") {

            let rangementLikes = filterMedia.sort((a, b) => {
               return b.likes - a.likes;

            }); 
   
            rangementLikes.forEach((media) => {
              attachInformationMedia(media);

        
              
            })

            // classement par date
        }else if (this.value == "date") {

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
            
        }


 /*       const buttonNext = document.querySelector('.lightbox__next');
        const buttonPrev = document.querySelector('.lightbox__prev');
        
        const buttonClose = document.querySelector('.lightbox__close');
        const lienphoto = document.querySelectorAll('.lienimage');
        const selectLightbox = document.querySelector('.lightbox');


  //on ajoute l'ecouteur click sur les liens
  for(let link of lienphoto) {
   link.addEventListener("click",function(e){

       // désactive le comportement des liens
       e.preventDefault();
       
       // affiche la lightbox
       selectLightbox.classList.add("show");
       
       // Ferme la lighbox avec boutton "Escape"
       window.addEventListener('keydown', function (e) {
           if (e.key === "Escape" || e.key === "Esc") {
               selectLightbox.classList.remove("show");
           };
       })
   })
}


// active le bouton close 
buttonClose.addEventListener("click",function(e) {
    e.preventDefault();
    selectLightbox.classList.remove("show");
   
}) 

          //selection des images 
   // const selectImg = document.querySelectorAll('.imgarticle');
    // tableau qui regroupe les src des images
   // let allImg = [];
    //console.log(allImg);

  //  for (let src of selectImg) {
   //     allImg.push(src)
   // }
    // emplacement de l'image dans la lighbox
    const imgBox = document.querySelector('.lightbox__img');
    
    let i = 1;
    
    // function qui fait défiler les photos au click du bouton PREV
    buttonPrev.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("eee");

        if(i <= 0) i = allImg.length;
        i--;
        return setImg(i);
        
    });
    
    // fait défiler les photos avec le bouton du clavier "<--"
    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowLeft") {
            if(i <= 0) i = allImg.length;
            i--;
            return setImg(i);
        }
    })
    
    // function qui fait défiler les photos au click du bouton NEXT
    buttonNext.addEventListener('click', (e) => {
        e.preventDefault();
        if(i >= allImg.length - 1) i = -1;
        i++;
        return setImg(i);
    })
    
    
    // fait défiler les photos avec le bouton du clavier "-->"
    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowRight") {
            if(i >= allImg.length - 1) i = -1;
            i++;
            return setImg(i);
        }
    })

    const mediaContent = document.querySelector('.mediacontent');

 // function qui attribut l'image a la lighbox
    function setImg(i) {
      
     const imgBox = document.querySelector('.lightbox__img');
     
     mediaContent.innerHTML = "";


       if (allImg[i].video === undefined) {

          // <img> LIGHBOX
          const lighboxImg = document.createElement('img');
          mediaContent.appendChild(lighboxImg);
          lighboxImg.setAttribute("class","lightbox__img");
          lighboxImg.setAttribute("alt",media.alt);
          lighboxImg.setAttribute("src",allImg[i]);
          console.log(filterMedia);

           //titre img lightbox
          const titleImg = document.createElement('span');
          mediaContent.appendChild(titleImg);
          titleImg.setAttribute("class","titlemedia");
          titleImg.textContent = media.title;
          console.log(media.title);

     
        }else if(media.image == undefined) {

          // <video>  LIGHTBOX
         const lighboxVideo = document.createElement('video');
         mediaContent.appendChild(lighboxVideo); 
         lighboxVideo.setAttribute("class","lightbox__video");
         lighboxVideo.setAttribute("alt",media[i].alt);
         lighboxVideo.setAttribute("src",allImg[i]);
         lighboxVideo.setAttribute("type","video/mp4");
         lighboxVideo.setAttribute("controls","");
        }

      //titre video lightbox
        const titleVideo = document.createElement('span');
        mediaContent.appendChild(titleVideo);
        titleVideo.setAttribute("class","titlemedia");
        titleVideo.textContent = media.title;   
        
    }*/
      });
      
   }
   
