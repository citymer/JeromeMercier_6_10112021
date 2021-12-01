
    
        
        fetch('data/photographers.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
             }
             return response.json();  
         })
         .then(json => {
             const dataphotographers = json;
             console.log(dataphotographers);
             const pho = dataphotographers.photographers;
             const mimi = pho[0];
             const ellie = pho[1];
             const tracy = pho[2];
             const nabeel = pho[3];
             const rhode = pho[4];
             const marcel = pho[5];
    
             class profils {
                 constructor(name,id,city,country,tagline,price,portrait,alt){
                     this.name = name;
                     this.id = id;
                     this.city = city;
                     this.country = country;
                     this.tagline = tagline;
                     this.price = price;
                     this.portrait = portrait;
                     this.alt = alt;
                 }
             }  
             
             const mimiKeel = new profils(mimi.name,mimi.id,mimi.city,mimi.country,mimi.tagline,mimi.price,mimi.portrait,mimi.alt);
             const ellieRose = new profils(ellie.name,ellie.id,ellie.city,ellie.country,ellie.tagline,ellie.price,ellie.portrait,ellie.alt)
             
              console.log(mimiKeel);
              console.log(ellieRose);
         
    })
    .catch(function () {
    this.dataError = true;
    }) 
    
       
       
       async function getPhotographers() {
           

        //  données récupérées dans le json
       const photographers = [{
        "name": "Mimi Keel",
        "id": 243,
        "city": "London",
        "country": "UK",
        "tagline": "Voir le beau dans le quotidien",
        "price": 400,
        "portrait": "MimiKeel.jpg",
        "alt": "portrait de Mimi Keel"
    }];
   
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
   