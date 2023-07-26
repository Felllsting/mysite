let title = document.getElementById("title3");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

while (true){

    title.style.color = "RED";
    sleep(0.5);
    title.style.color = "YELLOW";
    sleep(0.5);
    
}