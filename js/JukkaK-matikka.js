
$(document).ready(function() {
  // Asetukset
  let asetukset = {
    lasku: "",
    num: 0
  };

  let tulos = 0;
  let lasku = 1;
  let oikein = 0;

  let tuloslista = [];

  function satunnaisluku(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function yhteenlasku(n1, n2) {
    return n1 + n2;
  }

  function miinuslasku(n1, n2) {
    return n1 - n2;
  }

  function kertolasku(n1, n2) {
    return n1 * n2;
  }

  /**
   * Luo uusi laskutehtävä pelaajalle/käyttäjälle
   */
  function uusiLasku() {
    let n1 = 0;
    let n2 = 0;
    $("#nykyinen").html(lasku);
    $("#vastaus").val("");
    if(asetukset.lasku === "yhteen") {
      n1 = satunnaisluku(10, 100);
      n2 = satunnaisluku(10, 100);
      tulos = yhteenlasku(n1, n2);
      
      $("#lauseke").html(n1 + " + " + n2);
    } else if (asetukset.lasku === "miinus") {
      do {
        n1 = satunnaisluku(10, 100);
        n2 = satunnaisluku(10, 100);
      } while(n1 < n2)
      tulos = miinuslasku(n1, n2);
      $("#lauseke").html(n1 + " - " + n2);
    } else if(asetukset.lasku === "kerto") {
      n1 = satunnaisluku(1, 10);
      n2 = satunnaisluku(1, 10);
      tulos = kertolasku(n1, n2);
      $("#lauseke").html(n1 + " * " + n2);
    }
  }

  // Paljasta tulokset
  function tulokset() {
    $("#tulokset").html("Tulokset: ");
    $("#tulokset").append("Sait "+oikein+"/"+asetukset.num+" oikein. Alla näet kaikki vastaukset. Oikeat tulokset ovat suluissa.<br>");
    for(let i = 0; i < tuloslista.length; i++) {
      $("#tulokset").append("<br>"+tuloslista[i]);
    }
  }

  // Asetusten tallennus
  $("#aloita").click(function() {
    let tyyppi = $("input[type='radio']:checked").val();
    asetukset.lasku = tyyppi;
    asetukset.num = Number($("#laskumäärä").val());
    $("#asetukset").hide();
    $("#laskulaatikko").removeClass("invisible");
    $("#max").html(asetukset.num);
    uusiLasku();
  });

  // Tarkista vastaus/Mene seuraavaan tehtävään/Näytä tulokset
  $("#laskuPainike").click(function() {
    $("#oikea").html("");
    if($("#laskuPainike").html() === "Tarkista") {
      let vastaus = Number($("#vastaus").val());
      
      if(vastaus === tulos) {
        oikein++;
        $("#oikein").removeClass("invisible");
        tuloslista.push("<span class='bg-success'>"+$("#lauseke").html()+" = "+vastaus+"</span> ("+tulos+")");

      } else {
        $("#väärin").removeClass("invisible");
        $("#oikea").html(" Oikea vastaus on "+tulos);
        tuloslista.push("<span class='bg-danger'>"+$("#lauseke").html()+" = "+vastaus+"</span> ("+tulos+")");
      }
      if(lasku < asetukset.num) {
        $("#laskuPainike").html("Seuraava");
      } else if(lasku == asetukset.num) {
        $("#laskuPainike").html("Tulokset");
      }
      $("#vastaus").prop("disabled", true);
    } else if($("#laskuPainike").html() === "Seuraava") {
      $("#oikein").addClass("invisible");
      $("#väärin").addClass("invisible");
      lasku++;
      uusiLasku();
      $("#vastaus").prop("disabled", false);
      $("#laskuPainike").html("Tarkista");
    } else if($("#laskuPainike").html() === "Tulokset") {
      tulokset();
    }

    
    
    
  });

});