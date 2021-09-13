var readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.bold.red('Welcome') 
+ chalk.bold.green(' to') 
+ chalk.bold.yellow(' Bhushan\'s') 
+ chalk.bold.blue(' quiz') 
+ chalk.bold.magenta(' on')
+ chalk.italic.bold.red(' N')
+ chalk.italic.bold.green('A')
+ chalk.italic.bold.yellow('R')
+ chalk.italic.bold.blue('U')
+ chalk.italic.bold.magenta('T')
+ chalk.italic.bold.cyan('O')
+ "\n\n");

var score = 0;
//var playerInfo = {};
var highScore = [
  {
    name: "Bhushan",
    finalScore: 5
  }
];

var playerName = readlineSync.question("Enter your Name: ");

function play(question, answer) {

  console.log(question);
  var userAnswer = readlineSync.question("Enter your answer: ");
  
  if(userAnswer === answer) {
    console.log(chalk.green("Correct \n"));
    score += 1;
  }else {
    console.log(chalk.red("Wrong. The correct answer is " + answer + "\n"));
  }
}

var questions = [{
  question: `Who tricks Naruto into stealing a scroll in the first episode of the series? 
  a: Iruka 
  b: Mizuki 
  c: Hiruzen 
  d: Mitsuki`, 
  answer: "b"
}, {
  question: `What is the name of Zabuza's sword? 
  a: Haku
  b: Shark Skin/Samehada
  c: Helmsplitter/Kabutowari
  d: Executioner's Blade/Kubikiribocho`, 
  answer: "d"
}, {
  question: `Why is Kakashi always late? 
  a: He gets lost on the path of life
  b: He visits the Hokage daily
  c: He visits the Memorial Stone
  d: He's reading Jiraiya's novels`, 
  answer: "c"
}, {
  question: `What is the Eight Tail's real name? 
  a: Chomei
  b: Saiken
  c: Gyuki
  d: Matatabi`, 
  answer: "c"
}, {
  question: `Which Tailed Beast did Rin have inside her? 
  a: The Three Tails
  b: The Four Tails
  c: The Two Tails
  d: The Six Tails`, 
  answer: "a"
}]; 

for (var i=0; i<questions.length;i++) {
  var chosenQuestion = questions[i];
  play(chosenQuestion.question, chosenQuestion.answer);
}

console.log("Your final score is: " + score + "\n");

// playerInfo.name = playerName;
// playerInfo.finalScore = score;
// highScore.push(playerInfo);

// for(var i = 0; i<highScore.length; i++) {
//   console.log(highScore[i].name);
//   console.log(highScore[i].finalScore);
//   console.log("---------------------------------");
// }

// if(score > highscore){
//   console.log(chalk.bold.yellow("Congragulations! You have made a high score."));
// }



