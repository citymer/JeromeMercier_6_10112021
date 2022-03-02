function sortMedia(filterMedia) {
    
   
    const selectMenu = document.getElementById('select');

    selectMenu.addEventListener('change', function() {

     document.getElementById('divphoto').innerHTML = "";

     // classement alphabethique des titres
  
        if (this.value == "titre") {

            filterMedia = filterMedia.sort((a, b) => {
               if (a.title < b.title) { return -1;}
               else {return 1;};
               
            });

      
     

         // classement des likes décroissant  
        } else if (this.value == "popularite") {

            filterMedia = filterMedia.sort((a, b) => {
               return b.likes - a.likes;

            }); 
   
         

            // classement par date
        }else if (this.value == "date") {

            filterMedia = filterMedia.sort((a, b) => {
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
            
            
         }
         
         filterMedia.forEach((media) => {
            attachInformationMedia(media);
            
         })


      });
      
   }
   
