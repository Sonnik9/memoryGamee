let selectEl = document.querySelector('#select-level');
selectEl.addEventListener('change', selectLevel);

function selectLevel() {
    switch(selectEl.value) {
        case 'easy':
            cardsContainer.innerHTML = {};
            
            easyStart();
            cards = document.querySelectorAll('.memory-card');
            restartGame();
            countForFinish = 0;
            scoreResult.innerHTML = '';
            flagE = true;
            flagM = false;
            flagA = false;
            
        break;

        case 'middle':  
            cardsContainer.innerHTML = {};
            cardsContainer.style.width = '100%';
            cardsContainer.style.height = '60%';
            // controlContainer.style.height = 380 + 'px';        
            middleStart(); 
            cards = document.querySelectorAll('.memory-card');
            restartGame();
            countForFinish = 0;
            scoreResult.innerHTML = '';
            flagM = true;
            flagE = false;
            flagA = false;
        break;

        case 'advance': 
            cardsContainer.innerHTML ={};
            cardsContainer.style.width = '100%';
            cardsContainer.style.height = '70%';
            // controlContainer.style.height = 420 + 'px';         
            advanceStart();
            cards = document.querySelectorAll('.memory-card'); 
            restartGame();
            
            countForFinish = 0;
            scoreResult.innerHTML = '';
            flagA = true;
            flagE = false;
            flagM = false;       
        break;
    }  
   
}

 

