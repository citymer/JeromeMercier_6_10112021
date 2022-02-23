function sortMedia(filterMedia) {
    
    const selectMenu = document.getElementById('select');

    selectMenu.addEventListener('change', function() {

     document.getElementById('divphoto').innerHTML = "";

     // classement alphabethique des titres

        if (this.value == "titre") {

            let classementAlphabethique = filterMedia.sort((a, b) => {
               if (a.title < b.title) { return -1;}
               else {return 1;};
               
            });

            classementAlphabethique.forEach((media) => {
                attachInformationMedia(media);
     
            })

         // classement des likes décroissant  
        } else if (this.value == "popularite") {

            let rangementLikes = filterMedia.sort((a, b) => {
               return b.likes - a.likes;

            }); 
   
            rangementLikes.forEach((media) => {
              attachInformationMedia(media);
            })

            // classement par date
        }else if (this.value == "date") {

            let classementParDate = filterMedia.sort((a, b) => {
               let aDate = a.date;
               let bDate = b.date;
            
               if (aDate < bDate) {
                   return -1;
                } else if (aDate == bDate) {
                   return 0;
                } else {
                   return 1;
                }
            
            });

            classementParDate.forEach((media) => {
               attachInformationMedia(media);
            })
        }
        
    });
}

