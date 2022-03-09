//arreglo de obejtos

let productos=[
    {nombre:"Collar Naruto", precio:20000,foto:"img/Foto4.jpg",descripcion:"Collar de naruto shippuden"},
    {nombre:"Camiseta snk", precio:25000,foto:"img/camiseta.jpg",descripcion:"Camiseta snk simbolo de la legion"},
    {nombre:"Figura de madara", precio:15000,foto:"img/madara.png",descripcion:"Madara uchiga figura grande"},
    {nombre:"Gato", precio:80000,foto:"img/gato.jpg",descripcion:"cosplay de gato"},
    {nombre:"Cosplay", precio:200000,foto:"img/cosplay.jpg",descripcion:"cosplay de una buena serie"},
    {nombre:"Mascara Toyko", precio:40000,foto:"img/mascara.jpg",descripcion:"mascara de kaneki"},
    {nombre:"Mascara Apuestas", precio:27000,foto:"img/mascara1.jpg",descripcion:"Mascara de la serie de apuestas"},
    {nombre:"Collar Corazon", precio:16000,foto:"img/collar1.png",descripcion:"collar de amor"},
    {nombre:"Collar Sharigan", precio:18000,foto:"img/collar2.jpg",descripcion:"collar parecido al de itachi"},
    {nombre:"Figura de Tanjiro", precio:15000,foto:"img/tanjiro.jpg",descripcion:"Demon slayer figura grande"},

]

//arreglo de objetps
let productosBD = [
    {foto:'img/collar.jpg',nombre:"Collar Naruto", precio:20000},
    {foto:'img/camiseta.jpg',nombre:"Camiseta snk", precio:25000},
    {foto:'img/madara.png',nombre:"Figura de madara", precio:15000},
    {foto:'img/gato.jpg',nombre:"Gato", precio:80000},
    {foto:'img/cosplay.jpg',nombre:"Cosplay", precio:200000},
    {foto:'img/mascara.jpg',nombre:"Mascara  Toyko", precio:40000},
    {foto:'img/mascara1.jpg',nombre:"Mascara Apuestas", precio:27000},
    {foto:'img/collar1.png',nombre:"Collar Corazon", precio:16000},
    {foto:'img/collar2.jpg',nombre:"Collar Sharigan", precio:18000},
    {foto:'img/tanjiro.jpg',nombre:"Figura de Tanjiro", precio:15000},

]

//Recorriendo un arreglo con js
// buscar o selecconary esculcar

    productosBD.forEach(function(producto){ console.log("Quiero una skate")})
    

//escuchando clic en el boton
let boton=document.getElementById("boton")

//detectando el primer evento
boton.addEventListener("click",cambiarfoto)

//creando una funcion
function cambiarfoto(){
    
    let foto=document.getElementById("fotoprueba")
    foto.src="img/mascara.jpg"

}

