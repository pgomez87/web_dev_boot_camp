let randomNumber1 = Math.floor(Math.random()*(6 - 1) + 1);
let randomNumber2 = Math.floor(Math.random()*(6 - 1) + 1);
let radomImgSrc1 = `./images/dice${randomNumber1}.png`;
let radomImgSrc2 = `./images/dice${randomNumber2}.png`;
let title = document.querySelector("h1");

document.querySelector(".img1").setAttribute("src", radomImgSrc1)

document.querySelector(".img2").setAttribute("src", radomImgSrc2)

if(randomNumber1 > randomNumber2){
    title.innerText = "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2){
    title.innerText = "Player 2 Wins!";
} else if(randomNumber1 === randomNumber2){
    title.innerText = "Draw!";
}
                                        
               