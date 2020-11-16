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

let valittu = false;
let nykyinenKysymys = null;
let syötetytVastaukset = [];

// Kysymykset
let kysymykset = [
  new Trivia("Mikä näistä eläimistä tykkää syödä salaattia?", 
  ["Lehmä", "Kani", "Pöllö", "Rapu"], 1),

  new Trivia("Mikä näistä eläimistä on hitain?",
  ["Kani", "Hevonen", "Tiikeri", "Etana"], 3),

  new Trivia("Millä näistä eläimistä on koukkuja kielessä?",
  ["Kissa", "Karhu", "Marsu", "Käärme"], 0),

  new Trivia("Kuinka monta jalkaa on hämähäkillä?", 
  ["Kaksi", "Kahdeksan", "Kymmenen", "Kuusi"], 1),

  new Trivia("Millä eläimellä on piikkejä selässä?", 
  ["Koira", "Susi", "Siili", "Tiikeri"], 2)
];

$(document).ready(function() {
  uusiKysymys(kysymykset[0]);

  // Syötä tiedot uudelle kysymykselle
  function uusiKysymys(kysymys) {
    nykyinenKysymys = kysymys;
    $("#question").html(kysymys.question);
    //console.log(kysymys.answers.length);
    for(let i = 0; i < kysymys.answers.length; i++) {
      //console.log(kysymys.answers[i]);
      $("#answer" + i).html(kysymys.answers[i]);
    }

    $("#numero").html(kysymykset.indexOf(kysymys)+1);
  }
  

  $(".answerbox").click(function() {
    // Etsi valitun vastauksen numero
    let id = Number($("p", this).attr("id").slice(-1));
    if(!valittu) {
      if(id === nykyinenKysymys.correct) {
        //console.log("Correct");
        $(this).addClass("correct"); 
      } else {
        $(this).addClass("incorrect");
        $("#answer"+nykyinenKysymys.correct).parent().addClass("correct");
      }
      syötetytVastaukset.push(id);
    } else { 
      return;
    }
    valittu = true;
  });

  $("#nextBtn").click(function() {
    valittu = false;
    
    if(nykyinenKysymys == kysymykset[0]) {
      uusiKysymys(kysymykset[1]);
    } else if(nykyinenKysymys == kysymykset[1]) {
      uusiKysymys(kysymykset[2]);
    } else if(nykyinenKysymys == kysymykset[2]) {
      uusiKysymys(kysymykset[3]);
    } else if(nykyinenKysymys == kysymykset[3]) {
      uusiKysymys(kysymykset[4]);
    } else if(nykyinenKysymys == kysymykset[4]) {
      
    }
    $(".answerbox").removeClass("correct");
    $(".answerbox").removeClass("incorrect");
  });
});