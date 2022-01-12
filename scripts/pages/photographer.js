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
    article.id = id;
    
      const namePhotograph = document.createElement('h2');
      namePhotograph.textContent = `${name}`;
    
      const addressPhotograph = document.createElement('h3');
      addressPhotograph.textContent = `${city}, ${country}`;
    
      const taglinePhotograph = document.createElement('h4');
      taglinePhotograph.textContent = `${tagline}`;
    
    // selection du bouton "contact_button"   
    const button = document.querySelector('.contact_button');
    
    //creation d' img pour la photo de profil du photographe
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    img.setAttribute("alt",alt);
    
    // lien parent,enfant
    sectionPhotographHeader.appendChild(article); 
    sectionPhotographHeader.appendChild(img);
    article.appendChild(namePhotograph);
    article.appendChild(addressPhotograph);
    article.appendChild(taglinePhotograph);
    
    //positionne article avant button dans HTML
    sectionPhotographHeader.prepend(article);
    sectionPhotographHeader.append(button); 
    sectionPhotographHeader.append(img);       
    
    //ecrit le prix/jour dans le Footer
    const divPriceDay = document.createElement('div');
    divFooterInfo.appendChild(divPriceDay);
    divPriceDay.setAttribute("class","divpriceday");
    const textPriceDay = document.createElement('p');
    divPriceDay.appendChild(textPriceDay);
    textPriceDay.setAttribute("class","textpriceday");
    textPriceDay.textContent =  `${price}€/ jour`;
}  

//function allMedias() {
    
    // FUNCTION qui affiche les images et textes des photographes  dans la DIV "divphoto" ****************
    
    function attachInformationMedia(media) {
        
        
        function getUserCardDOMmedia() {
            
            
            const articlePhoto = document.createElement('article');
            divPhoto.appendChild(articlePhoto);
            articlePhoto.setAttribute("class","imgphoto");
            
            const lienImage = document.createElement('a');
            articlePhoto.appendChild(lienImage);
            lienImage.setAttribute("class","lienimage");
            lienImage.setAttribute("href",media.image);
            
            const imgArticle = document.createElement('img');
            lienImage.appendChild(imgArticle);
            imgArticle.setAttribute("class","imgarticle");
            imgArticle.setAttribute("src",media.image);
            imgArticle.setAttribute("alt",media.alt);
            
            
            const divquantityheart = document.createElement('div');
            divquantityheart.setAttribute("class","quantityHeart");
            articlePhoto.appendChild(divquantityheart);
            
            const titrePhoto = document.createElement('h5');
            divquantityheart.appendChild(titrePhoto);
            titrePhoto.textContent = media.title;
            
            const divspanHeart = document.createElement('div');
            divquantityheart.appendChild(divspanHeart);
            divspanHeart.setAttribute("class","divspanheart");
            
            let numberLikes = document.createElement('span');
            divspanHeart.appendChild(numberLikes);
            numberLikes.textContent = media.likes;
            numberLikes.setAttribute("class","nombrelike");
            
            const heart = document.createElement('i');
            divspanHeart.appendChild(heart);
            heart.setAttribute("class","fas fa-heart like-button");
            
            
            // COMPTEUR DE LIKES DES IMAGES
            
            let compteur = media.likes;
            numberLikes.innerText = +compteur;
            
            
            heart.addEventListener('click',function(){
                compteur++;
                
                // Récupère le nombre de like dans le DOM
                changeNumberlikes = numberLikes;
                
                // Remplace le nombre de like par le resultat du compteur
                changeNumberlikes.innerText = +compteur;
                
                selectTextNumber = document.querySelector('.textnumber');
                selectTextNumber.innerText = media.likes + compteur;
                
            })
            return articlePhoto;
        } 
        
        
        return { getUserCardDOMmedia }                 
        
    }
    // FUNCTION qui affiche la video des photographes   **** ATTACH INFORMATION VIDEO  ******  
    
    function attachInformationVideo(video) {
        
        
        const articleVideo = document.createElement('article');
        divPhoto.appendChild(articleVideo);
        articleVideo.setAttribute("class","imgphoto");
        
        const lienVideo = document.createElement('a');
        articleVideo.appendChild(lienVideo);
        lienVideo.setAttribute("class","lienimage");
        lienVideo.setAttribute("href",video.video);
        
        const videoArticle = document.createElement('video');
        lienVideo.appendChild(videoArticle); 
        videoArticle.setAttribute("class","imgarticle");
        videoArticle.setAttribute("alt",video.alt);
        videoArticle.setAttribute("src",video.video);
        videoArticle.setAttribute("type","video/mp4");
        videoArticle.setAttribute("controls","");
        
        const divTitleQuantityHearts = document.createElement('div');
        divTitleQuantityHearts.setAttribute("class","quantityHeart");
        articleVideo.appendChild(divTitleQuantityHearts);
        
        const titleVideo = document.createElement('h5');
        divTitleQuantityHearts.appendChild(titleVideo);
        titleVideo.textContent = video.title;
        
        const divSpanHearts = document.createElement('div');
        divTitleQuantityHearts.appendChild(divSpanHearts);
        divSpanHearts.setAttribute("class","divspanheart");
        
        const numberLikesVideo = document.createElement('span');
        divSpanHearts.appendChild(numberLikesVideo);
        numberLikesVideo.textContent = video.likes;
        numberLikesVideo.setAttribute("class","nombrelike");
        
        const heartVideo = document.createElement('i');
        divSpanHearts.appendChild(heartVideo);
        heartVideo.setAttribute("class","fas fa-heart like-button");
        heartVideo.setAttribute("role","button");
        
        
        // COMPTEUR de like des videos
        
        let compteur = video.likes;
        
        
        numberLikesVideo.innerText = +compteur;
        
        heartVideo.addEventListener('click',function(){
            compteur++
            
            // Récupère le nombre de like dans le DOM
            let changeNumberLikesVideo = numberLikesVideo;
            
            // Remplace le nombre de like par le resultat du compteur
            changeNumberLikesVideo.innerText = +compteur;
        })
    }
    
    
    async function displayData() {
        
        const divPhotoSelect = document.querySelector('.divphoto');
        
        attachInformationPhotograph();
        
        // créer un article pour chaque photo
        filterMedia.forEach((media) => {
            
            if (media.video == undefined){
                
                const mediaModel = attachInformationMedia(media);
                const userCardDOMmedia = mediaModel.getUserCardDOMmedia();
                divPhotoSelect.appendChild(userCardDOMmedia);
                
            }else {
                
                attachInformationVideo(media);
            }
            
            
        });
        
        
        
        
        // COMPTEUR TOTAL DE LIKES  //
        
        const {likes} = this.filterMedia[0];
        console.log(likes);
        const selectSpan = document.querySelectorAll('span');
        // console.log(selectSpan); 
        
        
        selectSpan.forEach(function(likes) {
            let allLikes = likes.innerText;
            
        })   
        
        //LIGHTBOX //

        const body = document.querySelector('body');
        const sheader = document.querySelector('header');
        const contactModal = document.querySelector('#contact_modal');
        const lightbox = document.createElement('div');
        body.appendChild(lightbox);

        lightbox.setAttribute("class","lightbox");
        lightbox.innerHTML = `<button class="lightbox__close" ></button>
        <button class="lightbox__next" ></button>
        <button class="lightbox__prev" ></button>
        <div class="lightbox__container">
        <img src="" alt="">
        </div>`

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
                
            })
        }
        
        // active le bouton close 
        buttonClose.addEventListener("click",function() {
            lightbox.classList.remove("show");
        })
        
        
    };
    
    
    async function init() {
        
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        // récupère les medias des photographes
        const media = await getPhotographers();
        
        displayData(filterMedia);
        
    };
    
    init();
    
//}




//allMedias();





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

const sousMenu = document.createElement('ul');
liDate.appendChild(sousMenu);
sousMenu.setAttribute("class","sousmenu");

const popularite = document.createElement('li');
sousMenu.appendChild(popularite);
const lienPopularite = document.createElement('a');
popularite.appendChild(lienPopularite);
lienPopularite.textContent = "Popularité";

const titre = document.createElement('li');
sousMenu.appendChild(titre);
const lienTitre = document.createElement('a');
titre.appendChild(lienTitre);
lienTitre.textContent = "Titre";    


// DOM section Divphoto  *******************   
const divPhoto = document.createElement('div');
divPhoto.setAttribute("class","divphoto");
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








