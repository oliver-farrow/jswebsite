//Script that shows use of booleans, and the if command
let number = 0;
document.getElementById("count").innerHTML = number;
function add() {
    number = number + 1;
    document.getElementById("count").innerHTML = number;
    if (number == 15) {
        number = 0;
        window.alert("slow down");
        document.getElementById("count").innerHTML = number;
    }
}