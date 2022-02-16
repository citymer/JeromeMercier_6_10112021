// Récupère et affiche les informations des photographes dans la section photograph-header ***
function attachInformationPhotograph(photographers) {
    
    
    const { name, portrait, city, country, tagline,price,alt,id} = this.filterPhotographer[0];
      
      const picture = `assets/photographers/${portrait}`;
      
      //selectionne header ***** creation du lien vers l'acceuil (index.html)
      const header = document.querySelector('header');
      
      const aLienAcceuil = document.createElement('a');
         header.appendChild(aLienAcceuil);
         aLienAcceuil.setAttribute("href","./index.html");
         aLienAcceuil.setAttribute("title","vers la page d'acceuil");
         
         const imgLogo = document.querySelector('.logo');
         aLienAcceuil.appendChild(imgLogo);
      
      //SELECTIONNE la section "photograph-header" 
      const sectionPhotographHeader = document.getElementById('photograph-header');
      sectionPhotographHeader.setAttribute("arial-label","photographer header");
      
        //création "article" qui contient "h2,h3,h4"
        const article = document.createElement('article');
        sectionPhotographHeader.appendChild(article); 
        article.id = id;
        article.innerHTML = `<h1>${name}</h1>
                             <h2>${city}, ${country}</h2>
                             <h3>${tagline}</h3>`;
    
      
      // selection du bouton "contact_button"   
      const button = document.querySelector('.contact_button');
      button.setAttribute("title","contactez-moi");
      
      //creation d' img pour la photo de profil du photographe
      const img = document.createElement('img');
      img.setAttribute("src", picture);
      img.setAttribute("alt",alt);
      
      //positionne article avant button dans HTML
      sectionPhotographHeader.prepend(article);
      sectionPhotographHeader.append(button); 
      sectionPhotographHeader.append(img);       
      
      //ECRIT le prix/jour dans le FOOTER
      const divPriceDay = document.createElement('div');
      divFooterInfo.appendChild(divPriceDay);
      divPriceDay.setAttribute("class","divpriceday");
      divPriceDay.innerHTML = `<span class="textpriceday">${price} €/jour</span>`; 
  
  }  
