console.clear();
if (window.innerWidth > 576) {
    document.getElementById("menu").classList.add("disp-no-menu");
}
else {
    document.getElementById("menu").classList.add("disp-no-menu-min");
}
var numeroClassi = 18;
var nome = "cubo";
var cambia = true;
var timeChange = 500;
var changeForm = true;
var maxVal = 700;
var minVal = 10;
Interval1();


document.getElementById("btnGenera").addEventListener("click", event => {
    Cambia();
})
document.getElementById("btnTimer").addEventListener("click", event => {
    cambia = !cambia;
    if(cambia)
        document.getElementById("btnTimer").innerHTML= "stop generation";
        else
        document.getElementById("btnTimer").innerHTML = "resume generation"
})

document.getElementById("btnMenu").addEventListener("click", event=>{
    if(window.innerWidth > 576){
        document.getElementById("menu").classList.toggle("disp-no-menu");
        document.getElementById("menu").classList.toggle("disp-block-menu");
    }
    else{
        document.getElementById("menu").classList.toggle("disp-no-menu-min");
    document.getElementById("menu").classList.toggle("disp-block-menu-min");
    }
})

document.getElementById("btnSalvaDimensioni").addEventListener("click", event =>{
    var w = document.getElementById("larghezza").value;
    var h = document.getElementById("altezza").value;
    document.getElementById(nome).style.width = w +"px";
    document.getElementById(nome).style.height = h + "px";
})

document.getElementById("btnSalvaTimer").addEventListener("click", event=>{
    var t = document.getElementById("txtTimer").value;
    if(t > 99){
        timeChange = Math.round(t);
    }
    else{
        document.getElementById("txtTimer").value = timeChange;
    }
})

document.getElementById("btnVal").addEventListener("click", event=>{
	minVal = document.getElementById("txtValMin").value;
	minVal = document.getElementById("txtValMax").value;
})

document.getElementById("btnColore").addEventListener("click", event => {
    var colore = "#" + document.getElementById("txtColore").value;
    document.getElementById(nome).style.backgroundColor= colore
})

document.getElementById("btnGitHub").addEventListener("click", event => {
    open("https://github.com/mattiaSenni/shapeInMotion");
})

function Interval1() {
    setTimeout(event => {
        changeInterval();
    }, timeChange);
}

function changeInterval() {
    if (cambia) {
        Cambia();
    }
    Interval1();
}

//metodo cambia(metodo principale)
function Cambia() {
    var rand = Math.round(Math.random() * (numeroClassi - 1));
    var colore = CambiaColore();
    var w, h;
    if(changeForm){
		w = Math.round(Math.random() * (maxVal - minVal) + minVal);
		h = Math.round(Math.random() * (maxVal - minVal) + minVal);
	}
	else{
		w = document.getElementById(nome).style.width;
		h = document.getElementById(nome).style.height;
	}
    document.getElementById(nome).style.width = w +"px";
    document.getElementById(nome).style.height = h +"px";
    removeAllClass();
    addClass(rand);
	console.log("transform: " + rand + ", color: " + colore + ", width; " + w + ", height: " + h);
}

function CambiaColore() {
    var colore = "";
    for (var i = 0; i < 6; i++) {
        var numero = Math.round(Math.random() * 15)
        colore += ConvertToEsaMaxA(numero);
    }
    document.getElementById(nome).style.backgroundColor = "#" + colore;
    document.getElementById("txtColore").value = colore;
    return colore
}

function removeAllClass() {
    for (var i = 0; i < numeroClassi; i++) {
        document.getElementById(nome).classList.remove("a" + i)
    }
}

function addClass(num) {
    document.getElementById(nome).classList.add("a" + num)
}

function ConvertToEsaMaxA(num) {
    if (num == 0)
        return "0";
    if (num == 1)
        return "1";
    if (num == 2)
        return "2";
    if (num == 3)
        return "3";
    if (num == 4)
        return "4";
    if (num == 5)
        return "5";
    if (num == 6)
        return "6";
    if (num == 7)
        return "7";
    if (num == 8)
        return "8";
    if (num == 9)
        return "9";
    if (num == 10)
        return "A";
    if (num == 11)
        return "B";
    if (num == 12)
        return "C";
    if (num == 13)
        return "D";
    if (num == 14)
        return "E";
    if (num == 15)
        return "F";
}

function MostraBottoneGenera(){
    var checkbox = document.getElementById("switchBottoneGenera");
    if(checkbox.checked ){
        document.getElementById("btnGenera").style.display="block";
    }
    else{
        document.getElementById("btnGenera").style.display="none";
    }
}

function MostraBottoneInterrompi(){
    var checkbox = document.getElementById("switchInterrompiGenerazione");
    if(checkbox.checked ){
        document.getElementById("btnTimer").style.display="block";
    }
    else{
        document.getElementById("btnTimer").style.display="none";
    }
}

function CambiaForma() {
    changeForm = !changeForm;
	if(!changeForm){
		document.getElementById(nome).style.width = "200px";
		document.getElementById(nome).style.height = "200px";
	}
}