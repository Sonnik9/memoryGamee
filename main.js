let countCard = 0;
let counterForResult = 0;
let countForFinish = 0;

let flagM = false;
let flagA = false;
let flagCard = false;
let firstCard;
let secondCard;

let timerId;
let timeItem = document.querySelector('.time-item');

let cards = document.querySelectorAll('.memory-card');
let scoreResult = document.querySelector('.score-result');
let startButton = document.querySelector('.start');
startButton.addEventListener('click', restartGame);

cards.forEach(card => card.addEventListener('click', flipCard, { once: true }));

function shuffle() {
        cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
        });
}
shuffle();
      
function flipCard() { 
  counterForResult++;
  countCard++;
 
  if(countCard == 1) {
    this.classList.add('flip');
    firstCard = this;
  }
  
  else if(countCard == 2) {   
    this.classList.add('flip');
    secondCard = this;
    
    if (firstCard.dataset.name == secondCard.dataset.name) {
      resetBoard();
      flagCard = true;
      countForFinish++;
    }
    else {
      flagCard = false;
    }       
    
  }
  else if (flagCard == false && countCard == 3) {
    restartListener();
    unflipCards();
    this.classList.add('flip');
    firstCard = this;
    countCard = 1;
  }

  else if (flagCard == true && countCard == 3) { 
    resetBoard();
    this.classList.add('flip'); 
    firstCard = this;
    countCard = 1;
    flagCard = false;
  } 
  
  if((countForFinish == 6 && flagE == true) || (countForFinish == 12 && flagM == true) || (countForFinish == 18 && flagA == true)) {
    clearInterval(timerId);
    scoreResult.innerHTML = sec + '  ' + 'sec' + '  ' + counterForResult + '  ' + 'clicks';

  }

  else if (countForFinish == 12 && flagM == true) {

  }
}

function resetBoard() {
firstCard = null;
secondCard = null;
}

function restartListener() {
firstCard.addEventListener('click', flipCard, { once: true });
secondCard.addEventListener('click', flipCard, { once: true });
}

function unflipCards() { 
firstCard.classList.remove('flip');
secondCard.classList.remove('flip');     
}  
  
function restartGame() {
    countCard = 0;
    counterForResult = 0;
    countForFinish = 0;
    flagCard = false;
    cards.forEach(card => card.addEventListener('click', flipCard, { once: true }));
    cards.forEach(card => card.classList.remove('flip'));
    shuffle();
    scoreResult.innerHTML =  '';   
    timeItem.innerHTML = '';
    clearInterval(timerId);
    timeKeeper();
}













