$(document).ready(function() {

    let vastaukset = []
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    
   // kansallislintu-->
   
    $("[name=kansallislintu]").click(function(){

        let valinta = $("input[name=kansallislintu]:checked").val()
        if (valinta === "1") {
            $('#tulos').parent().addClass("vastaus_laatikko");
            $("#tulos").html("<br>" + "Oikein!" + "</br>")
            $("#tulos").removeClass("invisible")
            vastaukset.push(1)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("oikea_vastaus");
        } else {
            $("#tulos").html("<br>" + "Väärin!" + "</br>" + "Suomen kansallislintu on joutsen")
            $("#tulos").removeClass("invisible")
            $('#tulos').parent().addClass("vastaus_laatikko");
            $('#joutsen').parent().addClass("oikea_vastaus");
            vastaukset.push(0)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("vaara_vastaus");
        }

        let valinnat1 = $("[name=kansallislintu]");
        $(valinnat1).each(function(){
            valinnat1.prop("disabled", true)
        })
    })

    //nopein lintu -->

    $("[name=nopeinlintu]").click(function(){

        let valinta = $("input[name=nopeinlintu]:checked").val()
        if (valinta === "1") {
            $('#tulos2').parent().addClass("vastaus_laatikko");
            $("#tulos2").html("<br>" + "Oikein!" + "</br>")
            $("#tulos2").removeClass("invisible")
            vastaukset.push(1)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("oikea_vastaus");
        } else {
            $("#tulos2").html("<br>" + "Väärin!" + "</br>" + "Maailman nopein lintu on muuttohaukka")
            $('#tulos2').parent().addClass("vastaus_laatikko");
            $("#tulos2").removeClass("invisible")
            $('#muuttohaukka').parent().addClass("oikea_vastaus");
            vastaukset.push(0)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("vaara_vastaus");
        }

        let valinnat2 = $("[name=nopeinlintu]");
        $(valinnat2).each(function(){
            valinnat2.prop("disabled", true)
        })
    })

   //Rauhan symboli-->

    $("[name=rauhanlintu]").click(function(){

        let valinta = $("input[name=rauhanlintu]:checked").val()
        if (valinta === "1") {
            $('#tulos3').parent().addClass("vastaus_laatikko");
            $("#tulos3").html("<br>" + "Oikein!" + "</br>")
            $("#tulos3").removeClass("invisible")
            vastaukset.push(1)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("oikea_vastaus");
        } else {
            $('#tulos3').parent().addClass("vastaus_laatikko");
            $("#tulos3").html("<br>" + "Väärin!" + "</br>" + "Kyyhkyä pidetään rauhan symboolina")
            $("#tulos3").removeClass("invisible")
            $('#kyyhky').parent().addClass("oikea_vastaus");
            vastaukset.push(0)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("vaara_vastaus");
        }

        let valinnat3 = $("[name=rauhanlintu]");
        $(valinnat3).each(function(){
            valinnat3.prop("disabled", true)
        })
    })

    //Mistä kiivit on-->

    $("[name=kiivitmista]").click(function(){

        let valinta = $("input[name=kiivitmista]:checked").val()
        if (valinta === "1") {
            $('#tulos4').parent().addClass("vastaus_laatikko");
            $("#tulos4").html("<br>" + "Oikein!" + "</br>")
            $("#tulos4").removeClass("invisible")
            vastaukset.push(1)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("oikea_vastaus");
        } else {
            $('#tulos4').parent().addClass("vastaus_laatikko");
            $("#tulos4").html("<br>" + "Väärin!" + "</br>" + "Kiivit ovat Uudesta-Seelannista")
            $("#tulos4").removeClass("invisible")
            $('#uus_seelanti').parent().addClass("oikea_vastaus");
            vastaukset.push(0)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("vaara_vastaus");
        }

        let valinnat4 = $("[name=kiivitmista]");
        $(valinnat4).each(function(){
            valinnat4.prop("disabled", true)
        })
    })

    //Pöllön elinikä-->
    
    $("[name=pollonika]").click(function(){

        let valinta = $("input[name=pollonika]:checked").val()
        if (valinta === "1") {
            $('#tulos5').parent().addClass("vastaus_laatikko");
            $("#tulos5").html("<br>" + "Oikein!" + "</br>")
            $("#tulos5").removeClass("invisible")
            vastaukset.push(1)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("oikea_vastaus");
        } else {
            $('#tulos5').parent().addClass("vastaus_laatikko");
            $("#tulos5").html("<br>" + "Väärin!" + "</br>" + "Pöllöt elävät noin 10-vuotiaiksi")
            $("#tulos5").removeClass("invisible")
            $('#kymmenen').parent().addClass("oikea_vastaus");
            vastaukset.push(0)
            $('#total').html(vastaukset.reduce(reducer) + "/5")
            $(this).parent().addClass("vaara_vastaus");
        }

        let valinnat5 = $("[name=pollonika]");
        $(valinnat5).each(function(){
            valinnat5.prop("disabled", true)
        })
    })

    $('#uusi_yritys').click(function() {
        location.reload();
        $('html,body').scrollTop(0);
    })
}) 