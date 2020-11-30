
const operators = ["+", "-", "*", "/"]
const maxvalue = [100, 100, 10, 100]


$(document).ready(function () {
    $("#answerField").val("")
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let questions = 0
    let left = 0
    let answered = 0
    let correct = 0

    function getCalculation() {
        let num1 = 0
        let num2 = 0
        let loop = true
        $("#math").html("")
        let random = getRndInteger(0, operators.length - 1)
        let operator = operators[random]
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

        if (random == 1) {
            if (num1 < num2) {
                num1 = num1 + num2
                num2 = num1 - num2
                num1 = num1 - num2
            }
        }
        $("#math").html(`${num1} ${operator} ${num2}`)
    }


    $("#start-btn").click(function () {
        if ($("#answerField").val() == "") {
            alert("Syötä kenttään montako kysymystä haluat.")
            return
        }
        $("#info").addClass("hide")
        $("#start-btn").addClass("hide")
        $("#answer-btn").removeClass("hide")
        questions = $("#answerField").val()
        left = questions
        $("#answerField").val("")
        getCalculation()
        console.log(questions)
        $("#questions").html(`Kysymyksiä jäljellä ${left}`)
    })

    $("#next-btn").click(function () {
        $("#result").html("")
        $("#math").html("")
        answered++
        left--
        if(answered == questions){
            $("#next-btn").addClass("hide")
            $("#answerField").addClass("hide")
            $("#questions").html(`Vastasit ${correct}/${questions} oikein!`)
        }else{
            $("#next-btn").addClass("hide")
            $("#answer-btn").removeClass("hide")
            $("#result").html("")
            $("#questions").html(`Kysymyksiä jäljellä ${left}`)
            getCalculation()
            $("#answerField").val("")
        }

    })



    $("#answer-btn").click(function () {
        let calculation = eval($("#math").text())
        let answer = $("#answerField").val()
        if ($("#answerField").val() == "") {
            alert("Please enter your answer")
            return
        }
        if (answer == calculation) {
            $("#answer-btn").addClass("hide")
            $("#next-btn").removeClass("hide")
            $("#result").html("oikein")
            correct++
        } else {
            $("#answer-btn").addClass("hide")
            $("#next-btn").removeClass("hide")
            $("#result").html("väärin")
        }

    })
})



