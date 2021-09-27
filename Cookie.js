// Det meste er koden er blevet lånt fra https://codepen.io/marisdu/pen/ZJKzRG
var num = 0; // Ens starter værdi
var level = 0;
var cookie = document.getElementById("cookie");

window.onload = function () { // er en del af koden som tvinger en til at skrive noget når spillet loader
    var name = prompt("What is your name"); // spør om navnet på din buisness
    var Buisness = prompt("What type of buisness are you running?") // spørger om hvilken type buisness det er, ville gerne have billdet ville ændre sig
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
    if (num < 50){
        console.log("Du har købt en upgrade");
       level++;
       numbers.innerHTML = num - 50;
    }
}