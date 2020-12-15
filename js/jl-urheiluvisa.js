//Jani Leskelä

$(document).ready(function(){

    

    $(".choice").click(function(){
        //Lukitsee vastauksen ja poistaa vastauksen vaihtamisen mahdollisuuden
        let arvo = $(this).attr("name")
        let valinta = "[name=" + arvo + "]";
        $(valinta).prop("disabled",true);
        
    });
    // Paljastaa selitystekstin
    $(".choice").click(function(){
        $(this).parent().parent().next().show();

        let arvo = $(this).attr("name");
        $("#" + arvo).show();
    });
    $(".choice").click(function(){
        
        let oikein = Number($(this).val());
        if(oikein === 1){
            $(this).parent().addClass("right")
        }else {
            $(this).parent().addClass("wrong")
            let arvo = $(this).attr("name");
            let oikea = "[name=" + arvo + "][value=1]";
            $(oikea).parent().addClass("bold");
        }
    })
    // oikeiden vastauksien laskeminen
    let oikein = 0;

    $("#tulos").click(function(){

        $("#tulos").prop("disabled",true);

        if($("#uk1a").is(":checked")){
            oikein++
        }
        if($("#uk1b").is(":checked")){
            oikein++
        }
        if($("#uk2c").is(":checked")){
            oikein++
        }
        if($("#uk2d").is(":checked")){
            oikein++
        }
         if($("#uk3e").is(":checked")){
            oikein++
        }
        
       // tulostus
        if(oikein <= 3){
            $("#tulostus").html("Sait " + oikein + "/5 " + "oikein. Tässä urheiluvisassa sinulla on vielä parantamisen varaa! <i class='fa fa-star fa-2x' aria-hidden='true'></i>")
        }
        if(oikein === 4){
            $("#tulostus").html("Hienoa! Sait " + oikein + "/5 " + "oikein. Olet pistettä vaille urheiluvisan mestari! <i class='fa fa-star-half-o fa-3x' aria-hidden='true'></i>")
        }
        if(oikein === 5){
            $("#tulostus").html("Mahtavaa! Sait " + oikein + "/5 " + "oikein. Olet urheiluvisan mestari! <i class='fa fa-star-o fa-4x' aria-hidden='true'></i>")
        }
    });
    $("#uudestaan").click(function(){
        location.reload();
    });
});