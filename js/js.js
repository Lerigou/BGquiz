var x1 = 0;
        var x2 = 0;
        var x3 = 0;
        var x4 = 0;
        var x5 = 0;
        var y = x1 + x2 + x3 + x4 + x5

        const resposta1 = function (alternativa) {



            switch (alternativa) {
                case "a":
                    x1 = + 0
                    console.log("Resposta no final")
                    break;
                case "b":
                    x1 = + 1
                    console.log("Resposta no final")
                    break;
                case "c":
                    x1 = + 0
                    console.log("Resposta no final")
                    break;
                case "d":
                    x1 = + 0
                    console.log("Resposta no final")
                    break;
                case "e":
                    x1 = + 0
                    console.log("Resposta no final")
                    break;
            }
        }

        const resposta2 = function (alternativa2) {

            switch (alternativa2) {
                case "a":
                    x2 = + 0
                    console.log("Resposta no final")
                    break;
                case "b":
                    x2 = + 0
                    console.log("Resposta no final")
                    break;
                case "c":
                    x2 = + 0
                    console.log("Resposta no final")
                    break;
                case "d":
                    x2 = + 1
                    console.log("Resposta no final")
                    break;
                case "e":
                    x2 = + 0
                    console.log("Resposta no final")
                    break;
            }
        }

        const resposta3 = function (alternativa3) {

            switch (alternativa3) {
                case "a":
                    x3 = + 0
                    console.log("Resposta no final")
                    break;
                case "b":
                    x3 = + 1
                    console.log("Resposta no final")
                    break;
                case "c":
                    x3 = + 0
                    console.log("Resposta no final")
                    break;
                case "d":
                    x3 = + 0
                    console.log("Resposta no final")
                    break;
                case "e":
                    x3 = + 0
                    console.log("Resposta no final")
                    break;
            }
        }

        const resposta4 = function (alternativa4) {

            switch (alternativa4) {
                case "a":
                    x4 = + 0
                    console.log("Resposta no final")
                    break;
                case "b":
                    x4 = + 0
                    console.log("Resposta no final")
                    break;
                case "c":
                    x4 = + 0
                    console.log("Resposta no final")
                    break;
                case "d":
                    x4 = + 0
                    console.log("Resposta no final")
                    break;
                case "e":
                    x4 = + 1
                    console.log("Resposta no final")
                    break;
            }
        }

        const resposta5 = function (alternativa5) {

            switch (alternativa5) {
                case "a":
                    x5 = + 1
                    console.log("Resposta no final")
                    break;
                case "b":
                    x5 = + 0
                    console.log("Resposta no final")
                    break;
                case "c":
                    x5 = + 0
                    console.log("Resposta no final")
                    break;
                case "d":
                    x5 = + 0
                    console.log("Resposta no final")
                    break;
                case "e":
                    x5 = + 0
                    console.log("Resposta no final")
                    break;
            }
        }

        function responder() {

            if (x1 = 1) {
                y = y + 1
            } else {
                y = y + 0
            }

            if (x2 = 1) {
                y = y + 1
            } else {
                y = y + 0
            }

            if (x3 = 1) {
                y = y + 1
            } else {
                y = y + 0
            }

            if (x4 = 1) {
                y = y + 1
            } else {
                y = y + 0
            }

            if (x5 = 1) {
                y = y + 1
            } else {
                y = y + 0
            }

            document.getElementById('div_aviso').innerHTML = "Você acertou " + y + " de 5"
            document.getElementById('div_aviso').style.display = "block"
        }