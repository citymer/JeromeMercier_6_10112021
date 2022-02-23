function lightbox(filterMedia) {

                
                   
    const contactModal = document.querySelector('#contact_modal');
    const lightbox = document.createElement('div');
    body.appendChild(lightbox);

    lightbox.setAttribute("class","lightbox");
    lightbox.innerHTML = `<button  role="button" aria-label="close"><img src="/assets/icons/close.svg"></button>
    <button class="lightbox__next" role="button" aria-label="next"></button>
    <button class="lightbox__prev" role="button" aria-label="prev"></button>
    <div class="lightbox__container">
          <div class="mediacontent"> </div>
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
            
            console.log(lienphoto);
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
    
    const mediaContent = document.querySelector('.mediacontent');
    // active le bouton close 
    buttonClose.addEventListener("click",function() {
        lightbox.classList.remove("show");
       
    }) 

    //selection des images 
    const selectImg = document.querySelectorAll('.imgarticle');
    // tableau qui regroupe les src des images
    let allImg = [];

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
    buttonNext.addEventListener('click', () => {
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

 

 // function qui attribut l'image a la lighbox
    function setImg(i) {

     const imgBox = document.querySelector('.lightbox__img');
     
     mediaContent.innerHTML = "";


       if (filterMedia[i].video === undefined) {

          // <img> LIGHBOX
          const lighboxImg = document.createElement('img');
          mediaContent.appendChild(lighboxImg);
          lighboxImg.setAttribute("class","lightbox__img");
          lighboxImg.setAttribute("alt",filterMedia[i].alt);
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
        }

      //titre video lightbox
        const titleVideo = document.createElement('span');
        mediaContent.appendChild(titleVideo);
        titleVideo.setAttribute("class","titlemedia");
        titleVideo.textContent = filterMedia[i].title;   
        
    }


   

}