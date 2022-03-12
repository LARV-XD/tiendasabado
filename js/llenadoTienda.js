//arreglo de obejtos
/*
let productos=[
    {nombre:"Collar Naruto", precio:20000,foto:"img/Foto4.jpg",descripcion:"Collar de naruto shippuden"},
    {nombre:"Camiseta snk", precio:25000,foto:"img/camiseta.png",descripcion:"Camiseta snk simbolo de la legion"},
    {nombre:"Figura de madara", precio:15000,foto:"img/madara.png",descripcion:"Madara uchiga figura grande"},
    {nombre:"Gato", precio:80000,foto:"img/gato.png",descripcion:"cosplay de gato"},
    {nombre:"Cosplay", precio:200000,foto:"img/cosplay.png",descripcion:"cosplay de una buena serie"},
    {nombre:"Mascara Toyko", precio:40000,foto:"img/mascara.png",descripcion:"mascara de kaneki"},
    {nombre:"Mascara Apuestas", precio:27000,foto:"img/mascara1.jpg",descripcion:"Mascara de la serie de apuestas"},
    {nombre:"Collar Corazon", precio:16000,foto:"img/collar1.png",descripcion:"collar de amor"},
    {nombre:"Collar Sharigan", precio:18000,foto:"img/collar2.jpg",descripcion:"collar parecido al de itachi"},
    {nombre:"Figura de Tanjiro", precio:15000,foto:"img/tanjiro.jpg",descripcion:"Demon slayer figura grande"},

]
*/


  export function pintarTienda(){
      //arreglo de objetos
    let productosBD = [
        {foto:'img/collar.jpg',nombre:"Collar Naruto", precio:20000},
        {foto:'img/camiseta.png',nombre:"Camiseta snk", precio:25000},
        {foto:'img/madara.png',nombre:"Figura de madara", precio:15000},
        {foto:'img/gato.png',nombre:"Gato", precio:80000},
        {foto:'img/cosplay.png',nombre:"Cosplay", precio:200000},
        {foto:'img/mascara.png',nombre:"Mascara  Toyko", precio:40000},
        {foto:'img/mascara1.jpg',nombre:"Mascara Apuestas", precio:27000},
        {foto:'img/collar1.png',nombre:"Collar Corazon", precio:16000},
        {foto:'img/collar2.jpg',nombre:"Collar Sharigan", precio:18000},
        {foto:'img/tanjiro.jpg',nombre:"Figura de Tanjiro", precio:15000},
    
    ]
    
    //creo referencia al componente padre
    //creo una variable para almacenar la base
    //sobre la cual voy a pintar
    
    let fila=document.getElementById("fila")
    
    
    
    //Recorriendo un arreglo con js
    // buscar o selecconary esculcar
    
      // productosBD.forEach(function(producto){ console.log("Quiero una skate")})
     productosBD.forEach(function(producto){ 
          console.log(producto.nombre)
          console.log(producto.precio)
          console.log(producto.foto)


          //receta para pintar con js
          //paso 1 
          //comienze a crear la estroctura que nesesite
          //creo la columna
          let columna=document.createElement("div")
          columna.classList.add("col")
    
          //creo la tarjeta
          let tarjeta=document.createElement("div")
          tarjeta.classList.add("card")
          tarjeta.classList.add("h-100")
    
          //creo la imagen
          let foto=document.createElement("img")
          foto.classList.add("card-img-top")
          foto.src=producto.foto
    
          let precio=document.createElement("h2")
          precio.classList.add("card-text")
          precio.textContent= `${producto.precio}`
    
          let nombre=document.createElement("h3")
          nombre.classList.add("card-title")
          nombre.textContent= producto.nombre

          // creando un boton
          let boton=document.createElement("button")
          boton.setAttribute("type","button")
          boton.classList.add("btn","btn-info","mx-4","mb-4")
          boton.textContent= "ver producto"

    
    
    
    
            //ordenar la estroctura
          //crear padres e hijos
    
          tarjeta.appendChild(foto)
          columna.appendChild(tarjeta)
          fila.appendChild(columna)
    
          tarjeta.appendChild(precio)
          columna.appendChild(tarjeta)
          fila.appendChild(columna)
    
          
          tarjeta.appendChild(nombre)
          columna.appendChild(tarjeta)
          fila.appendChild(columna)

          tarjeta.appendChild(boton)
          columna.appendChild(tarjeta)
          fila.appendChild(columna)

        
        
    
    
    
    
    
    
    
    })
        
    
   /* //escuchando clic en el boton
    let boton=document.getElementById("boton")
    
    //detectando el primer evento
    boton.addEventListener("click",cambiarfoto)
    
    //creando una funcion
    function cambiarfoto(){
        
        let foto=document.getElementById("fotoprueba")
        foto.src="img/mascara.jpg"
    
    }
    

 }
*/ }