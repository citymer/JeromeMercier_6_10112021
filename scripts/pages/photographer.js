//Mettre le code JavaScript lié à la page photographer.html





fetch('data/photographers.json')

.then(response => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.json();  
})

.then(json => {
    this.photographers = json;
    const {photographers} = json;
    const {media} = json;
})

.catch(function () {
    this.dataError = true;
}) 

// ***************    DOM   ******************
const sectionPhotographHeader = document.getElementById('photograph-header');

// SECTION sectionphotographHeader
const article = document.createElement('article');
const h2 = document.createElement('h2');
h2.textContent = 'Mimi Keel';
const h3 = document.createElement('h3');
h3.textContent = 'London, UK';
const h4 = document.createElement('h4');
h4.textContent = 'Voir le beau dans le quotidien';

const button = document.querySelector('.contact_button');

const img = document.createElement('img');

// lien parent,enfant
sectionPhotographHeader.appendChild(article); 
sectionPhotographHeader.appendChild(img);
//positionne article avant button
sectionPhotographHeader.prepend(article);
sectionPhotographHeader.append(button); 
sectionPhotographHeader.append(img);

article.appendChild(h2);
article.appendChild(h3);
article.appendChild(h4);

// SECTION trier
const main = document.getElementById('main');
const sectionTrier = document.createElement('section');
sectionTrier.id = 'filter';
main.appendChild(sectionTrier);
const p = document.createElement('p');
p.textContent = 'trier par';
p.className = 'trier';
sectionTrier.appendChild(p);

    
        

     
    
    
