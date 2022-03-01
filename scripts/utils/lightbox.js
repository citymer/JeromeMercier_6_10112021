function lightbox(filterMedia) {

                
                   
    const contactModal = document.querySelector('#contact_modal');
    const lightbox = document.createElement('div');
    body.appendChild(lightbox);

    lightbox.setAttribute("class","lightbox");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
                 
    
    <div class="lightbox__container" >
          <i class="fas fa-chevron-left lightbox__prev" role="button" aria-label="prev" tabindex="0" ></i>
          <div class="mediacontent"> </div>
          <i class="fas fa-chevron-right lightbox__next " role="button" aria-label="next" tabindex="0"></i>
          <p class="lightbox__close" role="button" aria-label="close" tabindex="0"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#901c1c"/>
          </svg></p>
          
    </div>`;
    
    const mediaContent = document.querySelector('.mediacontent');



     // replace les balise FOOTER et DIV Lightbox dans le DOM
    document.body.insertBefore(lightbox,main);
    document.body.insertBefore(footer,contactModal);
    const selectMenu = document.getElementById('select');

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
    

    //buttonclose
    //buttonprev
    //buttonnext
    //enfant mediacontent
   
    // active le bouton close "X"
    buttonClose.addEventListener("click",function() {
        lightbox.classList.remove("show");
       
    }) 

  
    
    let i = 0;
    
    // function qui fait défiler les photos au click du bouton PREV
    buttonPrev.addEventListener('click', (e) => {
        e.preventDefault();
        prev();
    });
    
    // fait défiler les photos avec le bouton du clavier "<--"
    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowLeft") {
           prev();
        }
    })

    // function qui fait défiler les photos au click du bouton NEXT
    buttonNext.addEventListener('click', (e) => {
        e.preventDefault();
        next();
    })
    
    // fait défiler les photos avec le bouton du clavier "-->"
    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowRight") {
          next();
        }
    })

    function prev() {
        if(i <= 0) i = filterMedia.length;
        i--;
        return setImg(i);
    }
    

    function next() {
        if(i >= filterMedia.length - 1) i = -1;
            i++;
            return setImg(i);
    }

 // function qui attribut l'image a la lighbox
    function setImg(i) {

     const imgBox = document.querySelector('.lightbox__img');
     
     mediaContent.innerHTML = "";


       if (filterMedia[i].video === undefined) {

          // <img> LIGHBOX
          const lighboxImg = document.createElement('img');
          mediaContent.appendChild(lighboxImg);
          lighboxImg.setAttribute("alt",filterMedia[i].alt);
          lighboxImg.setAttribute("class","lightbox__img");
          lighboxImg.setAttribute("tabindex","0");
          lighboxImg.setAttribute("src",filterMedia[i].image);

          

           //titre img lightbox
          const titleImg = document.createElement('span');
          mediaContent.appendChild(titleImg);
          titleImg.setAttribute("class","titlemedia");
          titleImg.textContent = filterMedia[i].title;

     
        }else if(filterMedia[i].image == undefined) {

          // <video>  LIGHTBOX
         const lighboxVideo = document.createElement('video');
         mediaContent.appendChild(lighboxVideo); 
         lighboxVideo.setAttribute("class","lightbox__video");
         lighboxVideo.setAttribute("alt",filterMedia[i].alt);
         lighboxVideo.setAttribute("src",filterMedia[i].video);
         lighboxVideo.setAttribute("type","video/mp4");
         lighboxVideo.setAttribute("controls","");
         lighboxVideo.setAttribute("tabindex","0");
         
        }

      //titre video lightbox
        const titleVideo = document.createElement('span');
        mediaContent.appendChild(titleVideo);
        titleVideo.setAttribute("class","titlemedia");
        titleVideo.textContent = filterMedia[i].title;   
        
    }

    //  GARDE LE FOCUS A L INTERIEUR DE LA LIGHTBOX  //

// selectionne l'image de la lightbox
const focusImg = document.getElementsByClassName('lightbox__img');
//selectionne la video de la lightbox
const focusVideo = document.getElementsByClassName('lightbox__video');
//selectionne tous les éléments focusable
 const focusableElements = `${buttonClose},${buttonNext},${focusImg},${focusVideo},${buttonPrev},[tabindex]:not([tabindex="-1"])`;
 //selectionne la lightbox
 const selectLightbox = document.querySelector('#lightbox');
//premier éléments focusable
 const firstFocusableElememt = buttonPrev;
 //contenu de tous
 const focusableContent = focusableElements;
 
 const lastFocusableElement = buttonClose;

 document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab';
  
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElememt) {
          lastFocusableElement.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else { // if tab key is pressed
        if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElememt.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    });
    
    firstFocusableElememt.focus(); 
  

    
    
}
