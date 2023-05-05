let text = "This is the Text";
document.getElementById("message").innerHTML = text;

function change() {
    document.getElementById("message").innerHTML = text.replace("Text", "end.")
    }