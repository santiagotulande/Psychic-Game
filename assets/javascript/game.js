var animals= [
    "alligator",	"ant",	"bear",	"bee",	"bird",	"camel",	"cat",	"cheetah",	"chicken",	"chimpanzee",
    "cow",	"crocodile",	"deer",	"dog",	"dolphin",	"duck",	"eagle",	"elephant",	"fish",	"fly",
    "fox",	"frog",	"giraffe",	"goat",	"goldfish",	"hamster",	"hippopotamus",	"horse",	"kangaroo",	"kitten",
    "lion",	"lobster",	"monkey",	"octopus",	"owl",	"panda",	"pig",	"puppy",	"rabbit",	"rat",
    "scorpion",	"seal",	"shark",	"sheep",	"snail",	"snake",	"spider",	"squirrel",	"tiger",	"turtle",
    "wolf",	"zebra",
        ];
       var Animal = animals[Math.floor(Math.random() * animals.length)];
       console.log( Animal);
      var line = [];
      var guessletter=[]
      
      console.log( line);
      console.log( guess)
      

    for (var i = 0; i < Animal.length; i++) {
    line[i] = "_";

    }
    var Letters = Animal.length;
    for( ;Letters>0;){
   alert(line.join(" "));
   alert("You have "+Letters+" guesses");
   alert("you have guess: "+guessletter);
   var guess = prompt("Type a leter");
   guessletter.push(guess);
   if (guess===null) {
       break;
   }
 else if (guess.length !== 1) {
 alert("one letter at the time");
 }
   else {
       for (var h = 0; h < Animal.length; h++) {
 if (Animal[h] === guess) {
     line[h] = guess;
 Letters--;
 }
 }
  }

}