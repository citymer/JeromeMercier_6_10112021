
    
       
 async function getPhotographers() {  

     //  données des photographes récupérées dans le json
     const photographers = [];

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
           
              })
     .catch(function () {
             this.dataError = true;
             })   

        //  retourne le tableau photographers seulement une fois
        return ({
            photographers: [...this.photographers]})
    }

    async function displayData(photographers) {
        

        const photographersSection = document.querySelector(".photographer_section");
        
        // fabrique un article pour tous les  photographes
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {

        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
   