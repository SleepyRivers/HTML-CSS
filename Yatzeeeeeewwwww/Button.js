const testingPress = document.querySelector(".testPress");

function alerto(){
    alert('Event Listener did infact listen');
}
testingPress.addEventListener("click", alerto);


function RollDice(){
    var Dice1 = document.getElementsByClassName("Dice1");
    var Dice2 = document.getElementsByClassName("Dice2");
    var Dice3 = document.getElementsByClassName("Dice3");
    var Dice4 = document.getElementsByClassName("Dice4");
    var Dice5 = document.getElementsByClassName("Dice5");

    var Total = document.getElementsByClassName("Total");
    var Yatsea = document.getElementsByClassName("Yatsea");

    var DiceOne = Math.floor(Math.random()*6) + 1;
    var DiceTwo = Math.floor(Math.random()*6) + 1;
    var DiceThree = Math.floor(Math.random()*6) + 1;
    var DiceFour = Math.floor(Math.random()*6) + 1;
    var DiceFive = Math.floor(Math.random()*6) + 1;

    var Total = DiceOne + DiceTwo + DiceThree + DiceFour + DiceFive;

    if(DiceOne == DiceTwo && DiceOne == DiceThree && DiceOne == DiceFour && DiceOne == DiceFive){
        Yatsea.innerHTML = "YATSEA";
    };

    Dice1.innerHTML = DiceOne;
    Dice2.innerHTML = DiceTwo;
    Dice3.innerHTML = DiceThree;
    Dice4.innerHTML = DiceFour;
    Dice5.innerHTML = DiceFive;
}

var Counting = 0;

function ClickedDice(){
    Counting++;
    var button = document.getElementsByClassName("PressMe");
    var display = document.getElementsByClassName("displayCount");
    display.innerHTML = Counting;
}
