
function timeKeeper() {
    sec = 0;
    timeItem.innerHTML = 0;
    timerId = setInterval(function tick() {
        sec++;
        timeItem.innerHTML = sec;
       
    }, 1000);
}

  

    
