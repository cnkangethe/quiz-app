$(document).ready(function(){
	 $("button").on("click", askQuestion);
  });


  // global variables
  	var ind = 0;
    var question;
    var option;
    var options;
    var answerA,answerB,answerC,answerD;
    var correct = 0;
    var quiz;
    var current_status;
  	var questions = [
  	 [ "How many players enter a singles draw for a Grand Slam?",
  	  "64 players","128 players", "256 players","100 players" , "C"],
  	 ["What is the youngest Grand Slam?",
  	  "Austrailan Open","French Open", "U.S. Open","Wimbledon" , "B"],
  	 ["Tie-breakers are played at what score in a set?",
  	  "5-5","6-6", "6-5","5-6" , "B"],
  	 ["What male tennis player has won the most Grand Slam Singles titles?",
  	  "Andre Agassi","Ivan Lendl", "Rod Laver","Pete Sampras" , "D"],
  	 ["What female tennis player has hit the fastest serve ever?",
  	  "Serena Williams","Lindsey Davenport", "Venus Williams","Jennifer Capriati" , "C"]
  	 ];

   // ask, evaluate and track questions and answers
  function askQuestion(){
     quiz = $("#quiz")[0];
     if(ind >= questions.length){
     	quiz.innerHTML = "<h2> You got " + correct +" of " + questions.length + " questions correct.</h2>";
     	$("#current_status")[0].innerHTML = "Quiz Completed";
     	ind = 0;
     	correct = 0;
     	return false;
     }
      
     $("#current_status")[0].innerHTML = "Question " + (ind+1) + " of " + questions.length;
     //populate the variables with questions and choices
     question = questions [ind] [0];
     answerA = questions[ind] [1];
     answerB = questions[ind] [2];
     answerC = questions[ind] [3];
     answerD = questions[ind] [4];
     quiz.innerHTML = "<h3>" + question + "</h3>"; //display the question
     //display the input elements
     $("#quiz").append("<input type='radio' name = 'options' value= 'A'>" + answerA+"<br>");
     $("#quiz").append("<input type='radio' name = 'options' value= 'B'>" + answerB+"<br>");
     $("#quiz").append("<input type='radio' name = 'options' value= 'C'>" + answerC+ "<br>");
     $("#quiz").append( "<input type='radio' name = 'options' value= 'D'>" + answerD+"<br>");
     $("#quiz").append("<button onclick='checkAnswer()'> Submit Answer</button>");
  } 
 //checks the answer
  function checkAnswer(){
    options = document.getElementsByName("options"); // create an array of options
    for(var i=0; i<options.length; i++){

      if(options[i].checked){
        option = options[i].value; // store users selection 
      }
    }
  // evaluate if user selected the correct answer
    if(option == questions[ind] [5])
    { 
  correct++;
    }
   ind++;
   askQuestion();
    }
	