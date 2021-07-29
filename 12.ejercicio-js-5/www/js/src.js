'use strict';

const aplicacion = document.querySelector ('.container');

const url = 'https://rickandmortyapi.com/api/episode';
fetch(url)
.then((response) => response.json())
.then((data) => {
    data.results.forEach( usuario=> {
        console.log(usuario.air_date);
        //const p = document.createElement('p')
        //p.innerHTML = usuario.air_date
        //aplicacion.appendChild(p)
       // if (air_date === "january");
       for (let i = 0; i< data.length; i++) {
        if (air_date === "january")
        results 
    }
    })
    


    
    });


    /* const air_date = data.results.air_date;
    for (let i = 0; i < data.length; i++);
    console.log(air_date);
 */
    
/* }); */
/* const mostrarFecha = (url) => {
    for (let i = 0; i< data.length; i++) {
        if (air_date === "january")
        console.log(mostrarFecha);
    }
}
 */

/* const air_data = data.results[0].air_data;
function fecha() {
    if (air_date === january) {
        results = air_date;
    } else {
        console.error(error);
    }
}
console.log(fecha);  */