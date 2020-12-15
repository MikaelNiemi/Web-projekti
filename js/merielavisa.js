const oikein = "Oikein";
const vaarin = "Väärin";

$(document).ready(function(){

    //Ensimmäinen kysymys
    $("#nappi1").click(function(){
        let valinta = $("input[name=vaihtoehto]:checked").val();

        if (valinta === "3") {
            $("#palsta3").css("background-color", "green", "!important");
            $("#vastaus1").css("color", "lightgreen");
            $("#vastaus1").html(oikein);
        } else if (valinta === "1") {
            $("#palsta1").css("background-color", "red", "!important");
            $("#vastaus1").css("color", "red");
            $("#vastaus1").html(vaarin);
        } else if (valinta === "2") {
            $("#palsta2").css("background-color", "red", "!important");
            $("#vastaus1").css("color", "red");
            $("#vastaus1").html(vaarin);
        }

        $("#eka").prop("disabled", true);
        $("#toka").prop("disabled", true);
        $("#kolmas").prop("disabled", true);
    });

    //Toinen kysymys
    $("#nappi2").click(function(){
        let valinta = $("input[name=vaihtoehto]:checked").val();

        if (valinta === "3") {
            $("#palsta6").css("background-color", "green", "!important");
            $("#vastaus2").css("color", "lightgreen");
            $("#vastaus2").html(oikein);
        } else if (valinta === "1") {
            $("#palsta4").css("background-color", "red", "!important");
            $("#vastaus2").css("color", "red");
            $("#vastaus2").html(vaarin);
        } else if (valinta === "2") {
            $("#palsta5").css("background-color", "red", "!important");
            $("#vastaus2").css("color", "red");
            $("#vastaus2").html(vaarin);
        }

        $("#eka2").prop("disabled", true);
        $("#toka2").prop("disabled", true);
        $("#kolmas2").prop("disabled", true);
    });

    //Kolmas kysymys
    $("#nappi3").click(function(){
        let valinta = $("input[name=vaihtoehto]:checked").val();

        if (valinta === "1") {
            $("#palsta7").css("background-color", "green", "!important");
            $("#vastaus3").css("color", "lightgreen");
            $("#vastaus3").html(oikein);
        } else if (valinta === "2") {
            $("#palsta8").css("background-color", "red", "!important");
            $("#vastaus3").css("color", "red");
            $("#vastaus3").html(vaarin);
        } else if (valinta === "3") {
            $("#palsta9").css("background-color", "red", "!important");
            $("#vastaus3").css("color", "red");
            $("#vastaus3").html(vaarin);
        }

        $("#eka3").prop("disabled", true);
        $("#toka3").prop("disabled", true);
        $("#kolmas3").prop("disabled", true);
    });

    //Neljäs kysymys
    $("#nappi4").click(function(){
        let valinta = $("input[name=vaihtoehto]:checked").val();

        if (valinta === "2") {
            $("#palsta11").css("background-color", "green", "!important");
            $("#vastaus4").css("color", "lightgreen");
            $("#vastaus4").html(oikein);
        } else if (valinta === "1") {
            $("#palsta10").css("background-color", "red", "!important");
            $("#vastaus4").css("color", "red");
            $("#vastaus4").html(vaarin);
        } else if (valinta === "3") {
            $("#palsta12").css("background-color", "red", "!important");
            $("#vastaus4").css("color", "red");
            $("#vastaus4").html(vaarin);
        }

        $("#eka4").prop("disabled", true);
        $("#toka4").prop("disabled", true);
        $("#kolmas4").prop("disabled", true);
    });

    //Viides kysymys
    $("#nappi5").click(function(){
        let valinta = $("input[name=vaihtoehto]:checked").val();

        if (valinta === "3") {
            $("#palsta15").css("background-color", "green", "!important");
            $("#vastaus5").css("color", "lightgreen");
            $("#vastaus5").html(oikein);
        } else if (valinta === "1") {
            $("#palsta13").css("background-color", "red", "!important");
            $("#vastaus5").css("color", "red");
            $("#vastaus5").html(vaarin);
        } else if (valinta === "2") {
            $("#palsta14").css("background-color", "red", "!important");
            $("#vastaus5").css("color", "red");
            $("#vastaus5").html(vaarin);
        }

        $("#eka5").prop("disabled", true);
        $("#toka5").prop("disabled", true);
        $("#kolmas5").prop("disabled", true);
    });

    // oikeiden vastauksien laskeminen
    let vastaukset = 0;

    $("#lopputulos").click(function(){

        $("#lopputulos").prop("disabled",true);

        if ($("#vastaus1").html() === oikein) {
            vastaukset++
        }

        if ($("#vastaus2").html() === oikein) {
            vastaukset++
        }

        if ($("#vastaus3").html() === oikein) {
            vastaukset++
        }

        if ($("#vastaus4").html() === oikein) {
            vastaukset++
        }

        if ($("#vastaus5").html() === oikein) {
            vastaukset++
        }
        
       // tulostus
        if (vastaukset <= 3) {
            $("#tulostus").html(vastaukset + "/5" + " Sinulla on vielä parantamisen varaa.");
        }

        if (vastaukset === 4) {
            $("#tulostus").html(vastaukset + "/5" + " Olit niin lähellä!");
        }

        if (vastaukset === 5) {
            $("#tulostus").html(vastaukset + "/5" + " Mahtavaa, sait kaikki oikein!");
        }

    });
});