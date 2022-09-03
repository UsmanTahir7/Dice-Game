var randomNumber1 = Math.random();
var temp = Math.floor(randomNumber1 * 6) + 1;
var dice1 = "images/dice" + temp + ".png";
document.querySelectorAll("img")[0].setAttribute('src', dice1);
var randomNumber2 = Math.random();
var temp1 = Math.floor(randomNumber2 * 6) + 1;
var dice2 = "images/dice" + temp1 + ".png";
document.querySelectorAll("img")[1].setAttribute('src', dice2);

if (temp > temp1) {
    document.querySelector("h1").innerHTML = "Player One Wins!";
}
else if (temp < temp1) {
    document.querySelector("h1").innerHTML = "Player Two Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}