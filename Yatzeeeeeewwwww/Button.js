const testingPress = document.querySelector(".testPress");

function alerto(){
    alert('Event Listener did infact listen');
}
testingPress.addEventListener("click", alerto);


function RolledDice(){
    var Dice1 = document.getElementById("Dice1");
    var Dice2 = document.getElementById("Dice2");
    var Dice3 = document.getElementById("Dice3");
    var Dice4 = document.getElementById("Dice4");
    var Dice5 = document.getElementById("Dice5");

    var Total = document.getElementById("Total");
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

    console.log("Rolled " + DiceOne + DiceTwo + DiceThree + DiceFour + DiceFive);
}

var Counting = 0;

function ClickedDice(){
    Counting++;
    var button = document.getElementsByClassName("PressMe");
    var display = document.getElementById("displayCount");
    display.innerHTML = Counting;
}
