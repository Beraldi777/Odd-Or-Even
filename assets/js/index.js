function verificar() {
var n1 = document.getElementById("n1");
var num1 = Number(n1.value)
if (num1 % 2 == 0) {
    res.innerHTML = "Par!";
    } else {
        res.innerHTML = "Ímpar!"
    }
}