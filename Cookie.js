// Det meste er koden er blevet lånt fra https://codepen.io/marisdu/pen/ZJKzRG
var num = 0; // Ens starter værdi
var level = 1; // Start click værdi
var StrongerClickerPrice = 50; //Her sætter vi prisen
var StrongerClickerClickPower = 1; //Her sætter vi hvor meget den giver per click
var StrongerClickerAmount = 0; //Her sætter vi en variabel til at tælle antallet af genstanden
var BoosterPrice = 5000;//Her sætter vi prisen
var BoosterClickPower = 50; //Her sætter vi hvor meget den giver per click
var BoosterAmount = 0; //Her sætter vi en variabel til at tælle antallet af genstanden
var SpecialPowderPrice = 25000;//Her sætter vi prisen
var SpecialPowderClickPower = 500; //Her sætter vi hvor meget den giver per click
var SpecialPowderAmount = 0; //Her sætter vi en variabel til at tælle antallet af genstanden
var cookie = document.getElementById("cookie");
window.onload = function () { // er en del af koden som tvinger en til at skrive noget når spillet loader
    var name = prompt("What is your name"); // spør om navnet på din buisness
    var Buisness = prompt("What type of buisness are you running?") // spørger om hvilken type buisness det er, ville gerne have billdet ville ændre sig/ standard her ville nok være et bakery.
    var space = document.getElementById("space"); // kalder "space" fra HTML hvor at navnet skal stå
    space.innerHTML = name + "'s" + " " +Buisness; // Ligger combinationen af navne sammen.
    ClickIncrease1.innerHTML = StrongerClickerClickPower; // Vi viser i HTML mængden af clicks du får pr upgrade når du køber StrongerClicker
    ClickIncrease2.innerHTML = BoosterClickPower;  // Vi viser i HTML mængden af clicks du får pr upgrade når du køber Booster
    ClickIncrease3.innerHTML = SpecialPowderClickPower; // Vi viser i HTML mængden af clicks du får pr upgrade når du køber Powder
    LevelIncrease1.innerHTML = StrongerClickerPrice; // Vi viser i HTML prisen for at købe den første upgrade
    LevelIncrease2.innerHTML = BoosterPrice; // Vi viser i HTML prisen for at købe den anden upgrade
    LevelIncrease3.innerHTML = SpecialPowderPrice; // Vi viser i HTML prisen for at købe den tredje upgrade
    upgradeLevel.innerHTML = level; // denne del af koden viser hvor mange points man får pr click
    AmountIncrease1.innerHTML = StrongerClickerAmount; // viser i HTML hvor mange af Stronger Clickers du har købt
    AmountIncrease2.innerHTML = BoosterAmount; // Viser i HTMl hvor mange Boostere du har købt
    AmountIncrease3.innerHTML = SpecialPowderAmount; // Viser i HTML mængden af "Special" Powder du har købt
}

function cookieClick(){ // her er coden/funktionen som skal afspilles hver gang der bliver trykket på cookien.
    num += level; // Værdien af points man får per click.
    console.log("You Clicked");

   var numbers = document.getElementById("numbers"); // Kalder positionen i css så numbers bliver kaldt ordenligt.

    numbers.innerHTML = Math.trunc(num); // Det er denne del som gør at man kan se selve tallet på HTML filen.
}

function Upgrade(){
    debugger
    if (num >= StrongerClickerPrice){// Her tjekker den om du har over 49 points
        console.log("Du har købt en upgrade"); // besked at du har købt en upgrade måske lav den om til at være en promt
       level += StrongerClickerClickPower; // plus i level så man få flere points pr click
       StrongerClickerAmount++ //Her fortæller vi den at den skal øge mængden den har af denne upgrade
       if (StrongerClickerAmount === 10){//Her tjekker vi om vi har 10 af en upgrade
        level+=StrongerClickerClickPower*10;//Her øger vi de upgrades vi har med den dobbelte værdi
        StrongerClickerClickPower*=2;//Her gør vi så fremtide køb af upgraden også er dobbelt så gode
        ClickIncrease1.innerHTML = StrongerClickerClickPower;} // Vi viser i HTML mængden af clicks du får pr upgrade når du køber StrongerClicker
        ChangeImage();
        num -= StrongerClickerPrice; // fjerner 50 fra din points,
       numbers.innerHTML = Math.trunc(num); // ændre selve html delen til at vise du har fået fjernet 50
       StrongerClickerPrice = StrongerClickerPrice*1.1; // Ganger prisen med 1.1, så det bliver dyrer og dyrer
       upgradeLevel.innerHTML = level; // denne del af koden viser hvor mange points man får pr click
       LevelIncrease1.innerHTML = Math.trunc(StrongerClickerPrice) // Her viser den i HTML den NYE pris for at købe StrongerClicker
        StrongerClickerClickPower*1.1; 
        AmountIncrease1.innerHTML = StrongerClickerAmount;
        alert("You have upgraded");
       }  
    else {
        console.log("Du har ikke nok points")
    }
}

function UpgradeTwo(){
    if (num >= BoosterPrice){// Her tjekker den om du har over 999 points
        console.log("Du har købt en stor upgrade"); // besked at du har købt en upgrade måske lav den om til at være en promt
        level += BoosterClickPower; // plus i level så man få flere points pr click
        BoosterAmount++//Her fortæller vi den at den skal øge mængden den har af denne upgrade
        if (BoosterAmount === 10){//Her tjekker vi om vi har 10 af en upgrade
            level+=BoosterClickPower*10;//Her øger vi de upgrades vi har med den dobbelte værdi
            BoosterClickPower*=2;//Her gør vi så fremtide køb af upgraden også er dobbelt så gode
            ClickIncrease2.innerHTML = BoosterClickPower;}  // Vi viser i HTML mængden af clicks du får pr upgrade når du køber Booster
       num -= BoosterPrice; // fjerner 500 fra din points,
       upgradeLevel.innerHTML = level ; // Denne del i koden viser hvor mange points man får per click
       numbers.innerHTML = Math.trunc(num); // ændre selve html delen til at vise du har fået fjernet 500
       BoosterPrice = BoosterPrice*1.1; // Ganger prisen med 1.1, så det bliver dyrer og dyrer
       LevelIncrease2.innerHTML = Math.trunc(BoosterPrice) // Her viser den i HTML den NYE pris for at købe Booster
       AmountIncrease2.innerHTML = BoosterAmount;
       alert("You have upgraded 50 points") 
    }
    else {
        console.log("Du har ikke nok points")
    }
}

function UpgradeThree(){
    if (num >= SpecialPowderPrice){ // tjek om 25k
        console.log("du har købt den sidste upgrade");
        level += SpecialPowderClickPower // viser point i click 
        SpecialPowderAmount++//Her fortæller vi den at den skal øge mængden den har af denne upgrade
        if (SpecialPowderAmount === 10){ //Her tjekker vi om vi har 10 af en upgrade
            level+=SpecialPowderClickPower*10;//Her øger vi de upgrades vi har med den dobbelte værdi
            SpecialPowderClickPower*=2; //Her gør vi så fremtide køb af upgraden også er dobbelt så gode
            ClickIncrease3.innerHTML = SpecialPowderClickPower;} // Vi viser i HTML mængden af clicks du får pr upgrade når du køber Powder
        num -= SpecialPowderPrice // fjerner dine points
        upgradeLevel.innerHTML = level; // adder 500 til den del af koden som viser points pr click
        numbers.innerHTML = Math.trunc(num); // går at du kan se du har fået fjernet 25k
        SpecialPowderPrice = SpecialPowderPrice*1.1; // Ganger prisen med 1.1, så det bliver dyrer og dyrer
        LevelIncrease3.innerHTML = Math.trunc(SpecialPowderPrice) // Her viser den i HTML den NYE pris for at købe Powder
        AmountIncrease3.innerHTML = SpecialPowderAmount;
        alert("du har nu klaret spillet")
    }
    else {
        console.log("Du har ikke nok points")
    }
}