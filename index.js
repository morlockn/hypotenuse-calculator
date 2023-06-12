document.getElementById("btn").onclick = function(){

    a = document.getElementById("firstTextBox").value;
    a = Number(a);

    b = document.getElementById("secondTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("hypotenuse").innerHTML = "Hypotenuse: " + c;
}