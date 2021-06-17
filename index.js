var readLineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

var userName = readLineSync.question(chalk.blue("Enter Your Name : "),{
  hideEchoBack : true
});
console.log("");

console.log(chalk.blue("***************** Welcome ") + chalk.blue(userName) + chalk.blue(" To The Quiz *****************"));
console.log("");
console.log(chalk.blue("let Me Tell You About The Rules Of Quiz."));
console.log(chalk.blue("1. There Are 3 Rounds."));
console.log(chalk.blue("2. You Have To Clear Each Round To Win The Quiz."));
console.log(chalk.blue("3. If You Fail To Clear Any Round You Will Be Out Of The Quiz."));
console.log(chalk.blue("4. You Will Score +1 For Correct Answer & -1 For Wrong Answer."));
console.log("");
console.log(chalk.blue("--------------------------------------------------------------"));
console.log("");
console.log(chalk.blue("*************************** Round 1 ***************************"));
console.log("");

function play(question,option,answer){
  console.log(chalk.blue(question));
  var userAnswer = readLineSync.question(chalk.blue(option));
  if(userAnswer === answer){
    console.log(chalk.green("You are correct !"));
    score++;
  } else{
    console.log(chalk.red("You are wrong !"));
    console.log(chalk.green("correct answer : ") + chalk.green.bold(answer));
    score--;
  }
  return score;
}

var roundOne = [{question : "Who killed Ganesh Gaitonde in Sacred Games ? \n",
                 option : "a.Suleiman Isa\nb.Paritosh Shah\nc.DCP Parulkar\nd.Ganesh Gaitonde\n",
                 answer :"d"},
                {question : "In mirzapur Guddu & Bablue are third-year students .what are they studying ?\n",
                 option : "a.Economics\nb.B.com\nc.B.A(Pass)\nd.B.Sc\n",
                 answer :"b"},
                 {question : "For which organization does Shrikant Tiwari work(Family Man)?\n",
                 option : "a.RAW\nb.TASC\n",
                 answer :"b"},
                 {question : "On which OTT platform was 'Asur' released ?\n ",
                 option : "a.Voot\nb.Netflix\nc.Amazon Prime\nd.Hotstar\n",
                 answer :"a"},
                 {question : "Where does Hathi Ram Chaudhari travel to uncover the mystery about Hathoda Tyagi(Paatal Lok)?\n",
                 option : "a.Patiala\nb.Chandni Chowk\nc.chandigarh\nd.chitrakoot\n",
                 answer :"d"}];

for(var i = 0;i < roundOne.length;i++){
 var resultOfRoundOne = play(roundOne[i].question,roundOne[i].option,roundOne[i].answer);
  console.log("");
  console.log(chalk.blue("--------------------------------------------------------------"));
}

console.log(chalk.blue.bold("Score : ") + chalk.blue.bold(resultOfRoundOne));
console.log("");
if(resultOfRoundOne < roundOne.length){
  console.log(chalk.red.bold("Better luck next time !"));
  process.exit();
}else{
  console.log(chalk.blue("*************************** Round 2 ***************************"));
  console.log("");
}

var roundTwo = [{question : "How many feathers should be in a shuttle?\n",
                 option : "a.12\nb.26\nc.16\nd.20\n",
                 answer :"c"},
                {question : "Each Badminton game is played up to how many points?\n",
                 option :"a.11\nb.15\nc.21\nd.31\n",
                 answer :"c"},
                 {question : "How many times have India won the cricket World Cup?\n",
                 option : "a.2\nb.3\nc.5\n",
                 answer :"a"}];

for(var i = 0;i < roundTwo.length;i++){
 var resultOfRoundTwo = play(roundTwo[i].question,roundTwo[i].option,roundTwo[i].answer);
  console.log("");
  console.log(chalk.blue("--------------------------------------------------------------"));
}

console.log(chalk.blue.bold("Score : ") + chalk.blue.bold(resultOfRoundTwo));
console.log("");
if(resultOfRoundTwo < roundTwo.length + roundOne.length){
  console.log(chalk.red.bold("Better luck next time !"));
  process.exit();
}else{
  console.log(chalk.blue("*************************** Round 3 ***************************"));
  console.log("");
}

var roundThree = [{question : "Which of these is a popular dish from the udupi cuisine?\n",
                 option : "a.Poha\nb.Dosa\nc.Wada\nd.Puri\n",
                 answer :"b"}];

for(var i = 0;i < roundThree.length;i++){
 var resultOfRoundThree = play(roundThree[i].question,roundThree[i].option,roundThree[i].answer);
  console.log("");
  console.log(chalk.blue("--------------------------------------------------------------"));
}

console.log(chalk.blue.bold("Score : ") + chalk.blue.bold(resultOfRoundThree));
console.log("");
if(resultOfRoundThree < roundTwo.length + roundOne.length + roundThree.length){
  console.log(chalk.red.bold("Better luck next time !"));
  process.exit();
}else{
  console.log(chalk.green.bold("Yay you Won the Quiz !"));
}