// Tekijä: Alina Zinchenko

$(document).ready(function () {

    // Kysymys 1 valinta
    $("[name=question1]").click(function () {
        $(this).next().addClass("valittu");

        let liElem = $(this).parent().parent().children();
        liElem.each(function () {

            $(this).children().first().prop("disabled", true);
        });

    });


    // Kysymys 1 tarkistus: värit, vastaus selitys
    $("#tarkista1").click(function () {

        if ($("#pysähdy1") === checked) {
            $(this).parent().addClass("oikein");
        } else {
            $(this).parent().addClass("väärin");
        }


    });



    // Kysymys 2 valinta
    $("[name=question2]").click(function () {
        $(this).next().addClass("valittu");

        let liElem = $(this).parent().parent().children();
        liElem.each(function () {

            $(this).children().first().prop("disabled", true);
        });

    });


    // Kysymys 3 valinta
    $("[name=question3]").click(function () {
        $(this).next().addClass("valittu");

        let liElem = $(this).parent().parent().children();
        liElem.each(function () {

            $(this).children().first().prop("disabled", true);
        });

    });



    // Kysymys 4 valinta
    $("[name=question4]").click(function () {
        $(this).next().addClass("valittu");

        let liElem = $(this).parent().parent().children();
        liElem.each(function () {

            $(this).children().first().prop("disabled", true);
        });

    });


    // Kysymys 5 valinta
    $("[name=question5]").click(function () {
        $(this).next().addClass("valittu");

        let liElem = $(this).parent().parent().children();
        liElem.each(function () {

            $(this).children().first().prop("disabled", true);
        });

    });
});