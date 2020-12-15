$(document).ready(function(){
    const tulos = "<b>Sait yhteensä <span class='tulos'></span>/5 oikein!</b>"
    const kysymykset = ["#kysymys1", "#kysymys2", "#kysymys3", "#kysymys4", "#kysymys5"];
    const oikeat = ["Riika", "Euro", "Etelä-Amerikka", "Tanska", "Venäjä"];
    const selitys = ["Latvian pääkaupunki Riika perustettiin vuonna 1201. Väkiluku on noin 630 000.",
                    "Espanjassa on käytetty euroa 1.1.2002 lähtien. Ennen sitä Espanjassa käytettiin pesetoja.",
                    "Argentiina sijaitsee Etelä-Amerikassa, Atlantin länsirannikolla. Sen pääkaupunki on Buenos Aires.",
                    "Suomen rajanaapureita on 3: Ruotsi, Norja ja Venäjä. Tanskan ainoa rajanaapuri on Saksa.",
                    "Venäjän pinta-ala on huimat 17 100 000 neliökilometriä. Toiseksi suurin maa on Kanada (9 990 000 neliökilometriä)."];
    let vastaukset = [];
    let esillä = 0;
    let pisteet = 0;

    // Kun aloita-painiketta painetaan, tulee näkyviin ensimmäinen kysymys
    $("#aloita").click(function(){
        $("#alku").addClass("piilossa");
        $("#kysymys1").removeClass("piilossa");
        $("#seuraava").removeClass("piilossa");
    });

    // Seuraava-painike aktivoituu, kun valitaan yksi vaihtoehdoista
    $("[type=radio]").click(function(){
        $("#seuraava").prop("disabled", false);
    });

    // Kun seuraava-painiketta klikataan, nykyinen kysymys sulkeutuu; avautuu seuraava kysymys
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

    // Kun viimeiseen kysymykseen on vastattu
    // Lopeta visa-painike: 
    $("#lopeta_visa").click(function(){
        $("#lopeta_visa").addClass("piilossa");
        $("#lopputulos").removeClass("piilossa");
        $("#yhteenveto").removeClass("piilossa");
        $("#palkinto").removeClass("piilossa");
        $("#lopputulos").html(tulos);
        $(".tulos").html(pisteet);
    
        // Tarkistetaan onko vastaus oikein, 
        //      jos on, tulostetaan check-symboli
        for (let i = 0; i < kysymykset.length; i++) {
            let kysymys_nro = i + 1;
            if (vastaukset[i] === oikeat[i]) {
               $("#oma" + i).html(kysymys_nro + ". " + "<i>" + vastaukset[i] + "</i>"
                    + '<i class="fa fa-check" aria-hidden="true"></i>'); 
               $("#oikea" + i).html(" ");
        //      jos ei, tulostetaan rastisymboli ja kerrotaan oikea vastaus
            } else { 
                $("#oma" + i).html(kysymys_nro + ". " + "<i>" + vastaukset[i] + "</i>"
                    + ' <i class="fa fa-times" aria-hidden="true"></i>');
                $("#oikea" + i).html("<b>Oikea vastaus:</b> " + oikeat[i]);
            }

        $("#oikea" + i).prepend('<a class="selitys" data-container="body" data-toggle="popover" data-placement="right" data-content="' 
            + selitys[i] + '" data-trigger="focus" tabindex="-1"><i class="fa fa-info-circle" aria-hidden="true"></i></a>   ');
        }

        // Kysymysmerkkien popoverit 
        $("[data-toggle=popover]").popover();
       
        // Kuvan tulostus pisteiden määrän perusteella
        if (pisteet === 5) {
            $("#palkinto").html('<img src="img/gold-trophy.png" alt="kultapokaali"></img>');
        } else if (pisteet < 5 && pisteet > 2 ) {
            $("#palkinto").html('<img src="img/silver-trophy.png" alt="hopeapokaali"></img>');
        } else {
            $("#palkinto").html('<img src="img/bronze-trophy.png" alt="pronssipokaali"></img>');
        }

    });

});