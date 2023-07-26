function clickButton(){

    console.log(`Hello world!`);
    const myText = document.getElementById("myText");
    const myText2 = document.getElementById("myText2");
    myText.innerHTML = `It worked!`;
    myText.classname = `myclass`;

    myText2.classname = `myclass`;

    const body = document.body;
    body.style = `background-color: red`;

}