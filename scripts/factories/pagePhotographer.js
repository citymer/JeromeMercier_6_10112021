

 async function getPhotographers() {  

    //  données des photographes récupérées dans le json
    const photographers = [];
    // OBTENIR les parametres URL
    const getId = window.location.search;
    const urlParams = new URLSearchParams (getId);
    const idPhotograph = urlParams.get ('id');

    
    // rapatrie les données de photographers.json
    await fetch('data/photographers.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();  
    })
    .then(json => {
        this.photographers = json.photographers;
        const {photographers} = json;
        const {media} = json;
        
        // filtre photographe avec id
        const filterPhotographer = photographers.filter((photographer) => photographer.id == idPhotograph);
        console.log(filterPhotographer[0]);
        // filtre media avec photographerId
        const filterMedia = media.filter((media) => media.photographerId == idPhotograph);
        console.log(filterMedia);   
        
        const { name, portrait, city, country, tagline,alt,id} = filterPhotographer[0];
    
        const picture = `assets/photographers/${portrait}`;
        
            //selectionne la section "photograph-header"
            const sectionPhotographHeader = document.getElementById('photograph-header');
            console.log(sectionPhotographHeader);
            //création "article" qui contient "h2,h3,h4"
            const article = document.createElement('article');
            article.id = id;
            
               const h2 = document.createElement('h2');
               h2.textContent = `${name}`;
            
               const h3 = document.createElement('h3');
               h3.textContent = `${city}, ${country}`;
            
               const h4 = document.createElement('h4');
               h4.textContent = `${tagline}`;
            
            // selection du bouton "contact_button"   
            const button = document.querySelector('.contact_button');
            
            //creation d' img pour la photo de profil du photographe
            const img = document.createElement('img');
            img.setAttribute("src", picture);
            img.setAttribute("alt",alt);
            
            // lien parent,enfant
            sectionPhotographHeader.appendChild(article); 
            sectionPhotographHeader.appendChild(img);
            article.appendChild(h2);
            article.appendChild(h3);
            article.appendChild(h4);
            
            //positionne article avant button
            sectionPhotographHeader.prepend(article);
            sectionPhotographHeader.append(button); 
            sectionPhotographHeader.append(img);
            
        
            // SECTION trier
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
        
    // DIV contenant les photos et la video des photographes

    const divPhoto = document.createElement('div');
    divPhoto.setAttribute("class","divphoto");
    main.appendChild(divPhoto);
    
    const articlePhoto = document.createElement('article');
    divPhoto.appendChild(articlePhoto);
    
    
          const imgArticle = document.createElement('img');
          articlePhoto.appendChild(imgArticle);
          imgArticle.setAttribute("class","imgarticle");
    
          
          const divquantityheart = document.createElement('div');
          divquantityheart.setAttribute("class","quantityHeart");
          articlePhoto.appendChild(divquantityheart);
          
               const h5 = document.createElement('h5');
               divquantityheart.appendChild(h5);
               h5.textContent = "Lonesome";
    
               const span = document.createElement('span');
               divquantityheart.appendChild(span);
               span.textContent = "82";
          
               const i = document.createElement('i');
               divquantityheart.appendChild(i);

          
    })
    
    .catch(function () {
        this.dataError = true;
    })   
    
    //  retourne le tableau photographers seulement une fois
    return ({photographer:[...this.photographers] });
}

async function displayData(photographers) {

   

    
        const photographerModel = photographerFactory2(photographers);
        const userCardDOM = photographerModel.getUserCardDOM();
        //sectionPhotographHeader.appendChild(userCardDOM);
    
};
   async function init() {

       // Récupère les datas des photographes
       const { photographers } = await getPhotographers();
       displayData(photographers);
   };
   
   init();
