// Det meste er koden er blevet lånt fra https://codepen.io/marisdu/pen/ZJKzRG
var num = 0; // Ens starter værdi
var level = 1; // Start click værdi
var StrongerClickerPrice = 50; //Her sætter vi prisen
var BoosterPrice = 5000;
var SpecialPowderPrice = 25000;
var cookie = document.getElementById("cookie");
window.onload = function () { // er en del af koden som tvinger en til at skrive noget når spillet loader
    var name = prompt("What is your name"); // spør om navnet på din buisness
    var Buisness = prompt("What type of buisness are you running?") // spørger om hvilken type buisness det er, ville gerne have billdet ville ændre sig/ standard her ville nok være et bakery.
    var space = document.getElementById("space"); // kalder "space" fra HTML hvor at navnet skal stå
    space.innerHTML = name + "'s" + " " +Buisness; // Ligger combinationen af navne sammen.
    ClickIncrease1.innerHTML = 1
    ClickIncrease2.innerHTML = 50   
    ClickIncrease3.innerHTML = 500
    LevelIncrease1.innerHTML = StrongerClickerPrice
    LevelIncrease2.innerHTML = BoosterPrice
    LevelIncrease3.innerHTML = SpecialPowderPrice
}

function cookieClick(){ // her er coden/funktionen som skal afspilles hver gang der bliver trykket på cookien.
    num += level; // Værdien af points man får per click.
    console.log("You Clicked");

   var numbers = document.getElementById("numbers");

    numbers.innerHTML = num; // Det er denne del som gør at man kan se selve tallet på HTML filen.
}

function Upgrade(){
    if (num >= StrongerClickerPrice){// Her tjekker den om du har over 49 points
        console.log("Du har købt en upgrade"); // besked at du har købt en upgrade måske lav den om til at være en promt
       level += 1; // plus i level så man få flere points pr click
       num -= 50; // fjerner 50 fra din points,
       numbers.innerHTML = num; // ændre selve html delen til at vise du har fået fjernet 50
       StrongerClickerPrice = StrongerClickerPrice*1.1;
       upgradeLevel.innerHTML = level; // denne del af koden viser hvor mange points man får pr click
       LevelIncrease1.innerHTML = StrongerClickerPrice
       alert("You have upgraded");
    }
    else {
        console.log("Du har ikke nok points")
    }
}

function UpgradeTwo(){
    if (num >= BoosterPrice){// Her tjekker den om du har over 999 points
        console.log("Du har købt en stor upgrade"); // besked at du har købt en upgrade måske lav den om til at være en promt
        level += 50; // plus i level så man få flere points pr click
       num -= 5000; // fjerner 500 fra din points,
       upgradeLevel.innerHTML = level ; // Denne del i koden viser hvor mange points man får per click
       numbers.innerHTML = num; // ændre selve html delen til at vise du har fået fjernet 500
       BoosterPrice = BoosterPrice*1.1;
       LevelIncrease2.innerHTML = BoosterPrice
       alert("You have upgraded 50 points") 
    }
    else {
        console.log("Du har ikke nok points")
    }
}

function UpgradeThree(){
    if (num >= SpecialPowderPrice){ // tjek om 25k
        console.log("du har købt den sidste upgrade");
        level += 500 // viser point i click 
        num -= 25000 // fjerner dine points
        upgradeLevel.innerHTML = level; // adder 500 til den del af koden som viser points pr click
        numbers.innerHTML = num; // går at du kan se du har fået fjernet 25k
        SpecialPowderPrice = SpecialPowderPrice*1.1;
        LevelIncrease3.innerHTML = SpecialPowderPrice
        alert("du har nu klaret spillet")
    }
    else {
        console.log("Du har ikke nok points")
    }
}