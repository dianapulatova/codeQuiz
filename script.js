//add all variables 
var highscore = 0;
var finalscore = document.getElementById("finalscore");
var startQuizPage = document.getElementById("startingPage");
var gameOver = document.getElementById("gameOver");
var initialsHighscore = document.getElementById("initials");
var startQuizButton = document.getElementById("startButton");
var quizTimer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");
var time = document.getElementById("countdown");
var questions = document.getElementById("questions");
var clock = 60;
var timer; 
var buttons = document.getElementById("buttons");
function countdown (){
    clock --;
    time.textContent = clock; 
    if (clock <= 0){
        endGame();
    }
}
function startGame(){
    timer = setInterval(countdown, 1000);
    quiz.classList.remove("hide");
    startQuizPage.classList.add("hide");
    grabQuestions();
}
function endGame(){
    gameOver.classList.remove("hide");
    quiz.classList.add("hide");
    clearInterval(timer);
    finalscore.innerHTML = highscore;

}
   //add quiz questions 
   var index = 0;
   function grabQuestions() {
       var currentQuestion = quizQuestions[index];
       buttons.innerHTML = "";
       questions.textContent = currentQuestion.question;
       currentQuestion.choices.forEach(function(choice, i) {
       var options = document.createElement('button');
       options.setAttribute("value", choice);
       options.setAttribute("class", "choice");
       options.textContent = choice;
       buttons.appendChild(options);
       options.onclick = checkanswer; 


       
       });
   }
   function checkanswer(){
       if (this.value !== quizQuestions[index].correctAnswer) {
           clock -= 10;
           time.textContent = clock; 
           //display wrong!
           buttons.alert = "Wrong!";
           // sound for wrong answer 
        new Audio('http://soundbible.com/mp3/service-bell_daniel_simion.mp3').play();
        // debugger;
        
          
       } else { 
           // display correct!
           //sound
         
            new Audio('http://soundbible.com/grab.php?id=1003&type=mp3').play();
            highscore += 10;

         
       }
       index ++; 
       if (index === quizQuestions.length) {
           endGame();
       } else {
          grabQuestions(); 
       }
   }
   var quizQuestions = [{
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
        "The <body> section", 
        "The <head> section", 
        "The <section> section",
        "Both the <head> section and the <body> section"],
    correctAnswer: "Both the <head> section and the <body> section"},
  {
    question: "How to write an IF statement in JavaScript?",
    choices: [ 
        "if i = 5 then",
        "if (i == 5)",
        "if i = 5",
        "if i == 5 then"],
    correctAnswer: "if (i == 5)"},

   {
    question: "Inside which HTML element do we put the JavaScript?",
    choices:[
     "<script>",
     "<javascript>",
     "<sript.js>",
     "<js>" ],
    correctAnswer: "<script>"},

    {
    question: "How does a FOR loop start?",
    choices:[
         "for (i = 0; i <= 5;)",
         "for (i = 0; i++)",
        "for (i = 0; i <= 5; i++)",
        "for i = 1; 5"],
    correctAnswer: "for (i = 0; i <= 5; i++)"},

    {
    question: "Which operator is used to assign a value to a variable?",
    choices: [ 
        "x",
        "-",
        "*",
        "="],
    correctAnswer: "="},
]; 

startQuizButton.onclick = startGame; 


    // localStorage.setItem('initials',JSON.stringify(initials));

    // initialsHighscore= JSON.parse(localStorage.getItem('initials'));
 
  


