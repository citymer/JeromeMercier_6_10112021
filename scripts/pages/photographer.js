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

      const h5 = document.createElement('h5');
      articlePhoto.appendChild(h5);

      const p = document.createElement('p');
      p.setAttribute("class","prix");
      articlePhoto.appendChild(p);

      const divquantityheart = document.createElement('div');
      divquantityheart.setAttribute("class","quantityHeart");
      articlePhoto.appendChild(divquantityheart);

           const span = document.createElement('span');
           divquantityheart.appendChild(span);

           const i = document.createElement('i');
           divquantityheart.appendChild(i);


    
