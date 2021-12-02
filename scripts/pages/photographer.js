//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {  
    
    const photographers = [];
    const media = [];

    fetch('data/photographers.json')

    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();  
        console.log(json)   
    })

    .then(json => {
        this.photographers = json.photographers;
        this.media = json.media;
    })

    .catch(function () {
        this.dataError = true;
    })  
    
    return ({
        photographers : [this.photographers],
        media : [this.media]
    })
}

async function init() {

    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

function photographerFactory(data) {

    const { name, portrait, city, country, tagline, price,alt,id,photographerId,title,image,likes,date} = data;

    const picture = `assets/photographers/${portrait}`;
    const image = ~assets/images/~

    function getUserCardDOM() {
        
     

        return (article);
    }
    return { getUserCardDOM }
}