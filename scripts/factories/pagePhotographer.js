

 async function getPhotographers() {  

    //  données des photographes récupérées dans le json
   // const photographers = [];
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
        //this.photographers = json.photographers;
        const {photographers} = json;
        const {media} = json;
        
        // filtre photographe avec id
        const filterPhotographer = photographers.filter((photographer) => photographer.id == idPhotograph);
        console.log(filterPhotographer);
        // filtre media avec photographerId
        const filterMedia = media.filter((media) => media.photographerId == idPhotograph);
        console.log(filterMedia);   
        
        const sectionPhotographHeader = document.getElementById('photograph-header');
        console.log(sectionPhotographHeader);

        sectionPhotographHeader.innerhtml = getUserCardDOM();
    })
    
    .catch(function () {
        this.dataError = true;
    })   
    
    //  retourne le tableau photographers seulement une fois
    return {getPhotographers };
}

async function displayData(photographers) {

    //const sect = document.querySelector(".photographer_section");

    
        const photographerModel = photographerFactory2(photographers);
        const userCardDOM = photographerModel.getUserCardDOM();
        sectionPhotographHeader.appendChild(userCardDOM);
    
};
   async function init() {

       // Récupère les datas des photographes
       const { photographers } = await getPhotographers();
       //displayData(photographers);
   };
   
   init();
