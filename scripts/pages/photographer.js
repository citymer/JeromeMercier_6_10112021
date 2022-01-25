// Récupère tous les parametres des photographes dans le JSON  ***

  async function getPhotographers() {  

    // OBTENIR les parametres URL
    const getId = window.location.search;
    const urlParams = new URLSearchParams (getId);
    const idPhotograph = urlParams.get ('id');
 
    const filterPhotographer = [];
    const filterMedia = [];
    
    
    // rapatrie les données de photographers.json
    await fetch('data/photographers.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();  
    })
    
    //  données des photographes récupérées dans le json
    .then(json => {
        const {photographers} = json;
        const {media} = json;
  
        // filtre photographe avec id
        this.filterPhotographer = photographers.filter((photographer) => photographer.id == idPhotograph);
        
        // filtre media avec photographerId
        this.filterMedia = media.filter((media) => media.photographerId == idPhotograph);
    
        //  retourne le tableau photographers et media
    
        return filterPhotographer,filterMedia;     
        
    })
    
    
    .catch(function () {
        this.dataError = true;
    })   
    
}



// Récupère et affiche les informations des photographes dans la section photograph-header ***
function attachInformationPhotograph(photographers) {
    
    const { name, portrait, city, country, tagline,price,alt,id} = this.filterPhotographer[0];
    
    const picture = `assets/photographers/${portrait}`;
    
    //selectionne header ***** creation du lien vers l'acceuil (index.html)
    const header = document.querySelector('header');
    
    const aLienAcceuil = document.createElement('a');
       header.appendChild(aLienAcceuil);
       aLienAcceuil.setAttribute("href","./index.html");
       
       const imgLogo = document.querySelector('.logo');
       aLienAcceuil.appendChild(imgLogo);
    
    //SELECTIONNE la section "photograph-header" 
    const sectionPhotographHeader = document.getElementById('photograph-header');
    
      //création "article" qui contient "h2,h3,h4"
      const article = document.createElement('article');
      sectionPhotographHeader.appendChild(article); 
      article.id = id;
      article.innerHTML = `<h2>${name}</h2>
                           <h3>${city}, ${country}</h3>
                           <h4>${tagline}</h4>`;
  
    
    // selection du bouton "contact_button"   
    const button = document.querySelector('.contact_button');
    
    //creation d' img pour la photo de profil du photographe
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    img.setAttribute("alt",alt);
    
    //positionne article avant button dans HTML
    sectionPhotographHeader.prepend(article);
    sectionPhotographHeader.append(button); 
    sectionPhotographHeader.append(img);       
    
    //ECRIT le prix/jour dans le FOOTER
    const divPriceDay = document.createElement('div');
    divFooterInfo.appendChild(divPriceDay);
    divPriceDay.setAttribute("class","divpriceday");
    divPriceDay.innerHTML = `<p class="textpriceday">${price} €/jour</p>`; 

}  




 
    // FUNCTION qui affiche les images et textes des photographes  dans la DIV "divphoto" ****************
    
const mediaContent = function attachInformationMedia(media) {
        
            
            // <article>
            const articlePhoto = document.createElement('article');
            divPhoto.appendChild(articlePhoto);
            articlePhoto.setAttribute("class","imgphoto");

            // <a>
            const lienImage = document.createElement('a');
            articlePhoto.appendChild(lienImage);
            lienImage.setAttribute("class","lienimage");
            lienImage.setAttribute("href",media.image);
        
             
            if (media.video == undefined){
                
                // <img>
                const imgArticle = document.createElement('img');
                lienImage.appendChild(imgArticle);
                imgArticle.setAttribute("class","imgarticle");
                imgArticle.setAttribute("src",media.image);
                imgArticle.setAttribute("alt",media.alt);
                
                
            }else {
                
                // <video>
             const videoArticle = document.createElement('video');
             lienImage.appendChild(videoArticle); 
             videoArticle.setAttribute("class","imgarticle");
             videoArticle.setAttribute("alt",media.alt);
             videoArticle.setAttribute("src",media.video);
             videoArticle.setAttribute("type","video/mp4");
             videoArticle.setAttribute("controls","");
                
            } ; 
            


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
                    
                    
                    


            
            // COMPTEUR DE LIKES 
            
            heart.addEventListener('click',function(){
            
                const textNumber = document.querySelector('.totalnumber');
                textNumber.textContent = parseInt(textNumber.textContent)+1;
    
                // cible le span qui contient le nombre de like par son id 
                selectTextNumber = document.getElementById(media.id);
                selectTextNumber.textContent = parseInt(selectTextNumber.innerText)+1;
  
            }



            
            )}

            
 async function displayData() {
                
               // const divPhotoSelect = document.querySelector('#divphoto');
                
                
                attachInformationPhotograph();
                
                // créer un article pour chaque photo
                filterMedia.forEach((media) => {
                    
                    mediaContent(media);    
                    
                    
                });
                
            
                // COMPTEUR total de likes  //
                
                const selectSpan = document.querySelectorAll('.nombrelike'); 
                
                
                let somme = 0;
                this.filterMedia.forEach(function(media) {
                    somme += media.likes;
                })
                
                textNumber.textContent = somme;

       // classement des likes décroissant         

                let allLikes = [];
                console.log(allLikes);

            for (let likes of selectSpan) {
                allLikes.push(likes.innerText);
            }
         
      console.log(allLikes.sort((a, b) => {
          return b - a; }));


        // classement alphabethique des titres

        
        const titles = document.querySelectorAll('.titrephoto');

                  let allTitle = [];
                   console.log(allTitle);

            for (let title of titles) {
                allTitle.push(title.innerText);
              
            }      

            console.log(allTitle.sort((a, b) => {
                if (a < b) { return -1;}
                if (a > b) {return 1;}
                if (a === b) {return 0;}
            }));


         // classement par date

         let allDates = [];
         
         const date = this.filterMedia;
         console.log(date);
         for (let dates of date) {
             allDates.push(dates)
         }

                 //LIGHTBOX //******************************* */
     
        
       
     
        
        const contactModal = document.querySelector('#contact_modal');
        const lightbox = document.createElement('div');
        body.appendChild(lightbox);

        lightbox.setAttribute("class","lightbox");
        lightbox.innerHTML = `<button class="lightbox__close" ></button>
        <button class="lightbox__next" ></button>
        <button class="lightbox__prev"  ></button>
        <div class="lightbox__container">
        <img class="lightbox__img" src="" alt="">
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

                // ajoute l'image du lien cliqué dans la lightbox
                const image = lightbox.querySelector(".lightbox__container img");
                image.src = this.href;
                
                
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
        let allImg = [];
        console.log(allImg);
        for (let img of selectImg) {
            allImg.push(img.src)
        }
        // emplacement de l'image dans la lighbox
        const imgBox = document.querySelector('.lightbox__img');

        let i = 0;

        buttonPrev.addEventListener('click', () => {

            if(i <= 0) i = allImg.length;
            i--;
            return setImg();
        });
        
        buttonNext.addEventListener('click', () => {
            if(i >= allImg.length - 1) i = -1;
            i++;
            return setImg();
        })
        
    
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

              const date = document.createElement('a');
              liDate.appendChild(date);
              date.textContent = "Date";

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








