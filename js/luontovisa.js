
/*
Visaan saatu inspiraatiota tältä videolta: https://www.youtube.com/watch?v=riDzcEQbX6k
Koodia ei ole kuitenkaan suoraan kopioitu videosta vaan kaikki on sovellettu itse omiin tarkoituksiin.
Tekijä: Jyri Ahola
*/


//Kysymykset ja vastaukset taulukossa.
const questions = [
    {
        question: "Millä suomen linnuista on maailman pisin muuttomatka?",
        answer: [{ text: "Muuttohaukka", correct: false }, { text: "Pääskynen", correct: false },
        { text: "Lapintiira", correct: true }, { text: "Kurki", correct: false }]
    },

    {
        question: "Mikä on suomen suurin nisäkäs?",
        answer: [{ text: "Karhu", correct: false }, { text: "Hirvi", correct: true },
        { text: "Ihminen", correct: false }, { text: "Susi", correct: false }]
    },
    {
        question: "Mikä on suomen yleisin kalalaji?",
        answer: [{ text: "Ahven", correct: true }, { text: "Lahna", correct: false },
        { text: "Särki", correct: false }, { text: "Hauki", correct: false }]
    },
    {
        question: "Mikä suomen pienin lintulaji?",
        answer: [{ text: "Peukaloinen", correct: false }, { text: "Kuusitiainen", correct: false },
        { text: "Pikkuvarpunen", correct: false }, { text: "Hippiäinen", correct: true }]
    },
    {
        question: "Mikä suomen yleisin lintulaji?",
        answer: [{ text: "Talitiainen", correct: false }, { text: "Leppälintu", correct: false },
        { text: "Pajulintu", correct: true }, { text: "Varpunen", correct: false }]
    }
]

//Lisätiedot oikeasta vastauksesta taulukossa.
const info = [
    'Pisimmän muuttomatkan maailmassa tekee lapintiira.<br>Lapintiira voi lentää jopa 81 000 kilometrin muuttomatkan.<br>Arvioiden mukaan lapintiira lentää koko elämänsä aikana 2.4 miljoonaa kilometria.',

    'Suomen suurin nisäkäs on hirvi. <br>Aikuinen hirvi voi kasvaa jopa 800kg painoiseksi ja kolme metriä pitkäksi. ',

    'Suomen yleisin kalalaji on ahven. Ahvenen levinneisyys kattaa lähes koko suomen.<br>Ainoastaan pohjoinen käsivarsi on paikka jossa ahventa ei tavata. ',

    'Suomen pienin lintulaji on hippiäinen. Hippiäisen koko on 8,5cm - 9,5cm ja paino 4,5-7g. <br> Hippiäinen on myös euroopan pienin lintu. ',

    'Suomen yleisin lintulaji on pajulintu. <br>Pajulintu on levinnyt koko maan alueelle ja suomessa pesii nykyisin 7 - 11 miljoonaa paria. '

]
//Tulostettavat kuvat taulukossa.
const images = [
    '<img src="img/lapintiira-web.jpg" class="img-fluid" alt=""/>',
    '<img src="img/hirvi-web.jpg" class="img-fluid" alt=""/>',
    '<img src="img/ahven-web.jpg" class="img-fluid" alt=""/>',
    '<img src="img/hippiainen-web.jpg" class="img-fluid" alt=""/>',
    '<img src="img/pajulintu-web.jpg" class="img-fluid" alt=""/>'
]

//Palkintojen kuvat taulukossa.
const prizes = [
    '<img src="img/trophy-web.png" class="img-fluid" alt=""/>',
    '<img src="img/thumbsup-web.png" class="img-fluid" alt=""/>',
    '<img src="img/thumbsdown-web.png" class="img-fluid" alt=""/>',
]



$(document).ready(function () {

    //Kopioidaan taulukot jotta niitä voi muokata ja tarvittaessa palauttaa alkuperäiset tiedot.
    let questions2 = [...questions];
    let info2 = [...info];
    let images2 = [...images];

    //Luodaan muuttujat käydyille kysymyksille ja oikein vastatuille kysymyksille.
    let vastattu = 0
    let oikein = 0

    //Funktio kysymysten järjestyksen satunnaistamiseksi
    function setQuestion() {
        let random = getRndInteger(0, questions2.length - 1)
        $("#start-btn").addClass("hide")
        $("#info").addClass("hide")
        $("#answers").removeClass("hide")
        $("#question").removeClass("hide")

        $("#question").html(questions2[random].question)
        $("#answer").html(info2[random])
        $("#image").html(images2[random])

        for (let i = 0; i < 4; i++) {
            $(`#answer-${i}`).removeClass("correct")
            $(`#answer-${i}`).removeClass("false")
            $(`#answer-${i}`).html(questions2[random].answer[i].text)
            if (questions2[random].answer[i].correct === true) {
                $(`#answer-${i}`).addClass("correct")
            } else {
                $(`#answer-${i}`).addClass("false")
            }
        }
        questions2.splice(random, 1)
        info2.splice(random, 1)
        images2.splice(random, 1)
    };

    /*
    Funktio tiettyjen ominaisuuksien nollaamiseksi/piilottamiseksi. 
    Käytetään esim. Kun käyttäjä painaa "Seuraava nappia"
    */
    function resetProps() {
        $(".correct").prop("disabled", false)
        $(".false").prop("disabled", false)
        $(".correct").css("background-color", "")
        $(".false").css("background-color", "")
        $("#answer").addClass("hide")
        $("#image").addClass("hide")
        $("#next").addClass("hide")
    };


    //Funktio satunnaisluvun generoimiseksi
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //Visan aloitus.
    $("#start-btn").click(function () {
        setQuestion()
    });


    //Funktio vastauksille. Riippuen siitä onko vastaus väärin vai oikein, värjätään tulos sen mukaisesti.
    $("#answers button").click(function () {
        $(".correct").prop("disabled", true)
        $(".false").prop("disabled", true)
        $("#answer").removeClass("hide")
        $("#next").removeClass("hide")
        $("#image").removeClass("hide")

        if ($(this).hasClass("correct")) {
            $(this).css("background-color", "#19ba57")
            oikein++
        } else {
            $(this).css("background-color", "#bd3b36")
        }
    });

    /* Funktio "Seuraava" napille. Jos vastattu muuttuja on tietyssä pisteessä, siirrytään esittämään visan tulokset ja palkinto. 
    Muussa tapauksessa vastattu muuttujaa korotetaan ja siirrytään seuraavaan kysymykseen. */
    $("#next-btn").click(function () {
        if (vastattu === 4) {
            $("#answers").addClass("hide")
            $("#question").addClass("hide")
            $("#answer").addClass("hide")
            $("#next").addClass("hide")
            $("#image").addClass("hide")
            $("#reset").removeClass("hide")
            $("#prize").removeClass("hide")
            $("#results").removeClass("hide")
            $("#results").append(`<h1>Sait ${oikein}/5 oikein!</h1>`)
            if (oikein === 5) {
                $("#prize").append(prizes[0])
                $("#results").append("Hienoa työtä! Olet oikea luontomestari!")
            } else if (oikein < 5 && oikein > 2) {
                $("#prize").append(prizes[1])
                $("#results").append("Melkein kaikki oikein! Yritä vielä uudestaan jos saisit ensi kerralla täydet pisteet!")
            } else {
                $("#prize").append(prizes[2])
                $("#results").append("Vastauksissa on vielä parantamisen varaa. Yritä uudelleen jos seuraava kerta menisi jo paremmin!")
            }
        } else {
            vastattu++
            console.log(vastattu)
            resetProps()
            setQuestion()
        }


    });

    //Funktio visan nollaamiselle kun painetaan "Uudelleen" nappia.
    $("#reset").click(function () {
        $("#results").addClass("hide")
        $("#prize").addClass("hide")
        $("#prize").html("")
        $("#results").html("")
        $("#reset").addClass("hide")
        $("#start-btn").removeClass("hide")
        $("#info").removeClass("hide")
        resetProps()
        vastattu = 0
        oikein = 0
        questions2 = [...questions];
        info2 = [...info];
        images2 = [...images];
    });


})