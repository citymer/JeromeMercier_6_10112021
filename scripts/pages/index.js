
      fetch('data/photographers.json')
       .then(response => {
           if (!response.ok) {
               throw new Error("HTTP error " + response.status);
           }
           return response.json();  
       })
       .then(json => {
           this.users = json;
           
           console.log(this.users);
       })
       .catch(function () {
           this.dataError = true;
       }) 
       console.log(this.dataError)

async function getPhotographers() {
              
        //  données récupérées dans le json
       const photographers = [];
   
        //  retourne le tableau photographers seulement une fois
        return ({
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

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
   