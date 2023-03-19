
var nickname = window.prompt("Ingrese su nombre", "Ingresar aquí...");

alert("Hola, " + nickname + "!");

if (nickname != null){
    document.getElementById("welcome").innerText = "Bienvenido, " + nickname + "!";
}
class Button {
    constructor(parentID, text){
        this.parentID = parentID;
        this.text = text;
    }
    render(){
        let myApp = document.getElementById(this.parentID);
        const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button><br>";
        myApp.innerHTML = myButtonHTML;
    }
}
let myButton = new Button ("App", "Login...");
myButton.render();

let myButton2 = new Button ("App", "Signup");
myButton2.render();

class Input {
    constructor(parentID, type, label){
        this.parentID = parentID;
        this.type = type;
        this.label = label;
    }
    render(){
        let myApp = document.getElementById(this.parentID);
        const myInputHTML = myApp.innerHTML + "<label>" +this.label + "</label><input type=" + this.type +"><br>";
        myApp.innerHTML = myInputHTML;
    }
}

let myInput = new Input ("App", "email", "User: ");
myInput.render();
let myInput2 = new Input ("App", "password", "Password: ");
myInput2.render();
let myInput3 = new Input ("App", "checkbox", "Permanecer logeado");
myInput3.render();
let myInput4 = new Input ("App", "date","Ingrese su fecha de nacimiento");
myInput4.render();
