// 1) Uso del método getElementById y de la propiedad innerHTML

{
    
}
    
// 2) Busqueda de elementos HTML por nombre de etiqueta
{
    
}

/*{

}*/

// 3) Encontrar elementos por nombre de clases
{
    
}

// 4) Búsqueda de elementos HTML mediante selectores de CSS


{
    const listItems = document.querySelectorAll("ul > li"); console.log(listItems);
}

{
    const h1Element = document.querySelector("h1"); console.log(h1Element);
}

{
    const list = document.querySelector(".list"); console.log(list);
}

{
    const listaDeElementos = document.querySelectorAll("ul > li");
    listaDeElementos.forEach((item) => {
        console.log(item);
    });
}

{
    const h1 = document.querySelector("h1");
    h1.style.color = "blue";
}

// 5) Búsqueda de elementos HTML por colecciones de objetos HTML
{
    const x = document.forms["form1"];
    let texto = "";
    for(let i = 0; i < exs.lenght; i++){
        texto += x.elements[i].value +"<br>";
    }
    document.getElementById("demo").innerHTML = texto; console.log(x);
}

// 6) Agregar nuevos elementos al documento HTML
