// sauvegarde attachinformationmedia

    articlePhoto.innerHTML = ` <a class="lienimage" href=${media.image}>
                                            <img class="imgarticle" src=${media.image} alt=${media.alt}>
                                       </a>
                                       <div class="quantityHeart">
                                            <h5>${media.title}</h5>
                                            <div class="divspanheart">
                                                  <span class="nombrelike">${media.likes}</span>
                                                  <i class="fas fa-heart like-button" aria-hidden="true"></i>
                                            </div>
                                       </div>`;
            
            const numberLikes = document.querySelector('.nombrelike');
            const heart = document.querySelector('.like-button');

// sauvegarde attachinformationvideo

  articleVideo.innerHTML = `<a class="lienimage" href=${video.video}>
                                        <video class="imgarticle" alt=${video.alt} src=${video.video} type="video/mp4" controls></video>
                                  </a>
                                  <div class="quantityHeart">
                                      <h5>${video.title}</h5>
                                      <div class="divspanheart">
                                          <span class="nombrelike">${video.likes}</span>
                                          <i class="fas fa-heart like-button" role="button" aria-hidden="true"></i>
                                      </div>
                                  </div>    `;
          
         const numberLikesVideo = document.querySelector('span');
         const heartVideo = document.querySelector('i'); 
         console.log(heartVideo);



// sauvegarde formulaire

divFormData.innerHTML = `<label form="first_name" tabindex="0">Prénom</label>
                         <input type="text" name="first_name" id="first_name" aria-required="true" minlenght="2" tabindex="0"></input>
                         <p class="first_name_error"></p>

                         <label form="last_name" tabindex="0">Nom</label>
                         <input type="text" name="last_name id="last_name" aria-required="true" minlenght="2" tabindex="0"></input>
                         <p class="last_name_error"></p>
                         
                         <label form="email" tabindex="0">Email</label>
                         <input type="email" name="email" id="email" aria-requiered="true" tabindex="0"></input>
                         <p class="email_error"></p>
                         
                         <label form="your_message" tabindex="0">Votre message</label>
                         <textarea id="your_message" name="your_message aria-requiered="true" tabindex="0"></textarea>
                         <p class="your_message_error></p>`;