var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
// random number from 1 - 6

var randomImage = "image" + randomNumber1 + ".PNG"; 
// random Image from image1.png - image6.png

var randomImageSource = "images/" + randomImage; 
// random Image source from images/image1.png - images/image6.png

var image1 = document.querySelectorAll("img")[0]; 
// Selecting the first image from the images

image1.setAttribute("src", randomImageSource); 
// change the source attribute of image


var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
// randome Number from 1 - 6

var randomImageSource2 = "images/image" + randomNumber2 + ".PNG"; 
// selecting the random image position

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 
// Change the source attribute of image


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<img src='images/flag.PNG'><img> Player 1 Wins!"
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! <img src='images/flag.PNG'></img>";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw Refresh Me!";
}
