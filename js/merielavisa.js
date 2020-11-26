const oikein = "Oikein"
const vaarin = "Väärin"

$(document).ready(function(){

    $("#nappi1").click(function(){
        let valinta = $("input[name=vaihtoehto]:checked").val();

        if (valinta === "3") {
            $("#vastaus").html(oikein);
        } else {
            $("#vastaus").html(vaarin);
        }
    });

    $("[name=vaihtoehto]").click(function(){
        $("#vastaus").html("");
    });
});