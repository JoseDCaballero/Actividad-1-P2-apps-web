document.getElementById("demo").innerHTML="¡Hola Mundo!";

document.getElementById("p1").innerHTML="¡Nuevo texto!";

const elemento = document.getElementById("titulo");
elemento.innerHTML="Nuevo encabezado";

const element = document.getElementsByName("p");
const x = document.getElementById("main"); console.log(x);
const y = x.getElementsByTagName("p"); console.log(y);

const xs = document.getElementsByClassName("intro"); console.log(xs);

const sx = document.querySelectorAll("p.intro"); console.log(sx);

const listItems = document.querySelectorAll("ul > li"); console.log(listItems);

const h1Element = document.querySelector("h1"); console.log(h1Element);

const list = document.querySelector(".list"); console.log(list);

const listaDeElementos = document.querySelectorAll("ul > li"); 
listaDeElementos.forEach((item) => {
    console.log(item);
});
const h1 = document.querySelector("h1"); h1.style.color = "blue";

const w = document.forms["form1"];
let texto = "";
for(let i = 0; i < w.length; i++){
    texto += w.elements[i].value +"<br>";
}
document.getElementById("demo").innerHTML = texto; console.log(w);

let lista = document.createElement("ul"); document.body.appendChild(lista);
let elemento1 = document.createElement("li"); elemento1.textContent = "Flor"; lista.appendChild(elemento1);
let elemento2 = document.createElement("li"); elemento2.textContent = "Jaguar"; lista.appendChild(elemento2);

const button = document.getElementById("btn"); button.addEventListener("click", () => {
    alert("Gracias por dar click");
});

function validarFormulario() {
    let q = document.forms["miFormulario"]["nombre"].value;
    if ( q == "" ){
        alert("Se debe completar el nombre"); return false;
    }
}

function miFunction(){
    let x = document.getElementById("numero").value;
    let texto;
    if ( isNaN(x) || x < 1 || x > 10 ){
        texto = "Entrada no válida"; alert(texto);        
    } else {
        texto = "Entrada válida"; alert(texto);
    }
    document.getElementById("demo1").innerHTML = texto;
}

document.getElementById("miImagen").src = "cat.jpg";

document.getElementById("demo2").innerHTML = "Fecha: " + Date();