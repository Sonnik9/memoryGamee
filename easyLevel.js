let cardsContainer = document.querySelector('.memory-game');
let controlContainer = document.querySelector('.control');
let flagE;


function easyStart() {
    cardsContainer.style.width = '100%';
    cardsContainer.style.height = 'calc(80% - 50px)';

    // controlContainer.style.height = 380 + 'px'; 
    
    cardsContainer.innerHTML = `
    <div class="memory-card easy" data-name="one">
            <img class="front-face" src="./имж карточки/1ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
          <div class="memory-card easy" data-name="one">
            <img class="front-face" src="./имж карточки/1ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
      
          <div class="memory-card easy" data-name="two">
            <img class="front-face" src="./имж карточки/2ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
          <div class="memory-card easy" data-name="two">
            <img class="front-face" src="./имж карточки/2ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
      
          <div class="memory-card easy" data-name="three">
            <img class="front-face" src="./имж карточки/3ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
          <div class="memory-card easy" data-name="three">
            <img class="front-face" src="./имж карточки/3ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
      
          <div class="memory-card easy" data-name="four">
            <img class="front-face" src="./имж карточки/4ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
          <div class="memory-card easy" data-name="four">
            <img class="front-face" src="./имж карточки/4ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
      
          <div class="memory-card easy" data-name="five">
            <img class="front-face" src="./имж карточки/5ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
          <div class="memory-card easy" data-name="five">
            <img class="front-face" src="./имж карточки/5ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
      
          <div class="memory-card easy" data-name="six">
            <img class="front-face" src="./имж карточки/6ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>
          <div class="memory-card easy" data-name="six">
            <img class="front-face" src="./имж карточки/6ю1.jpg"/>
            <img class="back-face" src="./имж карточки/back-face-img.jpg"/>
          </div>

    `;

    flagE = true;

   
}

easyStart();



