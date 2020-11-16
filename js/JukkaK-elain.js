class Trivia {
  constructor(question, answers, correct) {
    this._question = question;
    this._answers = answers;
    this._correct = correct;
  }

  get question() {
    return this._question;
  }

  set question(question) {
    this._question = question;
  }

  get answers() {
    return this._answers;
  }

  set answers(answers) {
    this._answers = answers;
  }

  get correct() {
    return this._correct;
  }

  set correct(correct) {
    this._correct = correct;
  }
}

let chosen = false;
let currentQ = null;
let userAnswers = [];

// Kysymykset
let Q0 = new Trivia("Mikä näistä eläimistä tykkää syödä salaattia?", 
["Lehmä", "Kani", "Pöllö", "Rapu"], 1);
let Q1 = new Trivia("Mikä näistä eläimistä on hitain?",
["Kani", "Hevonen", "Tiikeri", "Etana"], 3);

$(document).ready(function() {
  currentQ = Q0;
  $("#question").html(currentQ.question);
  console.log(currentQ.answers.length);
  for(let i = 0; i < currentQ.answers.length; i++) {
    console.log(currentQ.answers[i]);
    $("#answer" + i).html(currentQ.answers[i]);
  }

  $(".answerbox").click(function() {
    // Etsi valitun vastauksen numero
    let id = Number($("p", this).attr("id").slice(-1));
    if(!chosen) {
      if(id === currentQ.correct) {
        console.log("Correct");
        $(this).addClass("correct"); 
      } else {
        $(this).addClass("incorrect");
        $("#answer"+currentQ.correct).parent().addClass("correct");
      }
      userAnswers.push(id);
    } else { 
      return;
    }
    chosen = true;
  });

  $("#nextBtn").click(function() {
    chosen = false;
    $(".answerbox").removeClass("correct");
    $(".answerbox").removeClass("incorrect");
  });
});