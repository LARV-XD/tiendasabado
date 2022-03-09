//comentario de linea 
/*
comentario de bloque
*/



//variables
let nombreUsuario="Luis"
let estaturaUsuario=1.77
let edadUsuario=20
let telefonoUsuario="3216317987"
let esPaisa= false // (banderas)

const APELLIDOS_USUARIO="Rios Vanegas"

//UNIR LOS MENSAJES CON LAS VARIABLES
//(CONTATENAR)
//console.log("Buenas tardes "+nombreUsuario+" su edad es "+edadUsuario)

//console.log(`buenas tardes ${nombreUsuario} su edad es ${edadUsuario}`)

//UTILIZANDO EL DOM

let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="ME GUSTA EL ANIME"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")


let tituloMenu=document.getElementById("titulo1")
tituloMenu.textContent="Ataque"


let etiquetafotodarli=document.getElementById("darli")
etiquetafotodarli.src="img/foto1.jpg"

//salidas
//console.log(nombreUsuario)