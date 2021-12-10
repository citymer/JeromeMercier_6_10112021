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
const label = document.createElement('label');
label.textContent = 'Trier par';
label.setAttribute("for","trier");
sectionTrier.appendChild(label);

const select = document.createElement('select');
select.id = 'trier';
sectionTrier.appendChild(select);

const optionPopularite = document.createElement('option');
optionPopularite.setAttribute("value","");
select.appendChild(optionPopularite);
optionPopularite.textContent = 'Popularité';

const optionDate = document.createElement('option');
optionDate.setAttribute("value","date");
select.appendChild(optionDate);
optionDate.textContent = 'Date';
    
const optionTitre = document.createElement('option');
optionTitre.setAttribute("value","titre");
select.appendChild(optionTitre);
optionTitre.textContent = 'Titre';
        

     
    
    
