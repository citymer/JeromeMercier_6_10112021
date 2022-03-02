const logo = document.querySelector('.logo');
logo.setAttribute("alt","logo fisheyes");

const divPhotograph = document.querySelector('.photographer_section');
divPhotograph.setAttribute("aria-label","section des photographes");

// Function qui construit l'article contenant le portrait du photographe
function photographerFactory(data) {
  
    const { name, portrait, city, country, tagline, price,alt,id} = data;

    const picture = `assets/photographers/${portrait}`;
    

    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );
        article.id = id;

        // balise <a> lien vers 'photographe.html' contenant <img> et >h2>
        const a = document.createElement('a');
        a.href = `photographer.html?id=${id}`;
        a.title = `profil de ${name}`;

          const img = document.createElement( 'img' );
          img.setAttribute("src", picture);
          img.setAttribute("alt",alt  )

          const h2 = document.createElement( 'h2' );
          h2.textContent = `${name}`;

        // texte comprenant ville et pays
        const h3 = document.createElement('h3');
        h3.textContent = `${city}, ${country}`;

        // texte comprenant la tagline
        const h4 = document.createElement('h4');
        h4.textContent = tagline;

        // texte comprenant le prix/jour
        const p = document.createElement('p');
        p.textContent = `${price}€/jour`;

        // lien parent,enfant
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);

        return (article);
    }
    return { getUserCardDOM }
}