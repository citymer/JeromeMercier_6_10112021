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