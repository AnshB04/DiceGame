var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var pic1 = "dice" + randomNumber1 + ".png";
var pic2 = "dice" + randomNumber2 + ".png";

var src1 = "./images/" + pic1;
var src2 = "./images/" + pic2;

document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 wins! 🚩";
} else {
    heading.innerHTML = "Draw!";
}