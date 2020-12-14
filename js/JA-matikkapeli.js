
//Tekijä: Jyri Ahola

//Listaus laskujen symboleista, maksimi laskualueesta ja palkinnoista.
const operators = ["+", "-", "*", "/"]
const maxvalue = [100, 100, 10, 100]
const prizes = [
    '<img src="img/trophy-web.png" class="img-fluid" alt=""/>',
    '<img src="img/thumbsup-web.png" class="img-fluid" alt=""/>',
    '<img src="img/thumbsdown-web.png" class="img-fluid" alt=""/>',
]


$(document).ready(function () {
    $("#answerField").val("")
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

//Luodaan muuttujat 
    let questions = 0
    let left = 0
    let answered = 0
    let correct = 0

    //Arvotaan satunnainen laskutoimitus
    function getCalculation() {
        let num1 = 0
        let num2 = 0
        let loop = true
        $("#math").html("")
        let random = getRndInteger(0, operators.length - 1)
        let operator = operators[random]
        //Jos laskutoimitus on jakolasku, arvotaan uusia numeroita kunnes jakojäännös on 0.
        if (random === 3) {
            while (loop === true) {
                num1 = getRndInteger(2, maxvalue[random])
                num2 = getRndInteger(2, 10)
                if (num1 % num2 === 0) {
                    loop = false
                }
            }

        } else {
            num1 = getRndInteger(1, maxvalue[random])
            num2 = getRndInteger(1, maxvalue[random])
        }
        //Jos laskutoimitus on vähennyslasku ja vähentäjä on suurempi entä vähennettävä, vaihdetaan nämä päittäin.
        if (random == 1) {
            if (num1 < num2) {
                num1 = num1 + num2
                num2 = num1 - num2
                num1 = num1 - num2
            }
        }
        $("#math").html(`${num1} ${operator} ${num2}`)
    }

    //Luodaan kysymysten määrä ja aloitetaan peli.
    $("#start-btn").click(function () {
        if ($("#answerField").val() == "") {
            alert("Syötä kenttään montako kysymystä haluat.")
            return
        }
        $("#info").addClass("hide")
        $("#start-btn").addClass("hide")
        $("#answer-btn").removeClass("hide")
        questions = Number($("#answerField").val())
        left = questions - 1
        $("#answerField").val("")
        console.log()
        getCalculation()
        $("#questions").html(`Kysymyksiä jäljellä ${left}`)
    })


    //Siirrytään seuraavaan laskutoimitukseen. Samassa funktiossa on myös pelin lopettamisen toiminto. 
    //Jos vastauksien sekä kysymyksien määrä täsmää niin tulostetaan lopputulos ja sopiva palkinto.
    $("#next-btn").click(function () {
        $("#rightAnswer").html("")
        $("#math").html("")
        $("#correct").addClass("hide")
        $("#wrong").addClass("hide")
        $("#answerField").attr("Disabled", false)
        answered++
        left--
        if (answered == questions) {
            $("#next-btn").addClass("hide")
            $("#answerField").addClass("hide")
            $("#questions").html(`Vastasit ${correct}/${questions} oikein!`)
            $("#reset").removeClass("hide")
            if(correct > (80/100)*questions){
                $("#prize").html(prizes[0])
            }else if(correct >= (50/100)*questions){
                $("#prize").html(prizes[1])
            }else{
                $("#prize").html(prizes[2])
            }
        } else {
            $("#next-btn").addClass("hide")
            $("#answer-btn").removeClass("hide")
            $("#questions").html(`Kysymyksiä jäljellä ${left}`)
            getCalculation()
            $("#answerField").val("")
        }

    })
    //Tarkistetaan käyttäjän vastaus ja tulostetaan onko vastaus oikein vai väärin
    $("#answer-btn").click(function () {
        let calculation = eval($("#math").text())
        let answer = $("#answerField").val()
        if ($("#answerField").val() == "") {
            alert("Syötä vastauksesi.")
            return
        }
        $("#answer-btn").addClass("hide")
        $("#next-btn").removeClass("hide")
        $("#answerField").attr("Disabled", true)
        if (answer == calculation) {
            $("#correct").removeClass("hide")
            correct++
        } else {
            $("#wrong").removeClass("hide")
            $("#rightAnswer").removeClass("hide")
            $("#rightAnswer").html(calculation)
        }

    })

    //Funktio pelin uudelleenaloittamiseen
    $("#reset").click(function () {
        $("#reset").addClass("hide")
        $("#info").removeClass("hide")
        $("#start-btn").removeClass("hide")
        $("#answerField").removeClass("hide")
        $("#answerField").val("")
        $("#questions").html("")
        $("#prize").html("")
        questions = 0
        left = 0
        answered = 0
        correct = 0

    })
})



