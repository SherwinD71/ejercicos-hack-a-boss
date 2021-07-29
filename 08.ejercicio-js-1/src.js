'use strict';
//// FETCH ////
const url1 = 'https://randomuser.me/api/';
  const promise = fetch(url1);

 promise.then((data) => {
     console.log(data);
     const json = data.json();

    json.then((userData) => {
     
    
        console.log(`Nombre y Apellido: ${userData.results[0].name.first} ${userData.results[0].name.last}`);
        console.log(`Sexo:, ${userData.results[0].gender}`); 
        console.log( `Pais:, ${userData.results[0].location.country}`);
        console.log(`email: ${userData.results[0].email}`);
        
        
         
     });
    }); 

    function userImage() {
        const img = 'https://randomuser.me/api/portraits/thumb/men/93.jpg';
        const promise1 = fetch(img);
        return userImage;
    };