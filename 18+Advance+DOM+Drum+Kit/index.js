let drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(drumButton => {
    
    drumButton.addEventListener("click", function (){

        let buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);

    });
});

document.addEventListener('keydown', function (e) {
    makeSound(e.key);

    buttonAnimation(e.key);
});

    function makeSound(key){
        switch (key) {
            case "w":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();

            case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();

            case "s":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();

            case "d":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();    

            case "j":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "k":
                let kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();

            case "l":
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
        
            default:
                break;
        }
    }
 

function buttonAnimation(currentKey){
    let activeButton = document.querySelector(`.${currentKey}`)
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}
