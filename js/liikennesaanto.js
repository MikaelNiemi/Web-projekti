// Tekijä: Alina Zinchenko

$(document).ready(function () {

    // Kertavalinnat kaikkiin valintanappeihin

    $(".kysymys").click(function () {
        $(this).next().addClass("valittu");

        let liElem = $(this).parent().parent().children();
        liElem.each(function () {

            $(this).children().first().prop("disabled", true);
        });

    });

    // lasketaan oikeita vastauksia
    let hyvä = 0;

    // Kysymys 1 tarkistus: värit, vastaus selitys
    $("#tarkista1").click(function () {
        if ($("#pysähdy1").is(":checked")) {
            $("#pysähdy1").next().addClass("oikein");
            $("#vastaus1").removeClass("piilossa").html("<i class='fa fa-star fa-2x palkinto' aria-hidden='true'></i>Hyvä!");
            hyvä++;

        } else if ($("#juokse1").is(":checked")) {
            $("#juokse1").next().addClass("väärin");
            $("#pysähdy1").next().addClass("oikein");
            $("#vastaus1").removeClass("piilossa").html("Väärin! Odotat vihreän valon syttymistä.");

        } else if ($("#mene1").is(":checked")) {
            $("#mene1").next().addClass("väärin");
            $("#pysähdy1").next().addClass("oikein");
            $("#vastaus1").removeClass("piilossa").html("Väärin! Odotat vihreän valon syttymistä.");
        } else {
            return alert("Kysymys 1: Vastaus puuttuu");
        }
    });

    //Kysymys 2 tarkistus
    $("#tarkista2").click(function () {
        if ($("#odota2").is(":checked")) {
            $("#odota2").next().addClass("oikein");
            $("#vastaus2").removeClass("piilossa").html("<i class='fa fa-star fa-2x palkinto' aria-hidden='true'></i>Hyvä!");
            hyvä++;

        } else if ($("#juokse2").is(":checked")) {
            $("#juokse2").next().addClass("väärin");
            $("#odota2").next().addClass("oikein");
            $("#vastaus2").removeClass("piilossa").html("Väärin! Odotat kunnes auto pysähtyy, katsot molempiin suuntiin ja varmistat, että tien ylitys" +
                "on turvallinen.");

        } else if ($("#katso2").is(":checked")) {
            $("#katso2").next().addClass("väärin");
            $("#odota2").next().addClass("oikein");
            $("#vastaus2").removeClass("piilossa").html("Väärin! Odotat kunnes auto pysähtyy, katsot molempiin suuntiin ja varmistat, että tien ylitys" +
                "on turvallinen.");
        } else {
            return alert("Kysymys 2: Vastaus puuttuu");
        }
    });

    //Kysymys 3 tarkistus
    $("#tarkista3").click(function () {
        if ($("#päässä3").is(":checked")) {
            $("#päässä3").next().addClass("oikein");
            $("#vastaus3").removeClass("piilossa").html("<i class='fa fa-star fa-2x palkinto' aria-hidden='true'></i>Hyvä!");
            hyvä++;

        } else if ($("#kotona3").is(":checked")) {
            $("#kotona3").next().addClass("väärin");
            $("#päässä3").next().addClass("oikein");
            $("#vastaus3").removeClass("piilossa").html("Väärin! Kypärän pitää olla päässä huolellisesti kiinnitettynä.");

        } else if ($("#roikkumassa3").is(":checked")) {
            $("#roikkumassa3").next().addClass("väärin");
            $("#päässä3").next().addClass("oikein");
            $("#vastaus3").removeClass("piilossa").html("Väärin! Kypärän pitää olla päässä huolellisesti kiinnitettynä.");
        } else {
            return alert("Kysymys 3: Vastaus puuttuu");
        }
    });

    //Kysymys 4 tarkistus
    $("#tarkista4").click(function () {
        if ($("#soittokello4").is(":checked")) {
            $("#soittokello4").next().addClass("oikein");
            $("#vastaus4").removeClass("piilossa").html("<i class='fa fa-star fa-2x palkinto' aria-hidden='true'></i>Hyvä!");
            hyvä++;

        } else if ($("#kissankello4").is(":checked")) {
            $("#kissankello4").next().addClass("väärin");
            $("#soittokello4").next().addClass("oikein");
            $("#vastaus4").removeClass("piilossa").html("Väärin! Varoitat jalankulkijaa soittamalla" + 
            " soittokelloa ja varmistat, että ohittaminen on turvallista.");

        } else if($("#ohita4").is(":checked")) {
            $("#ohita4").next().addClass("väärin");
            $("#soittokello4").next().addClass("oikein");
            $("#vastaus4").removeClass("piilossa").html("Väärin! Varoitat jalankulkijaa soittamalla" +
            " soittokelloa ja varmistat, että ohittaminen on turvallista.");
        } else {
            return alert("Kysymys 4: Vastaus puuttuu");
        }
    });

    //Kysymys 5 tarkistus
    $("#tarkista5").click(function () {
        if ($("#joo5").is(":checked")) {
            $("#joo5").next().addClass("oikein");
            $("#vastaus5").removeClass("piilossa").html("<i class='fa fa-star fa-2x palkinto' aria-hidden='true'></i>Hyvä!");
            hyvä++;

        } else if ($("#ei5").is(":checked")) {
            $("#ei5").next().addClass("väärin");
            $("#joo5").next().addClass("oikein");
            $("#vastaus5").removeClass("piilossa").html("Väärin! Uuden lain mukaan pitää olla etu- ja takavalot.");

        } else if ($("#etuvalo5").is(":checked")) {
            $("#etuvalo5").next().addClass("väärin");
            $("#joo5").next().addClass("oikein");
            $("#vastaus5").removeClass("piilossa").html("Väärin! Uuden lain mukaan pitää olla etu- ja takavalot.");
        } else {
            return alert("Kysymys 5: Vastaus puuttuu");
        }
    });

    $("#yhteenveto").click(function(){
        if (hyvä === 5) {
            alert("Onnea, sait" + hyvä + "/5! :)");
        } else {
            alert("Vastattu oikein: " + hyvä + "/5. Yritä uudelleen.");
        }

    });

});


// Lähde: https://stackoverflow.com/questions/2272507/find-out-whether-radio-button-is-checked-with-jquery