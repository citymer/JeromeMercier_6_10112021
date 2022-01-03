

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
       
       //  retourne le tableau photographers seulement une fois
           return filterPhotographer,filterMedia;     

})

     .catch(function () {
         this.dataError = true;
    })   

}


// Récupère et affiche les informations des photographes
function attachInformationPhotograph(photographer) {
    

   const { name, portrait, city, country, tagline,alt,id} = this.filterPhotographer[0];
   
       const picture = `assets/photographers/${portrait}`;
       

          //selectionne header ***** creation du lien vers l'acceuil 
          const header = document.querySelector('header');
              const aLienAcceuil = document.createElement('a');
              aLienAcceuil.setAttribute("href","./index.html");

              const imgLogo = document.querySelector('.logo');

              header.appendChild(aLienAcceuil);
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
           
}  



        // DOM   SECTION trier

const main = document.getElementById('main');

const sectionTrier = document.createElement('section');
sectionTrier.id = 'filter';
main.appendChild(sectionTrier);

const label = document.createElement('label');
label.textContent = 'Trier par';
label.setAttribute("for","trier");
sectionTrier.appendChild(label);

const div = document.createElement('div');
div.setAttribute("class","navBar");
sectionTrier.appendChild(div);

  const ulMenu = document.createElement('ul');
  ulMenu.id = 'trier';
  div.appendChild(ulMenu);

    const liPopularite = document.createElement('li');
    liPopularite.setAttribute("class","popularite");
    ulMenu.appendChild(liPopularite);
    liPopularite.textContent = 'Popularité';

       const ul = document.createElement('ul');
       ul.setAttribute("class","sousmenu");
       liPopularite.appendChild(ul);

           const liDate = document.createElement('li');
           liDate.setAttribute("class","date");
           ul.appendChild(liDate);
           liDate.textContent = 'Date';

           const liTitre = document.createElement('li');
           liTitre.setAttribute("class","titre");
           ul.appendChild(liTitre);
           liTitre.textContent = 'Titre';
            
 const divPhoto = document.createElement('div');
 divPhoto.setAttribute("class","divphoto");
 main.appendChild(divPhoto);

// FUNCTION qui affiche les images des photographes ****************
function attachInformationMedia(media) {
    
    function getUserCardDOMmedia() {
         
        
        const articlePhoto = document.createElement('article');
        divPhoto.appendChild(articlePhoto);
        articlePhoto.setAttribute("class","imgphoto");
        
           const imgArticle = document.createElement('img');
           articlePhoto.appendChild(imgArticle);
           imgArticle.setAttribute("class","imgarticle");
           imgArticle.setAttribute("src",media.image);
           imgArticle.setAttribute("alt",media.alt);
        
        
           const divquantityheart = document.createElement('div');
           divquantityheart.setAttribute("class","quantityHeart");
           articlePhoto.appendChild(divquantityheart);
        
             const h5 = document.createElement('h5');
             divquantityheart.appendChild(h5);
             h5.textContent = media.title;
        
             const divspanHeart = document.createElement('div');
             divquantityheart.appendChild(divspanHeart);
             divspanHeart.setAttribute("class","divspanheart");
        
               let numberHeart = document.createElement('span');
               divspanHeart.appendChild(numberHeart);
               numberHeart.textContent = media.likes;
               numberHeart.setAttribute("class","nombrelike");
               
               const heart = document.createElement('i');
               divspanHeart.appendChild(heart);
               heart.setAttribute("class","fas fa-heart like-button");
               
               // COMPTEUR DE LIKES
               let compteur = media.likes;
               
               let numberSpan = document.querySelectorAll('.nombrelike');
            
               numberSpan.innerText = +numberHeart;

               heart.addEventListener('click',function(){
                   numberSpan++;
                   compteur++;
                   console.log(compteur);
                   compteur.innerText = +numberSpan;
               })
        
        return articlePhoto;
    } 

return { getUserCardDOMmedia }                 

}

// FUNCTION qui affiche la video des photographes   **********    
function attachInformationVideo(video) {
    
    const articleVideo = document.createElement('article');
    divPhoto.appendChild(articleVideo);
    
        const videoArticle = document.createElement('video');
        articleVideo.appendChild(videoArticle); 
        articleVideo.setAttribute("alt",video.alt);
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
    
                const numberHeartVideo = document.createElement('span');
                divSpanHearts.appendChild(numberHeartVideo);
                numberHeartVideo.textContent = video.likes;
                numberHeartVideo.setAttribute("class","nombrelike");
    
                const heartVideo = document.createElement('i');
                divSpanHearts.appendChild(heartVideo);
                heartVideo.setAttribute("class","fas fa-heart like-button");
    
}

async function displayData() {
    
    
    const divPhotoSelect = document.querySelector('.divphoto');
    attachInformationPhotograph();
    
    filterMedia.forEach((media) => {
        const mediaModel = attachInformationMedia(media);
        const userCardDOMmedia = mediaModel.getUserCardDOMmedia();
        divPhotoSelect.appendChild(userCardDOMmedia);
        
        if (media.image == undefined) {
            attachInformationVideo(media);
        }
    });
    
};


async function init() {
    
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
      // récupère les medias des photographes
      const media = await getPhotographers();
      
      displayData(filterMedia);

    };
    
  init();

  // DOM
  const body = document.querySelector('body');

     // FOOTER
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
               textNumber.setAttribute("class","textnumber");
               textNumber.textContent = "300";

               const iconHeartFooter = document.createElement('i');
               divTotalLikes.appendChild(iconHeartFooter);
               iconHeartFooter.setAttribute("class","fas fa-heart")

          const divPriceDay = document.createElement('div');
          divFooterInfo.appendChild(divPriceDay);
          divPriceDay.setAttribute("class","divpriceday");
               const textPriceDay = document.createElement('p');
               divPriceDay.appendChild(textPriceDay);
               textPriceDay.setAttribute("class","textpriceday");
               textPriceDay.textContent = "prix/jour";


// comptage like




/*let likePlus = document.querySelector('.like-button');


let nombreLike =  document.getElementById('nombrelike');
console.log(nombreLike);
let comptage = parseInt(nombreLike.innerText);

likePlus.addEventListener("click",function(){
    comptage = comptage+1;
    nombreLike.innerHTML = comptage;
});*/
