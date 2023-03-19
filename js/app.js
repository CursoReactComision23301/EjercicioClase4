
var nickname = window.prompt("Ingrese su nombre", "Ingresar aquí...");

alert("Hola, " + nickname + "!");

if (nickname != null){
    document.getElementById("welcome").innerText = "Bienvenido, " + nickname + "!";
}

