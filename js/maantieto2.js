$(document).ready(function(){
    const tulos = "<b>Sait yhteensä <span class='tulos'></span>/5 oikein!</b>"
    const kysymykset = ["#kysymys1", "#kysymys2", "#kysymys3", "#kysymys4", "#kysymys5"];
    const oikeat = ["Riika", "Euro", "Etelä-Amerikka", "Tanska", "Venäjä"];
    let vastaukset = [];
    let esillä = 0;
    let pisteet = 0;

    $("[type=radio]").click(function(){
        $("#seuraava").prop("disabled", false);
    });

    $("#seuraava").click(function(){
        $("#seuraava").prop("disabled",true);
        let vastaus = $(kysymykset[esillä]).children(".radio-inline").children(":checked").parent("label").contents().text();
        vastaukset.push(vastaus);
        if ($(kysymykset[esillä]).children(".radio-inline").children(":checked").val() === "oikein") {
            pisteet++;
        }
        $(kysymykset[esillä]).addClass("piilossa");
        esillä++;
        if (esillä < kysymykset.length) {
            $(kysymykset[esillä]).removeClass("piilossa");
        } else {
            $("#seuraava").addClass("piilossa");
            $("#lopeta_visa").removeClass("piilossa");
        }
    });

    $("#lopeta_visa").click(function(){
        $("#lopeta_visa").addClass("piilossa");
        $("#lopputulos").removeClass("piilossa");
        $("#yhteenveto").removeClass("piilossa");
        $("#palkinto").removeClass("piilossa");
        $("#lopputulos").html(tulos);
        $(".tulos").html(pisteet);
    
        for (let i = 0; i < kysymykset.length; i++) {
            let kysymys_nro = i + 1;
            if (vastaukset[i] === oikeat[i]) {
               $("#oma" + i).html(kysymys_nro + ". " + "<i>" + vastaukset[i] + "</i>"
                    + '<i class="fa fa-check" aria-hidden="true"></i>'); 
               $("#oikea" + i).html("-");
            } else {
                $("#oma" + i).html(kysymys_nro + ". " + "<i>" + vastaukset[i] + "</i>"
                    + ' <i class="fa fa-times" aria-hidden="true"></i>');
                $("#oikea" + i).html("<b>Oikea vastaus:</b> " + oikeat[i]);
            }
        }
       
        if (pisteet === 5) {
            $("#palkinto").html('<img src="img/gold-trophy.png" alt="kultapokaali"></img>');
        } else if (pisteet < 5 && pisteet > 2 ) {
            $("#palkinto").html('<img src="img/silver-trophy.png" alt="hopeapokaali"></img>');
        } else {
            $("#palkinto").html('<img src="img/bronze-trophy.png" alt="pronssipokaali"></img>');
        }

    });

});