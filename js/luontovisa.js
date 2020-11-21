
//Kysymykset ja vastaukset arrayssa
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
        answer: [{ text: "Särki", correct: false }, { text: "Lahna", correct: false },
        { text: "Ahven", correct: true }, { text: "Hauki", correct: false }]
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

//Lisätiedot oikeasta vastauksesta arrayssa
const tietoa = [
    'Pisimmän muuttomatkan maailmassa tekee lapintiira.<br>Lapintiira voi lentää jopa 81 000 kilometrin muuttomatkan.<br>Arvioiden mukaan lapintiira lentää koko elämänsä aikana 2.4 miljoonaa kilometria.',

    'Suomen suurin nisäkäs on hirvi. <br>Aikuinen hirvi voi kasvaa jopa 800kg painoiseksi ja kolme metriä pitkäksi. ',

    'Suomen yleisin kalalaji on ahven. Ahvenen levinneisyys kattaa lähes koko suomen.<br>Ainoastaan pohjoinen käsivarsi on paikka jossa ahventa ei tavata. ',

    'Suomen pienin lintulaji on hippiäinen. Hippiäisen koko on 8,5cm - 9,5cm ja paino 4,5-7g. <br> Hippiäinen on myös euroopan pienin lintu. ',

    'Suomen yleisin lintulaji on pajulintu. <br>Pajulintu on levinnyt koko maan alueelle ja suomessa pesii nykyisin 7 - 11 miljoonaa paria. '

]

const kuvat = [
    '<img src="img/lapintiira-web.jpg" class="img-fluid" alt=""/>',
    '<img src="img/hirvi-web.jpg" class="img-fluid" alt=""/>',
    '<img src="img/ahven-web.jpg" class="img-fluid" alt=""/>',
    '<img src="img/hippiainen-web.jpg" class="img-fluid" alt=""/>',
    '<img src="img/pajulintu-web.jpg" class="img-fluid" alt=""/>'
]


const palkinnot = [
    '<img src="img/trophy-web.png" class="img-fluid" alt=""/>',
    '<img src="img/thumbsup-web.png" class="img-fluid" alt=""/>',
    '<img src="img/thumbsdown-web.png" class="img-fluid" alt=""/>',
]


let vastattu = 0
let oikein = 0

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funktio kysymyksen ja vastausten asettamiseen
function setQuestion() {
    let random = getRndInteger(0, questions.length - 1)
    $("#start-btn").addClass("hide")
    $("#answers").removeClass("hide")
    $("#question").removeClass("hide")
    $("#question").html(questions[random].question)
    $("#vastaus").html(tietoa[random])
    $("#kuva").html(kuvat[random])

    for (let i = 0; i < 4; i++) {
        //Poistetaan vanhat luokat vastauksista ensin
        $(`#answer-${i}`).removeClass("correct")
        $(`#answer-${i}`).removeClass("false")
        //Lisätään uudet luokat vastauksille sen mukaan onko vastaus oikein vain väärin
        $(`#answer-${i}`).html(questions[random].answer[i].text)
        if (questions[random].answer[i].correct === true) {
            $(`#answer-${i}`).addClass("correct")
        } else {
            $(`#answer-${i}`).addClass("false")
        }
    }
    questions.splice(random, 1)
    tietoa.splice(random, 1)
    kuvat.splice(random, 1)
};

function resetProps() {
    $(".correct").prop("disabled", false)
    $(".false").prop("disabled", false)
    $(".correct").css("background-color", "")
    $(".false").css("background-color", "")
    $("#vastaus").addClass("hide")
    $("#kuva").addClass("hide")
    $("#next").addClass("hide")
};


$(document).ready(function () {
    //Visan aloitus
    $("#start-btn").click(function () {
        setQuestion()
    })

    //Funktio vastauksille
    $("#answers button").click(function () {
        $(".correct").prop("disabled", true)
        $(".false").prop("disabled", true)
        $("#vastaus").removeClass("hide")
        $("#next").removeClass("hide")
        $("#kuva").removeClass("hide")

        if ($(this).hasClass("correct")) {
            $("#correct").removeClass("hide")
            $(this).css("background-color", "#19ba57")
            oikein++
        } else {
            $("#wrong").removeClass("hide")
            $(this).css("background-color", "#bd3b36")
        }
    })

    $("#next").click(function () {
        if (vastattu === 4) {
            $("#answers").addClass("hide")
            $("#question").addClass("hide")
            $("#vastaus").addClass("hide")
            $("#next").addClass("hide")
            $("#reset").removeClass("hide")
            $("#kuva").addClass("hide")
            $("#prize").removeClass("hide")
            $("#results").append(`<h1>Sait ${oikein}/5 oikein!</h1>`)
            if(oikein === 5){
                $("#prize").append(palkinnot[0])
                $("#results").append("Hienoa työtä! Olet oikea luontomestari!")
            }else if(oikein < 5 && oikein > 2){
                $("#prize").append(palkinnot[1])
                $("#results").append("Melkein kaikki oikein! Yritä vielä uudestaan jos saisit ensi kerralla täydet pisteet!")
            }else{
                $("#prize").append(palkinnot[2])
                $("#results").append("Vastauksissa on vielä parantamisen varaa. Yritä uudelleen jos seuraava kerta menisi jo paremmin!")
            }
        } else {
            vastattu++
            console.log(vastattu)
            resetProps()
            setQuestion()
        }


    })



})