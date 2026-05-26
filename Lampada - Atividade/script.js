var img = document.getElementById("lamp");
var ligada = false;

document.getElementById("lamp").addEventListener("click", function (){
    if (ligada) {
        img.src = "assets/lamp_off.png"
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)";
    } else {
        img.src = "assets/lamp_on.png";
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
    }
    ligada = !ligada;
})