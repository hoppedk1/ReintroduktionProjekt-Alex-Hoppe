// Det meste er koden er blevet lånt fra https://codepen.io/marisdu/pen/ZJKzRG
var num = 0; // Ens starter værdi
var level = 0;
var cookie = document.getElementById("cookie");

window.onload = function () { // er en del af koden som tvinger en til at skrive noget når spillet loader
    var name = prompt("What is your name"); // spør om navnet på din buisness
    var Buisness = prompt("What type of buisness are you running?") // spørger om hvilken type buisness det er, ville gerne have billdet ville ændre sig/ standard her ville nok være et bakery.
    var space = document.getElementById("space"); // kalder "space" fra HTML hvor at navnet skal stå
    
    space.innerHTML = name + "'s" + " " +Buisness; // Ligger combinationen af navne sammen.
}

function cookieClick(){ // her er coden/funktionen som skal afspilles hver gang der bliver trykket på cookien.
    num += 1 + level; // Værdien af points man får per click.
    console.log("You Clicked");

   var numbers = document.getElementById("numbers");

    numbers.innerHTML = num; // Det er denne del som gør at man kan se selve tallet på HTML filen.
}

function Upgrade(){
    if (num > 49){// Her tjekker den om du har over 49 points
        console.log("Du har købt en upgrade"); // besked at du har købt en upgrade måske lav den om til at være en promt
       level++; // plus i level så man få flere points pr click
       num -= 50; // fjerner 50 fra din points,
       numbers.innerHTML = num; // ændre selve html delen til at vise du har fået fjernet 50
       upgradeLevel.innerHTML = level + 1; // denne del af koden viser hvor mange points man får pr click
       alert("You have upgraded");
    }
    else {
        console.log("Du har ikke nok points")
    }
}

function UpgradeTwo(){
    if (num > 4999){// Her tjekker den om du har over 999 points
        console.log("Du har købt en stor upgrade"); // besked at du har købt en upgrade måske lav den om til at være en promt
        upgradeLevel.innerHTML = level + 50; // Denne del i koden viser hvor mange points man får per click
        level += 50; // plus i level så man få flere points pr click
       num -= 5000; // fjerner 500 fra din points,
       numbers.innerHTML = num; // ændre selve html delen til at vise du har fået fjernet 500
       alert("You have upgraded 50 points") 
    }
    else {
        console.log("Du har ikke nok points")
    }
}

function UpgradeThree(){
    if (num > 24999){ // tjek om 25k
        console.log("du har købt den sidste upgrade");
        upgradeLevel.innerHTML = level + 500; // adder 500 til den del af koden som viser points pr click
        level += 500 // viser point i click 
        num -= 25000 // fjerner dine points
        numbers.innerHTML = num; // går at du kan se du har fået fjernet 25k
        alert("du har nu klaret spillet")
    }
    else {
        console.log("Du har ikke nok points")
    }
}