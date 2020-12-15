 $(document).ready(function() {

   // Kun vaihtoehto valitaan, 
   //   - lukitaan muut kohdan vastausvaihtoehdot, valintaa ei voi muuttaa
   //   - tarkistetaan heti onko vastaus oikein vai ei,
   //   - merkitään vastaus joko vihreäksi tai punaiseksi,
   //   - tulostetaan vastaava palaute
   
   // KYSYMYS 1
   $("[name=kysymys1]").click(function(){
     let vastaus = $("input[name=kysymys1]:checked").val();
      if (vastaus === "oikein") {
         $(this).parent().addClass("vihreä");
         $("#palaute1").html("<b>Aivan oikein!</b> Pohjoisnapa on maapallon pohjoisin kohta, ei maanosa.");
         $("#palaute1").removeClass("invisible");
       } else {
         $(this).parent().addClass("punainen");
         $("#palaute1").html("Väärin! Oikea vastaus on <b>Pohjoisnapa</b>.");
         $("#palaute1").removeClass("invisible");
      }  
   
      let vastaukset = $(this).parent().parent().children();
      vastaukset.each(function(){
         let valintanappi = $(this).children().first();
         valintanappi.prop("disabled", true); 
  
      });
   });

      // KYSYMYS 2
   $("[name=kysymys2]").click(function(){
      let vastaus = $("input[name=kysymys2]:checked").val();
         if (vastaus === "oikein") {
            $(this).parent().addClass("vihreä");
            $("#palaute2").html("<b>Kyllä!</b> Vuodenaikojen vaihtelu on seurausta sekä maan akselin kallistumisesta että <b>maan kiertoradasta Auringon  ympäri</b>.");
            $("#palaute2").removeClass("invisible");
         } else {
            $(this).parent().addClass("punainen");
            $("#palaute2").html("Ei aivan. Vuodenaikojen vaihtelu johtuu siitä, että <b>maa kiertää aurinkoa</b>.");
            $("#palaute2").removeClass("invisible");
         }  
      
         let vastaukset = $(this).parent().parent().children();
         vastaukset.each(function(){
            let valintanappi = $(this).children().first();
            valintanappi.prop("disabled", true); 
         
         });
   });

   // KYSYMYS 3
      $("[name=kysymys3]").click(function(){
      let vastaus = $("input[name=kysymys3]:checked").val();
         if (vastaus === "oikein") {
            $(this).parent().addClass("vihreä");
            $("#palaute3").html("<b>Oikein!</b> Luode sijaitsee pohjoisen ja lännen välissä. (Englanniksi luodetta kutsutaankin nimellä North-West, eli Pohjoinen-Länsi.)");
            $("#palaute3").removeClass("invisible");
         } else {
            $(this).parent().addClass("punainen");
            $("#palaute3").html("Väärin meni. <b>Luode</b> on oikea vastaus!");
            $("#palaute3").removeClass("invisible");
         }  
      
         let vastaukset = $(this).parent().parent().children();
         vastaukset.each(function(){
            let valintanappi = $(this).children().first();
            valintanappi.prop("disabled", true); 
   
         });
      });

   // KYSYMYS 4
      $("[name=kysymys4]").click(function(){
      let vastaus = $("input[name=kysymys4]:checked").val();
         if (vastaus === "oikein") {
            $(this).parent().addClass("vihreä");
            $("#palaute4").html("<b>Oikein!</b> Välimeri ei ole valtameri.");
            $("#palaute4").removeClass("invisible");
         } else {
            $(this).parent().addClass("punainen");
            $("#palaute4").html("Ei! Näistä vaihtoehdoista kaikki <b>Välimereä</b> lukuunottamatta ovat valtameriä.");
            $("#palaute4").removeClass("invisible");
         }  
      
         let vastaukset = $(this).parent().parent().children();
         vastaukset.each(function(){
            let valintanappi = $(this).children().first();
            valintanappi.prop("disabled", true); 
   
         });
      });

   // KYSYMYS 5
      $("[name=kysymys5]").click(function(){
      let vastaus = $("input[name=kysymys5]:checked").val();
         if (vastaus === "oikein") {
            $(this).parent().addClass("vihreä");
            $("#palaute5").html("<b>Kyllä!</b> Kääntöpiiri on leveyspiiri 23,4 astetta sekä pohjoisella että eteläisellä pallonpuoliskolla.<br>Pohjoisessa sijaitsee Kravun kääntöpiiri, etelässä taas Kauriin kääntöpiiri.");
            $("#palaute5").removeClass("invisible"); 
         } else {
            $(this).parent().addClass("punainen");
            $("#palaute5").html("Oho, pieleen meni.<br><br>Kääntöpiiri on leveyspiiri 23,4 astetta sekä pohjoisella että eteläisellä pallonpuoliskolla.<b>Pohjoisessa sijaitsee Kravun kääntöpiiri</b>, etelässä taas Kauriin kääntöpiiri.");
            $("#palaute5").removeClass("invisible");
         }  
      
         let vastaukset = $(this).parent().parent().children();
         vastaukset.each(function(){
            let valintanappi = $(this).children().first();
            valintanappi.prop("disabled", true); 
   
         });
});


   $("#tarkista").click(function(){
      // Tulostusten tyhjennys
      $("#modal-title").html("");
      $("#modal-body").html("");

      // Lasketaan oikeat/väärät vastaukset, sekä mahd. tyhjät kohdat
      let oikeat = [];
      let väärät = [];
      let vastaamattomat = []; 
         
      
         let vastaus1 = $("input[name=kysymys1]:checked").val();
          if (vastaus1 === "oikein") {
             oikeat.push(vastaus1);
          } else if (vastaus1 === "väärin") {
             väärät.push(vastaus1);
          } else {
            vastaamattomat.push(vastaus1);
          }

          let vastaus2 = $("input[name=kysymys2]:checked").val();
          if (vastaus2 === "oikein") {
             oikeat.push(vastaus2);
          } else if (vastaus2 === "väärin") {
             väärät.push(vastaus2);
          } else {
             vastaamattomat.push(vastaus2);
          }

          let vastaus3 = $("input[name=kysymys3]:checked").val();
          if (vastaus3 === "oikein") {
             oikeat.push(vastaus3);
          } else if (vastaus3 === "väärin") {
             väärät.push(vastaus3);
          } else {
             vastaamattomat.push(vastaus3);
          }
          
          let vastaus4 = $("input[name=kysymys4]:checked").val();
          if (vastaus4 === "oikein") {
             oikeat.push(vastaus4);
          } else if (vastaus4 === "väärin") {
             väärät.push(vastaus4);
          } else {
             vastaamattomat.push(vastaus4);
          }
          
          let vastaus5 = $("input[name=kysymys5]:checked").val();
          if (vastaus5 === "oikein") {
             oikeat.push(vastaus5);
          } else if (vastaus5 === "väärin") {
             väärät.push(vastaus5);
          } else {
             vastaamattomat.push(vastaus5);
          }
          
// Virheilmoitus, jos johonkin ei ole vastattu
         if (vastaamattomat.length > 0) {
            $("#modal-title").html("Virhe:");
            $("#modal-body").html("Sinun tulee ensin vastata kaikkiin kohtiin!");
            $("#ilmoitus").modal("show");
            return;
         } else {
            } // Tulostetaan 5 tähteä vastausten perusteella
            for (let j = 0; j < oikeat.length; j++) {
               $("#modal-body").append('<i class="fa fa-star" aria-hidden="true"></i>');
            } 
            for (let i = 0; i < väärät.length; i++) {
               $("#modal-body").append('<i class="fa fa-star-o" aria-hidden="true"></i>');
            }   
            $("#modal-title").html("Arvosana:");
            $("#modal-body").addClass("big_font text-center");
            $("#ilmoitus").modal("show");
   
      }); 

});

