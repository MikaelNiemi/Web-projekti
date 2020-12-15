class Trivia {
  constructor(teksti, vastaukset, oikea) {
    this._teksti = teksti;
    this._vastaukset = vastaukset;
    this._oikea = oikea;
  }

  get teksti() {
    return this._teksti;
  }

  set teksti(teksti) {
    this._teksti = teksti;
  }

  get vastaukset() {
    return this._vastaukset;
  }

  set vastaukset(vastaukset) {
    this._vastaukset = vastaukset;
  }

  get oikea() {
    return this._oikea;
  }

  set oikea(oikea) {
    this._oikea = oikea;
  }
}

let loppu = false;
let valittu = false;
let nykyinenKysymys = null;
let syötetytVastaukset = [];

// Kysymykset
let kysymykset = [
  new Trivia("Mikä näistä eläimistä tykkää syödä salaattia?", 
  ["Lehmä", "Jänis", "Pöllö", "Rapu"], 1),

  new Trivia("Mikä näistä eläimistä on hitain?",
  ["Jänis", "Hevonen", "Tiikeri", "Etana"], 3),

  new Trivia("Millä näistä eläimistä on koukkuja kielessä?",
  ["Kissa", "Karhu", "Marsu", "Käärme"], 0),

  new Trivia("Kuinka monta jalkaa on hämähäkillä?", 
  ["Kaksi", "Kahdeksan", "Kymmenen", "Kuusi"], 1),

  new Trivia("Millä eläimellä on piikkejä selässä?", 
  ["Koira", "Susi", "Siili", "Tiikeri"], 2)
];

$(document).ready(function() {
  uusiKysymys(kysymykset[0]);

  /**
   * Syötä tiedot uudelle kysymykselle
   * @param {String} kysymys 
   */
  function uusiKysymys(kysymys) {
    nykyinenKysymys = kysymys;
    $("#nextBtn").prop("disabled", true);
    $("#question").html(kysymys.teksti);
    for(let i = 0; i < kysymys.vastaukset.length; i++) {
      $("#answer" + i).html(kysymys.vastaukset[i]);
    }

    $("#numero").html(kysymykset.indexOf(kysymys)+1);
  }

  $(".answerbox").click(function() {
    // Etsi valitun vastauksen numero
    let id = Number($("p", this).attr("id").slice(-1));
    if(!valittu) {
      if(id === nykyinenKysymys.oikea) {
        //console.log("Correct");
        $(this).addClass("correct"); 
      } else {
        $(this).addClass("incorrect");
        $("#answer"+nykyinenKysymys.oikea).parent().addClass("correct");
      }
      syötetytVastaukset.push(id);
    } else { 
      return;
    }

    if(!loppu) $("#nextBtn").prop("disabled", false);
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
      $(this).html("Tulokset");
    } else if(nykyinenKysymys == kysymykset[4]) {
      näytäTulokset();
    }
    $(".answerbox").removeClass("correct");
    $(".answerbox").removeClass("incorrect");
  });

  function näytäTulokset() {
    loppu = true;
    $("#tulokset").removeClass("piilossa");
    $(".answerbox").addClass("piilossa");
    $("#questionbox").addClass("piilossa");
    $("#nextBtn").prop("disabled", true);

    for(let i = 0; i < kysymykset.length; i++) {
      let oikeaVastaus = kysymykset[i].vastaukset[kysymykset[i].oikea];
      let vastaus = kysymykset[i].vastaukset[syötetytVastaukset[i]];
      $("#tulosLista").append(kysymykset[i].teksti + "<br>");
      $("#tulosLista").append("Oikea vastaus: " + oikeaVastaus + "<br>" +
                              "Vastauksesi: " + vastaus +
                              "<br><br>");
    }
    annaPalkinto();
  }

  function annaPalkinto() {
    let oikein = 0;
    for(let i = 0; i < kysymykset.length; i++) {
      let oikeaVastaus = kysymykset[i].vastaukset[kysymykset[i].oikea];
      let vastaus = kysymykset[i].vastaukset[syötetytVastaukset[i]];
      if(oikeaVastaus === vastaus) {
        oikein++;
      }
    }

    $("#tulosModal").modal('show')
    if(oikein >= 2 && oikein < 4) {
      $("#tulosModal .modal-body").html("<img src='img/tahti1.png' alt='' />");
      $("#tulosModal .modal-body").append("<p>" + oikein + " oikein. Parantamisen varaa löytyy.</p>");
    } else if(oikein == 4) {
      $("#tulosModal .modal-body").html("<img src='img/tahti2.png' alt='' />");
      $("#tulosModal .modal-body").append("<p>" + oikein + " oikein. Melkein kaikki oikein.</p>");
    } else if(oikein == 5) {
      $("#tulosModal .modal-body").html("<img src='img/tahti3.png' alt='' />");
      $("#tulosModal .modal-body").append("<p>Kaikki oikein. Hyvin tehty!</p>");
    } else {

    }
  }

});