//Mettre le code JavaScript lié à la page photographer.html
const article = document.querySelector('article');
const h2 = document.createElement('h2');
h2.textContent = 'Mimi Keel';
const h3 = document.createElement('h3');
h3.textContent = 'London, UK';
const h4 = document.createElement('h4');
h4.textContent = 'Voir le beau dans le quotidien';
article.appendChild(h2);
article.appendChild(h3);
article.appendChild(h4);
console.log(h2);



/*  const photographers = [];
const media = [];*/


fetch('data/photographers.json')

.then(response => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.json();  
})

.then(json => {
    this.photographers = json.photographers[0].name;
    this.media = json.media;
        console.log(this.photographers)   
    })

    .catch(function () {
        this.dataError = true;
    })  

 

    
        

     
    
    
