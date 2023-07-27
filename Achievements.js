let title = document.getElementById("title3");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

while (true){

    title.style.color = "#ff0000";
    sleep(500);
    title.style.color = "#ffff00";
    sleep(500);
    
}