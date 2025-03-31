function rollDice(){
var n=Math.random();
var randomNumber1 = (n*6)+1;
randomNumber1=Math.floor(randomNumber1);
console.log(randomNumber1);

var n=Math.random();
var randomNumber2 = (n*6)+1;
randomNumber2=Math.floor(randomNumber2);
console.log(randomNumber2);

document.querySelector("#img1").setAttribute("src",`./images/dice${randomNumber1}.png`);
document.querySelector("#img2").setAttribute("src",`./images/dice${randomNumber2}.png`);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins!";
}
else{
    document.querySelector("h1").textContent="It's a draw!";
}



var diceSound = new Audio('./asset/diceRoll.mp3'); // Make sure the file exists
diceSound.play();


document.querySelector("#img1").classList.add("rolling");
document.querySelector("#img2").classList.add("rolling");

setTimeout(() => {
    document.querySelector("#img1").classList.remove("rolling");
    document.querySelector("#img2").classList.remove("rolling");
}, 500);

}