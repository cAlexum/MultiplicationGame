document.getElementById("score-number").innerText = localStorage.getItem("final-score");

function numberGeneration() {
    document.getElementById("1st-number").innerText = Math.floor(Math.random() * 10);
    document.getElementById("2nd-number").innerText = Math.floor(Math.random() * 10);
}

function multiplicationCheck() {
    if (document.getElementById("answer").value == parseInt(document.getElementById("1st-number").innerText) * parseInt(document.getElementById("2nd-number").innerText)) {
        localStorage.setItem("final-score", parseInt(localStorage.getItem("final-score")) + 1);
    }
    else {
        localStorage.setItem("final-score", parseInt(localStorage.getItem("final-score")) - 1);
    };
    document.getElementById("score-number").innerText = localStorage.getItem("final-score");
    numberGeneration();
    document.getElementById('answer').value = "";
}

numberGeneration();