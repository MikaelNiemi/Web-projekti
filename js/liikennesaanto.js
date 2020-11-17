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


    // Kysymys 1 tarkistus: värit, vastaus selitys
    $("#tarkista1").click(function () {

        /*      $("#pysähdy1").next().addClass("oikein");
                $("#juokse1").next().addClass("väärin");
                $("#mene1").next().addClass("väärin"); */



        if ($("#pysähdy1").is(":checked")) {
            $("#pysähdy1").next().addClass("oikein");
            $("#vastaus1").removeClass("piilossa").html("Hyvä!");

        } else if ($("#juokse1").is(":checked")) {
            $("#juokse1").next().addClass("väärin");
            $("#pysähdy1").next().addClass("oikein");
            $("#vastaus1").removeClass("piilossa").html("Väärin! Odotat vihreän valon syttymistä.");

        } else {
            $("#mene1").next().addClass("väärin");
            $("#pysähdy1").next().addClass("oikein");
            $("#vastaus1").removeClass("piilossa").html("Väärin! Odotat vihreän valon syttymistä.");
        }
    });

    //Kysymys 2 tarkistus
    $("#tarkista2").click(function () {
        if ($("#odota2").is(":checked")) {
            $("#odota2").next().addClass("oikein");
            $("#vastaus2").removeClass("piilossa").html("Hyvä!");

        } else if ($("#juokse2").is(":checked")) {
            $("#juokse2").next().addClass("väärin");
            $("#odota2").next().addClass("oikein");
            $("#vastaus2").removeClass("piilossa").html("Väärin! Odotat kunnes auto pysähtyy, katsot molempiin suuntiin ja varmistat, että tien ylitys" +
                "on turvallinen.");

        } else {
            $("#mene1").next().addClass("väärin");
            $("#pysähdy1").next().addClass("oikein");
            $("#vastaus1").removeClass("piilossa").html("Väärin! Odotat kunnes auto pysähtyy, katsot molempiin suuntiin ja varmistat, että tien ylitys" +
                "on turvallinen.");
        }
    });

    //Kysymys 3 tarkistus
    $("#tarkista3").click(function () {
        if ($("#päässä3").is(":checked")) {
            $("#päässä3").next().addClass("oikein");
            $("#vastaus3").removeClass("piilossa").html("Hyvä!");

        } else if ($("#kotona3").is(":checked")) {
            $("#kotona3").next().addClass("väärin");
            $("#päässä3").next().addClass("oikein");
            $("#vastaus3").removeClass("piilossa").html("Väärin! Kypärän pitää olla päässä huolellisesti kiinnitettynä.");

        } else {
            $("#roikkumassa3").next().addClass("väärin");
            $("#päässä3").next().addClass("oikein");
            $("#vastaus3").removeClass("piilossa").html("Väärin! Kypärän pitää olla päässä huolellisesti kiinnitettynä.");
        }
    });

    //Kysymys 4 tarkistus
    $("#tarkista4").click(function () {
        if ($("#soittokello4").is(":checked")) {
            $("#soittokello4").next().addClass("oikein");
            $("#vastaus4").removeClass("piilossa").html("Hyvä!");

        } else if ($("#kissankello4").is(":checked")) {
            $("#kissankello4").next().addClass("väärin");
            $("#soittokello4").next().addClass("oikein");
            $("#vastaus4").removeClass("piilossa").html("Väärin! Varoitat jalankulkijaa soittamalla" + 
            " soittokelloa ja varmistat, että ohittaminen on turvallista.");

        } else {
            $("#ohita4").next().addClass("väärin");
            $("#soittokello4").next().addClass("oikein");
            $("#vastaus4").removeClass("piilossa").html("Väärin! Varoitat jalankulkijaa soittamalla" +
            " soittokelloa ja varmistat, että ohittaminen on turvallista.");
        }
    });

    //Kysymys 5 tarkistus
    $("#tarkista5").click(function () {
        if ($("#joo5").is(":checked")) {
            $("#joo5").next().addClass("oikein");
            $("#vastaus5").removeClass("piilossa").html("Hyvä!");

        } else if ($("#ei5").is(":checked")) {
            $("#ei5").next().addClass("väärin");
            $("#joo5").next().addClass("oikein");
            $("#vastaus5").removeClass("piilossa").html("Väärin! Uuden lain mukaan pitää olla etu- ja takavalot.");

        } else {
            $("#etuvalo5").next().addClass("väärin");
            $("#joo5").next().addClass("oikein");
            $("#vastaus5").removeClass("piilossa").html("Väärin! Uuden lain mukaan pitää olla etu- ja takavalot.");
        }
    });


});


// Source: https://stackoverflow.com/questions/2272507/find-out-whether-radio-button-is-checked-with-jquery