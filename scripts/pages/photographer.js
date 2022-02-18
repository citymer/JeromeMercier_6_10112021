 function counterTotalLikes(filtermedia) {
      // COMPTEUR total de likes  //
                
      const selectSpan = document.querySelectorAll('.nombrelike'); 
                
                
      let somme = 0;
      this.filterMedia.forEach(function(media) {
          somme += media.likes;
      })
      
      textNumber.textContent = somme;
 }           
            
async function displayData(filterMedia) {
                
    
    attachInformationPhotograph();
    
    
    // créer un article pour chaque photo
    filterMedia.forEach((media) => {
        
        attachInformationMedia(media);     
        
    });
};


   
            
            
          
    
async function init() {

        
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        // récupère les medias des photographes
        const media = await getPhotographers();
        
        displayData(filterMedia);

        lightbox(filterMedia);
        
        counterTotalLikes(filterMedia);
         
   

        
};
    
    init();







/*

// ouvre le sous-menu en valider avec la touche ENTER du clavier
window.addEventListener('keydown', function(e)  {

        if (e.key === "Enter") {

        newMenu.style.display = "block";
        newSelect.style.display = "none";
       

        }
    })
*/





        
 
 